import AWS from "aws-sdk";
import importService from "../services/import";
import { REGION, STATUS_CODE_ENUM } from "../../utils/constants";
import { formatJSONResponse } from "@libs/api-gateway";

export const importFileParser = async (event) => {
    const s3 = new AWS.S3({ region: REGION.east_1 });
    const sqs = new AWS.SQS();

    console.log('importFileParser invoked with event: ', event);

    for (const record of event.Records ) {
        console.log('importFileParser', 'parse record: ', record);

        const bucketName = record.s3.bucket.name;
        const objectKey = record.s3.object.key;

        try {
            const s3Object = await importService.getObject(s3, bucketName, objectKey);

            await importService.createReadStream(s3Object, sqs);
            await importService.copyObject(s3, bucketName, objectKey);
            await importService.deleteObject(s3, bucketName, objectKey);

            console.log(
                    `Lambda importFileParser transfer for the folder ${
                        objectKey.split("/")[1]
                    } was done.`
                );
        } catch (error) {
            console.log("Lambda importFileParser moving files error: ", error);
            return formatJSONResponse({
                message: error.message,
            }, STATUS_CODE_ENUM.ServerError);
        }
    }
}