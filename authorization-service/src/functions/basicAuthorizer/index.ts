import { STATUS_CODE_ENUM } from "../../utils/constants";
import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayAuthorizerEvent } from "aws-lambda";
import { generatePolicy } from "../../utils/helpers";

export const basicAuthorizer = async (event: APIGatewayAuthorizerEvent) => {
    try {
        console.log('AUTHORIZER EVENT: ', JSON.stringify(event));

        if (event.type !== 'TOKEN') {
            return 'Unauthorized from lambda basicAuthorizer';
        }
        const authToken = event.authorizationToken;

        const [, encodedCreds] = authToken.split(" ");
        const buff = Buffer.from(encodedCreds, "base64");
        const [username, password] = buff.toString("utf-8").split(":");

        console.log("username: ", username, " password: ", password);

        const storedPassword = process.env[username];

        const effect =
            !storedPassword || storedPassword !== password ? "Deny" : "Allow";

        console.log("EFFECT: ", effect)

        const policy = generatePolicy(encodedCreds, event.methodArn, effect);

        console.log(`policy: ${JSON.stringify(policy)}`);

        return policy;
    } catch (err) {
        console.log(err)
        return formatJSONResponse({
            message: err
        }, STATUS_CODE_ENUM.ServerError)
    }
}