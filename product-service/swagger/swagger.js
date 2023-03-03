// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "product-service",
    "version": "1"
  },
  "paths": {
    "/products": {
      "get": {
        "summary": "getProductsList",
        "description": "",
        "operationId": "getProductsList.get.products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "post": {
        "summary": "createProduct",
        "description": "",
        "operationId": "createProduct.post.products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/products/{productId}": {
      "get": {
        "summary": "getProductsById",
        "description": "",
        "operationId": "getProductsById.get.products/{productId}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "productId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {
    "ProductWithID": {
      "properties": {
        "id": {
          "title": "ProductWithID.id",
          "type": "string"
        },
        "title": {
          "title": "ProductWithID.title",
          "type": "string"
        },
        "description": {
          "title": "ProductWithID.description",
          "type": "string"
        },
        "price": {
          "title": "ProductWithID.price",
          "type": "number"
        },
        "count": {
          "title": "ProductWithID.count",
          "type": "number"
        },
        "logo": {
          "title": "ProductWithID.logo",
          "type": "string"
        }
      },
      "required": [
        "id",
        "title",
        "description",
        "price",
        "count"
      ],
      "additionalProperties": false,
      "title": "ProductWithID",
      "type": "object"
    },
    "Product": {
      "properties": {
        "title": {
          "title": "Product.title",
          "type": "string"
        },
        "description": {
          "title": "Product.description",
          "type": "string"
        },
        "price": {
          "title": "Product.price",
          "type": "number"
        },
        "count": {
          "title": "Product.count",
          "type": "number"
        },
        "logo": {
          "title": "Product.logo",
          "type": "string"
        }
      },
      "required": [
        "title",
        "description",
        "price",
        "count"
      ],
      "additionalProperties": false,
      "title": "Product",
      "type": "object"
    }
  },
  "securityDefinitions": {},
  "host": "o3kxai97f3.execute-api.us-east-1.amazonaws.com/dev"
};