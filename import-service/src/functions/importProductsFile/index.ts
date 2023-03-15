import AWS from "aws-sdk";
import { BUCKET_NAME, REGION, S3_IMPORT_FOLDERS_ENUM, STATUS_CODE_ENUM } from "../../utils/constants";
import { formatJSONResponse } from "@libs/api-gateway";

export const importProductsFile = async (event) => {
    try {
        const name = event.queryStringParameters.name;

        if (!name) {
            return formatJSONResponse({
                message: "Cannot read property 'name' of undefined"
            }, STATUS_CODE_ENUM.NotFound)
        }

        const s3 = new AWS.S3({ region: REGION });
        const params = {
            Bucket: BUCKET_NAME,
            Key: `${S3_IMPORT_FOLDERS_ENUM.Uploaded}/${name}`,
            Expires: 60,
            ContentType: 'text/csv',
        }

        const url = s3.getSignedUrl('putObject', params);

        if (!url) {
            throw new Error("Can not get URL");
        }

        return formatJSONResponse({ url }, STATUS_CODE_ENUM.OK)
    } catch (err) {
        console.log(err)
        return formatJSONResponse({
            message: err
        }, STATUS_CODE_ENUM.ServerError)
    }
}