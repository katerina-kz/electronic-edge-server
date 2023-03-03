export const GET_PRODUCTS_LIST_QUERY = `SELECT p.id, p.title, p.description, p.price, s.count 
    FROM product_service AS p 
    JOIN stock_service AS s 
    ON p.id = s.product_id`;

export const GET_PRODUCT_BY_ID_QUERY = `${GET_PRODUCTS_LIST_QUERY} WHERE p.id = $1`;

export const CREATE_PRODUCT_QUERY = `INSERT INTO product_service(title, price, description)
    VALUES($1,$2,$3)
    RETURNING *`;

export const CREATE_STOCK_QUERY = `INSERT INTO stock_service(product_id, count)
    VALUES($1,$2)
    RETURNING count`;

// --- With the logo -----

// export const CREATE_PRODUCT_QUERY = `INSERT INTO product_service(title, price, description, logo)
//     VALUES($1,$2,$3, $4)
//     RETURNING *`;