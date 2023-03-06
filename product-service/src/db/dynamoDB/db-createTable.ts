import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./db-createClient";

export const createTable = async (table) => {
    try {
        const data = await ddbClient.send(new CreateTableCommand(table));
        console.log("Table Created", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};