import * as products from "../../products.json";
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
    const headers = {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    };

    try {
        if (!products) {
            return formatJSONResponse({
                message: "Products not found..."
            }, 404);
        }

        return formatJSONResponse({ products }, 200, headers)
    } catch (error) {
        return formatJSONResponse({
            body: {
                message: "Internal server error",
            }
        }, 500)
    }
}

