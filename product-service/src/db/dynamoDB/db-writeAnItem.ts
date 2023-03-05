import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./db-createClient";

export const putItem = async (items) => {
    try {
        await Promise.all(
            items.map(item => {
                const data = ddbDocClient.send(new PutCommand(item));
                console.log("Success - item added or updated", data);
            })
        )
    } catch (err) {
        console.log("Error", err.stack);
    }
};
