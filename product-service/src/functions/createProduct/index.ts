import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import productService from "../../services/products";
import schema from "./schema";
import { HEADERS, STATUS_CODE_ENUM } from "../../constants";
import { createProductValidation } from "@functions/utils/validation";
// import dynamoProducts from "../../services/dynamoProducts";

export const createProduct: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {

        // @ts-ignore
        const data = JSON.parse(event.body);
        const { error, isValid } = createProductValidation(data);

        if (!isValid) {
            console.log(`createProduct invoked: ${new Date().toLocaleTimeString()} with result of invalid data`)
            return formatJSONResponse({
                message: `Catching an error in the field "${error.type}". ${error.text}`
            }, STATUS_CODE_ENUM.BadRequest, HEADERS);
        }

        // const product = await dynamoProducts.createProduct(data); // DYNAMODB
        const product = await productService.createProduct(data); // RDS

        console.log(`createProduct invoked: ${new Date().toLocaleTimeString()} with result of ${JSON.stringify(product)}`)
        return formatJSONResponse({ product }, STATUS_CODE_ENUM.Created, HEADERS)
    } catch (error) {
        console.log(`createProduct invoked: ${new Date().toLocaleTimeString()} with error ${error}`)
        return formatJSONResponse({
            message: error.message,
        }, STATUS_CODE_ENUM.ServerError, HEADERS);
    }
};