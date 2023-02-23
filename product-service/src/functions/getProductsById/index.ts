import { default as products } from "../../products.json";
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { Product } from "../../models/types";

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
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
            }, 404);
        }
        return formatJSONResponse({ ...product }, 200, headers)
    } catch (error) {
        return formatJSONResponse( {
            message: "Internal server error",
        }, 500)
    }
};