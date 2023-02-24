import products from "../../products.json";
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import schema from "@functions/getProductsList/schema";

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
    const headers = {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    };

    try {
        if (!products.length) {
            return formatJSONResponse({
                message: "Products not found..."
            }, 404, headers);
        }

        return formatJSONResponse({ products }, 200, headers)
    } catch (error) {
        return formatJSONResponse({
            message: error.message,
        }, error.statusCode, headers);
    }
};

