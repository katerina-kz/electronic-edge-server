import { getProductsById } from "@functions/getProductsById";
import { default as products } from "../products.json";
import LambdaTester from 'lambda-tester'

describe('Unit test for getProductsById file', () => {
    it('should return function', async () => {
        expect(true).toBeTruthy();
        expect(typeof getProductsById).toBe('function');
    });

    it('verifies 200 response', async () => {
        return await LambdaTester(getProductsById)
            .event({
                pathParameters: {
                    productId: "3"
                }
            })
            .expectResult(result => {
                expect(result.statusCode).toBe(200);
                expect(result.body).toEqual(JSON.stringify({
                    product: { ...products[2] }
                }
                ));
            });
    });

    it('verifies 404 response', async () => {
        return await LambdaTester(getProductsById)
            .event({
                pathParameters: {
                    productId: "10"
                }
            })
            .expectResult(result => {
                expect(result.statusCode).toBe(404);
            });
    });

    it('verifies 500 response', async () => {
        return await LambdaTester(getProductsById)
            .event({})
            .expectResult(result => {
                expect(result.statusCode).toBe(500);
            });
    });
})