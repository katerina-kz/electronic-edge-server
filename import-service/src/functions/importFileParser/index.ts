import AWS from "aws-sdk";
import { REGION } from "../../utils/constants";
import importService from "../services/import";

export const importFileParser = async (event) => {
    const s3 = new AWS.S3({ region: REGION });

    console.log('importFileParser invoked with event: ', event);

    for (const record of event.Records ) {
        console.log('importFileParser', 'parse record: ', record);

        const bucketName = record.s3.bucket.name;
        const objectKey = record.s3.object.key;

        try {
            const s3Object = await importService.getObject(s3, bucketName, objectKey);
            await importService.createReadStream(s3Object);
            await importService.copyObject(s3, bucketName, objectKey);
            await importService.deleteObject(s3, bucketName, objectKey);

            console.log(
                    `Lambda importFileParser transfer for the folder ${
                        objectKey.split("/")[1]
                    } was done.`
                );
        } catch (error) {
            console.log("Lambda importFileParser moving files error: ", error);
        }
    }
}