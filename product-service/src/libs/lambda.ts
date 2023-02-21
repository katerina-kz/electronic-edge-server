import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"
import type { AWS } from "@serverless/typescript";

export const middyfy = (handler) => {
  console.log("HANDLER: ", handler)
  return middy(handler).use(middyJsonBodyParser())
}

export type AWSFunction = AWS['functions'][0];
