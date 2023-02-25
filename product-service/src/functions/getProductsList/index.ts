import products from "../../products.json";
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import schema from "@functions/getProductsList/schema";
import { HEADERS } from "../../constants";

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
    try {
        if (!products.length) {
            return formatJSONResponse({
                message: "Products not found..."
            }, 404, HEADERS);
        }

        return formatJSONResponse({ products }, 200, HEADERS)
    } catch (error) {
        return formatJSONResponse({
            message: error.message,
        }, error.statusCode, HEADERS);
    }
};

