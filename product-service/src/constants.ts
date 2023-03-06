export const HEADERS = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    'Content-Type': 'application/json',
};

export const REGION = "us-east-1"; //e.g. "us-east-1"

export enum STATUS_CODE_ENUM {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    NotFound = 404,
    Conflict = 409,
    ServerError = 500,
}
