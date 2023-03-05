import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import schema from "@functions/getProductsById/schema";
import { HEADERS, STATUS_CODE_ENUM } from "../../constants";
import productService from "../../services/products";
import { ProductWithID } from "../../models/types";
// import dynamoProducts from "../../services/dynamoProducts";

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {
        const { productId } = event.pathParameters;

        // const product = await dynamoProducts.getProductById(productId) // DYNAMODB
        const product: ProductWithID = await productService.getProductsById(productId); // RDS

        if (!!product) {
            console.log(`getProductsById invoked with productId: ${event.pathParameters.productId}, the product not found`)
            return formatJSONResponse({
                message: "Product not found..."
            }, STATUS_CODE_ENUM.NotFound, HEADERS);
        }

        console.log(`getProductsById invoked with productId: ${event.pathParameters.productId}, the product is ${event.body}`)
        return formatJSONResponse({ product }, STATUS_CODE_ENUM.OK, HEADERS)
    } catch (error) {
        console.log(`getProductsById invoked with productId: ${event.pathParameters.productId}, with error ${error}`)
        return formatJSONResponse({
            message: error.message,
        }, STATUS_CODE_ENUM.ServerError, HEADERS);
    }
};
