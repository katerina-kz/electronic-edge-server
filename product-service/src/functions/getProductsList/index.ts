import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import schema from "@functions/getProductsList/schema";
import { HEADERS, STATUS_CODE_ENUM } from "../../constants";
// import productService from "../../services/products";
import dynamoProducts from "../../services/dynamoProducts";
// import { initDynamoDB } from "../../db/dynamoDB/init";

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
    try {
        // await initDynamoDB();

        const products = await dynamoProducts.getProductList(); // DYNAMODB
        // const products = await productService.getProductsList(); // RDS

        console.log(`getProductsList invoked: ${new Date().toLocaleTimeString()} with result of ${products.length} products`)

        if (!products.length) {
            return formatJSONResponse({
                message: "Products not found..."
            }, STATUS_CODE_ENUM.NotFound, HEADERS);
        }

        // @ts-ignore
        return formatJSONResponse( products , STATUS_CODE_ENUM.OK, HEADERS)
    } catch (error) {
        console.log(`getProductsList invoked: ${new Date().toLocaleTimeString()} with ${error}`)
        return formatJSONResponse({
            message: error.message,
        }, STATUS_CODE_ENUM.ServerError, HEADERS);
    }
};

