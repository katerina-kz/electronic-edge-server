CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS product (
	id uuid primary key default uuid_generate_v4(),
	title text NOT NULL,
	description text,
    price integer
)

CREATE TABLE IF NOT EXISTS stock_service (
    product_id uuid,
    count integer,
    foreign key ("product_id") references "product_service" ("id")
)

--INSERT INTO product_service (title, description, price) VALUES
--('Movano Ring – Movano', 'Health tech for women has largely been ignored; startup Movano wants to change that with their Movano ring, focused on women’s health.', '50'),
--('Encode Plus Smart WiFi Deadbolt – Schlage', 'In light of the growing smart home and security industry, Schlage is releasing smart door locks in the spring of 2022.', '15'),
--('Eco Remote – Samsung', 'For a sustainable and innovative product coming out in 2022, Samsung’s Eco Remote is made with a recycled material design and can be charged through harnessing Radio Frequency waves or by solar charging.', '130')
--('Body Scan – Withings', 'The health tech product company Withings won three Innovation Honoree awards at CES 2022 for its Body Scan system.', '250')
--('Bespoke French-Door Refrigerator – Samsung', 'In Samsung’s newest line of appliances comes the Bespoke French Door refrigerator with Family Hub', '1400')
--('PerfectFill – KOHLER', 'From KOHLER, PerfectFill will take baths to the next level. ', '100')

-- insert into stock_service (product_id, count) values
-- ((SELECT id FROM products WHERE title = 'Movano Ring – Movano'), '3'),
-- ((SELECT id FROM products WHERE title = 'Encode Plus Smart WiFi Deadbolt – Schlage'), '2'),
-- ((SELECT id FROM products WHERE title = 'Eco Remote – Samsung'), '1'),
-- ((SELECT id FROM products WHERE title = 'Body Scan – Withings'), '20'),
-- ((SELECT id FROM products WHERE title = 'Bespoke French-Door Refrigerator – Samsung'), '10'),
-- ((SELECT id FROM products WHERE title = 'PerfectFill – KOHLER'), '8')
