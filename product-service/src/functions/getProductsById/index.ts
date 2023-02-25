import  products from "../../products.json";
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { Product } from "../../models/types";
import schema from "@functions/getProductsById/schema";
import { HEADERS } from "../../constants";

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {
        const { productId } = event.pathParameters;

        const product: Product = await products.find(prod => prod.id === productId);

        if (!product) {
            return formatJSONResponse({
                message: "Product not found..."
            }, 404, HEADERS);
        }
        return formatJSONResponse({ product }, 200, HEADERS)
    } catch (error) {
        return formatJSONResponse({
            message: error.message,
        }, 500, HEADERS);
    }
};