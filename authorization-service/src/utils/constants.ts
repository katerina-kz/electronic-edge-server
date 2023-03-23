export const HEADERS = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    'Content-Type': 'application/json',
};

export enum STATUS_CODE_ENUM {
    Unauthorized = 401,
    Forbidden = 403,
    ServerError = 500,
}
