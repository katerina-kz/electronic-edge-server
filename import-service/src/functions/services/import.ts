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
            console.log('ERROR', err);
            throw new Error(err)
        }
    };

    async createReadStream ( s3Object ) {
        try {
            s3Object
                .createReadStream()
                .pipe(csv())
                .on("data", (data) => console.log(data));

            return s3Object;
        } catch (err) {
            console.log('ERROR', err);
            throw new Error(err)
        }
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
            console.log('ERROR', err);
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
            console.log('ERROR', err);
            throw new Error(err)
        }
    };
}

export default new ImportService();
