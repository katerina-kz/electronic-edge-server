// import parse from "csv-parser";
import csv from "csv-parser";
import { S3_IMPORT_FOLDERS_ENUM } from "../../utils/constants";

class ImportService {
    async getObject(s3, bucketName, objectKey) {
        try {
            const s3Object = await s3.getObject({
                Bucket: bucketName,
                Key: objectKey,
            });
            console.log("Lambda importFileParser selected object: ", s3Object);
            return s3Object;
        } catch (err) {
            console.log('getObject ERROR', err);
            throw new Error(err)
        }
    };

    async createReadStream ( s3Object, sqs ) {
        return new Promise((res, rej) => {
            s3Object
                .createReadStream()
                .pipe(csv())
                .on('data', async data => {
                    try {
                        await this.sendMessageToSQS(sqs, JSON.stringify(data))
                        console.log("Message has been sent to SQS", data)
                    } catch (err) {
                        console.error('Error occurred during sending data to SQS: ', err);
                        console.log('Tried to send data: ', data);
                    }
                })
                .on("error", (error) => {
                    console.log("createReadStream ERROR", rej, error);
                })
                .on("end", () => {
                    console.log("END", res);
                });
        })
    };

    async copyObject (s3, bucketName, objectKey) {
        try {
            await s3
                .copyObject({
                    Bucket: bucketName,
                    CopySource: `${bucketName}/${objectKey}`,
                    Key: objectKey.replace(S3_IMPORT_FOLDERS_ENUM.Uploaded, S3_IMPORT_FOLDERS_ENUM.Parsed
                    ),
                })
                .promise();
        } catch (err) {
            console.log('copyObject ERROR', err);
            throw new Error(err)
        }
    };

    async deleteObject (s3, bucketName, objectKey) {
        try {
            await s3
                .deleteObject({
                    Bucket: bucketName,
                    Key: objectKey,
                })
                .promise();
        } catch (err) {
            console.log('deleteObject ERROR', err);
            throw new Error(err)
        }
    };

    async sendMessageToSQS (sqs, messageBody) {
        console.log("PORT", process.env.SQS_URL)
        await sqs.sendMessage(
            {
                QueueUrl: process.env.SQS_URL,
                MessageBody: JSON.stringify(messageBody),
            },
            (error, data) => {
                if (error) {
                    console.log('SQS error', error);
                    throw Error(error);
                }
                console.log(`Send message: ${data}`);
            },
        );
    };
}

export default new ImportService();
