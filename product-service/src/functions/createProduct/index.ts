import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import { Product } from "../../models/types";
import productService from "../../services/products";
import schema from "./schema";
import { HEADERS } from "../../constants";
import { createProductValidation } from "@functions/utils/validation";

export const createProduct: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    console.log("EVENT ", event)
    try {

        // @ts-ignore
        const data = JSON.parse(event.body);

        const { error, isValid } = createProductValidation(data);

        if (!isValid) {
            return formatJSONResponse({
                message: `Catching an error in the field "${error.type}". ${error.text}`
            }, 400, HEADERS);
        }

        const product = await productService.createProduct(data);
        return formatJSONResponse({ product }, 200, HEADERS)
    } catch (error) {
        return formatJSONResponse({
            message: error.message,
        }, 500, HEADERS);
    }
};