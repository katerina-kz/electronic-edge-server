import { createConnectionClient } from "../db/db-connector";
import {
    CREATE_PRODUCT_QUERY,
    CREATE_STOCK_QUERY,
    GET_PRODUCT_BY_ID_QUERY,
    GET_PRODUCTS_LIST_QUERY
} from "../db/db-queries";
import { Product, ProductWithID } from "../models/types";

class ProductService {
    async getProductsList() {
        let dbClient;

        try {
            dbClient = await createConnectionClient();
            const result = await dbClient.query(GET_PRODUCTS_LIST_QUERY);

            console.log('getProductsListResult ', result);
            return result.rows;
        } catch (err) {
            await dbClient.query('ROLLBACK');
            console.log('ROLLBACK', err);
            throw new Error(err)
        } finally {
            dbClient?.end();
        }
    };

    async getProductsById ( id: string ): Promise<ProductWithID> {
        let dbClient;

        try {
            dbClient = await createConnectionClient();
            const result = await dbClient.query(GET_PRODUCT_BY_ID_QUERY,[id]);

            console.log('getProductsByIdResult ', result);

            return result.rows.length ? result.rows[0] : null;
        } catch (err) {
            await dbClient.query('ROLLBACK');
            console.log('ROLLBACK', err);
            throw new Error(err)
        } finally {
            dbClient?.end();
        }
    };

    public async createProduct (product: Product): Promise<Product> {
        let dbClient;

        try {
            dbClient = await createConnectionClient();

            await dbClient.query('BEGIN');
            const productCreateResult = await dbClient.query(
                CREATE_PRODUCT_QUERY,
                [product.title, product.price, product.description]
            );
            const [ productItem ] = productCreateResult.rows;
            console.log('productCreateResult ', productItem);
            console.log('Added product with id ', productItem.id);

            const stockCreateResult = await dbClient.query(
                CREATE_STOCK_QUERY,
                [ productItem.id, product.count ]
            )
            console.log('stockCreateResult',stockCreateResult);
            await dbClient.query('COMMIT');

            return { ...productItem, count: product.count};
        } catch (error) {
            await dbClient.query('ROLLBACK');
            console.log('ROLLBACK', error);
        } finally {
            dbClient?.end();
        }
    };

    public async publishProducts (products, sns): Promise<Product> {
        return new Promise((resolve, reject) => {

            const productsData = products.map(data => JSON.parse(data));
            const minPrice = Math.min(...productsData.map(p => p.price));
            sns.publish(
                {
                    Subject: 'New product has been created',
                    MessageAttributes: {
                        price: {
                            DataType: "Number",
                            StringValue: `${minPrice}`
                        }
                    },
                    Message: JSON.stringify(products),
                    TopicArn: process.env.CREATE_PRODUCT_TOPIC_ARN,
                },
                (err, data) => {
                    if (err) {
                        console.log("publishProducts func invoke with ERROR: ", err)
                        reject(err);
                    } else {
                        console.log("publishProducts func invoke SUCCESSFULLY with DATA: ", data)
                        resolve(data);
                    }
                }
            );
        }
    )};
}

export default new ProductService();
