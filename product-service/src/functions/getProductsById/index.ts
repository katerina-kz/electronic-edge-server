import  products from "../../products.json";
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { Product } from "../../models/types";

import schema from "@functions/getProductsById/schema";

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const headers = {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    };

    try {
        const { productId } = event.pathParameters;

        const product: Product = await products.find(prod => prod.id === productId);

        if (!product) {
            return formatJSONResponse({
                message: "Product not found..."
            }, 404, headers);
        }
        return formatJSONResponse({ product }, 200, headers)
    } catch (error) {
        return formatJSONResponse({
            message: error.message,
        }, 500, headers);
    }
};