import { getProductsList } from "@functions/getProductsList";
import products from "../products.json";
import LambdaTester from 'lambda-tester'

describe('Unit test for getProductsList file', () => {
    it('should return function', async () => {
        expect(typeof getProductsList).toBe('function');
    });

    it('verifies 200 response', async () => {
        return await LambdaTester(getProductsList)
            .expectResult(result => {
                expect(result.statusCode).toBe(200);
                expect(result.body).toEqual(JSON.stringify({products}));
            });
    });
})