-- Create tariff table
CREATE TABLE IF NOT EXISTS tariff (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    origin_country VARCHAR(255) NOT NULL,
    destination_country VARCHAR(255) NOT NULL,
    product_category VARCHAR(255) NOT NULL,
    rate DOUBLE NOT NULL
);

