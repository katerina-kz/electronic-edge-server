import AWS from 'aws-sdk-mock';
import { importProductsFile } from "@functions/importProductsFile";
import { HEADERS, STATUS_CODE_ENUM } from "../utils/constants";

AWS.mock('S3', 'getSignedUrl', (_action, _params, callback) => {
    callback(null,_params.Key);
})

describe('importProductsFile', () => {
    it('should returns url', async () => {
        const data = await importProductsFile({
            queryStringParameters: {
                name: 'test.csv'
            }
        });

        expect(data).toEqual({
            statusCode: STATUS_CODE_ENUM.OK,
            headers: HEADERS,
            "isBase64Encoded": false,
            body: JSON.stringify({
                url: {}
            }),
        });
    });

    it('should returns 404 error', async () => {
        const data = await importProductsFile({
            queryStringParameters: {
                name: undefined
            }
        });

        const errorMessage = {
            message: "Cannot read property 'name' of undefined"
        }

        expect(data).toEqual({
            statusCode: STATUS_CODE_ENUM.ServerError,
            body: JSON.stringify(errorMessage),
            headers: HEADERS,
            "isBase64Encoded": false,
        });
    });

    it('should returns 500 error', async () => {
        const data = await importProductsFile({});

        expect(data).toEqual({
            statusCode: STATUS_CODE_ENUM.ServerError,
            body: JSON.stringify({message: {}}),
            headers: HEADERS,
            "isBase64Encoded": false,
        });
    });
});