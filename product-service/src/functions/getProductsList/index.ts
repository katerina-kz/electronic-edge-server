import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import schema from "@functions/getProductsList/schema";
import { HEADERS } from "../../constants";
import productService from "../../services/products";

// const AWS = require("aws-sdk");
// const dynamo = new AWS.DynamoDB.DocumentClient();
//
// const scanProducts = async () => {
//     const scanResult = await dynamo
//         .scan({
//             TableName: process.env.TABLE_NAME_PTODUCTS,
//         })
//         .promise();
//     return scanResult.Items;
// };

// const scanStocks = async () => {
//     const result = await dynamo
//         .scan({
//             TableName: process.env.TABLE_NAME_TWO,
//         })
//         .promise();
//     return result.Items;
// };

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
    try {
        const products = await productService.getProductsList();
        console.log(`getProductsList invoked: ${new Date().toLocaleTimeString()} with result of ${products.length} products`)


        // const productsResult = await scanProducts();
        // const stockResults = await scanStocks();

        // console.log(productsResult);
        // console.log(stockResults)

        if (!products.length) {
            return formatJSONResponse({
                message: "Products not found..."
            }, 404, HEADERS);
        }

        return formatJSONResponse( products , 200, HEADERS)
    } catch (error) {
        return formatJSONResponse({
            message: error.message,
        }, 500, HEADERS);
    }
};

