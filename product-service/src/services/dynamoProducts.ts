import AWS from "aws-sdk";
import { v4 as uuidv4 } from 'uuid';

const dynamo = new AWS.DynamoDB.DocumentClient();

class DynamoProductsService {
    async scanProducts() {
        try {
            const scanResult = await dynamo
                .scan({
                    TableName: process.env.TABLE_PRODUCTS,
                })
                .promise();

            console.log("Scan result", scanResult)

            return scanResult.Items;
        } catch (err) {
            console.log('ROLLBACK', err);
            throw new Error(err)
        }
    };
    async scanStocks() {
        try {
            const scanResult = await dynamo
                .scan({
                    TableName: process.env.TABLE_STOCKS,
                })
                .promise();

            console.log("Scan result", scanResult)

            return scanResult.Items;
        } catch (err) {
            console.log('ROLLBACK', err);
            throw new Error(err)
        }
    };

    async getProductList() {
        try {
            const productsResult = await this.scanProducts();
            const stockResult = await this.scanStocks();

            if (!productsResult.length && !stockResult.length) {
                throw new Error("Products not found...")
            }

            const joinedProducts = productsResult.map(product => {
                const fullProduct = stockResult.find(stock => product.id === stock.product_id)
                return {...product, ...fullProduct}
            });

            console.log('getProductList was invoked with result: ', joinedProducts)
            return joinedProducts;
        } catch (error) {
            console.log("getProductList failed with error: ", error);
        }
    }

    async getProductById(id) {
        try {
            const paramsProduct = {
                TableName: process.env.TABLE_PRODUCTS,
                ExpressionAttributeValues: {
                    ":id": id,
                },
                KeyConditionExpression: "id = :id",
            };

            const paramsStock = {
                TableName: process.env.TABLE_STOCKS,
                ExpressionAttributeValues: {
                    ":product_id": id,
                },
                KeyConditionExpression: "product_id = :product_id",
            }
            const productData = await dynamo.query(paramsProduct).promise();
            const stocksData = await dynamo.query(paramsStock).promise();

            console.log('Received product data: ', productData);
            console.log('Received stocks data: ', stocksData);
            return { ...productData.Items[0], ...stocksData.Items[0]}
        } catch (error) {
            console.log("getProductById failed with error: ", error)
        }
    }

    async createProduct(product) {
        const { title, description, price, count} = product;
        const generatedId = uuidv4();

        try {
            const params = {
                TransactItems: [
                    {
                        Put: {
                            TableName: process.env.TABLE_PRODUCTS,
                            "Item": {
                                "id": generatedId,
                                "title": title,
                                "description": description,
                                "price": price
                            },
                            ConditionExpression: "attribute_not_exists(id)",
                        }
                    },
                    {
                        Put: {
                            TableName: process.env.TABLE_STOCKS,
                            "Item": {
                                "count": count,
                                "product_id": generatedId
                            },
                            ConditionExpression: "attribute_not_exists(product_id)",
                        }
                    }
                ]
            }

            await dynamo.transactWrite(params).promise();
            console.log("Product was created with: ",  { ...product, count: count, id: generatedId })
            return { created: true, product: { ...product, count: count, id: generatedId } };
        } catch (err) {
            console.log("createProduct failed with error: ", err);
            throw new Error(err)
        }
    };
}

export default new DynamoProductsService();
