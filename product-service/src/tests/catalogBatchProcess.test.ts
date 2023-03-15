import AWS from 'aws-sdk-mock';
import { catalogBatchProcess } from "@functions/catalogBatchProcess";
import { HEADERS, STATUS_CODE_ENUM } from "../constants";
import { default as mockRecords } from "../../path.json"

AWS.mock('SNS', 'publish', Promise.resolve())

jest.mock('pg', () => {
    const mClient = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
    };
    return { Client: jest.fn(() => mClient) };
});

describe('catalogBatchProcess', () => {
    beforeEach(() => {
        jest.resetModules()
        process.env.CREATE_PRODUCT_TOPIC_ARN = 'arn:aws:sns:us-east-1:368986577368:createProductTopic';
        delete process.env.NODE_ENV;
    });

    it('should returns status 200', async () => {
        const data = await catalogBatchProcess(mockRecords);

        expect(data).toEqual({
            statusCode: STATUS_CODE_ENUM.OK,
            headers: HEADERS,
            body: JSON.stringify({
                message: `Products have been created and published`
            }),
        });
    });

    it('should returns 404 error', async () => {
        const data = await catalogBatchProcess({
            Records: []
        });

        const errorMessage = {
            message: "Products not found..."
        }

        expect(data).toEqual({
            statusCode: STATUS_CODE_ENUM.NotFound,
            body: JSON.stringify(errorMessage),
            headers: HEADERS,
        });
    });

    it('should returns 500 error', async () => {
        const data = await catalogBatchProcess({});

        expect(data).toEqual({
            statusCode: STATUS_CODE_ENUM.ServerError,
            body: JSON.stringify({
                message: "Cannot read property 'map' of undefined"
            }),
            headers: HEADERS,
        });
    });
});