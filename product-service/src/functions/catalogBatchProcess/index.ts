import { SNS } from 'aws-sdk';
import { createProductValidation } from "@functions/utils/validation";
import productService from "../../services/products";
import { formatJSONResponse } from "@libs/api-gateway";
import { HEADERS, REGION, STATUS_CODE_ENUM } from "../../constants";

const sns = new SNS({region: REGION});

export const catalogBatchProcess = async (event) => {
    console.log('catalogBatchProcess lambda event:', JSON.stringify(event));

    try {
        const products = event.Records
            .map(({ body }) => JSON.parse(body))
            .filter((product) => {
                const { error, isValid } = createProductValidation(JSON.parse(product));
                if (!isValid) {
                    console.log(`passed product ${product} is invalid: `, error);
                }
                return error;
            });

        if (products.length === 0) {
            return formatJSONResponse({
                message: "Products not found..."
            }, STATUS_CODE_ENUM.NotFound, HEADERS);
        }

        for (const product of products) {
            await productService.createProduct(JSON.parse(product));
        }
        console.log("products created", products.length);

        await productService.publishProducts(products, sns);

        return formatJSONResponse({
            message: `Products have been created and published`,
        }, STATUS_CODE_ENUM.OK, HEADERS);

    } catch (error) {
        console.log(`catalogBatchProcess invoked: ${new Date().toLocaleTimeString()} with ${error}`)
        return formatJSONResponse({
            message: error.message,
        }, STATUS_CODE_ENUM.ServerError, HEADERS);
    }
};