import products from '../../mocks/createProductDB.json'
import stocks from '../../mocks/createStocksDB.json'
import productsItems from '../../mocks/mockDBProducts.json'
import stocksItems from '../../mocks/mockDBStocks.json'
import { createTable } from "./db-createTable";
import { putItem } from "./db-writeAnItem";

export const initDynamoDB = async () => {
    try {
        await createTable(products);
        await createTable(stocks);

        await putItem(productsItems);
        await putItem(stocksItems);
    } catch (err) {
        console.log(err)
    }
}