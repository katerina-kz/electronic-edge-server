import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import schema from "@functions/getProductsById/schema";
import { HEADERS } from "../../constants";
import productService from "../../services/products";
import { ProductWithID } from "../../models/types";

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {
        const { productId } = event.pathParameters;

        const product: ProductWithID = await productService.getProductsById(productId);
        // console.log('product', product);

        // if(!!product) {
        //     console.log(`getProductsById invoked with productId: ${event.pathParameters.productId}, the product is ${event.body}`)
        //
        //     return formatJSONResponse({
        //         product,
        //     });
        // }
        if (!product) {
            return formatJSONResponse({
                message: "Product not found..."
            }, 404, HEADERS);
        }
        return formatJSONResponse({ product }, 200, HEADERS)
    } catch (error) {
        console.log(error)
        return formatJSONResponse({
            message: error.message,
        }, 500, HEADERS);
    }
};