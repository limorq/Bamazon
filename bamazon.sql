DROP DATABASE Bamazon_db;
CREATE DATABASE Bamazon_db;
USE Bamazon_db;
CREATE TABLE products(
	item_id int(11) auto_increment not null,
	product_name varchar(100),
	dept_name varchar(100),
	price decimal(5, 2),
	stock_quantity integer(10),
	primary key(item_id)
);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Vitamin A", "Viamins", 6.99, 20);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Vitamin D", "Viamins", 8.99, 20);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Nike Hightops", "Shoes", 74.50, 20);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Gucci Sandals", "Shoes", 550.25, 10);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Furby", "Toys", 12.00, 20);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Pet Rock", "Toys", 3.15, 100);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Samsung 50 inch TV", "TVs", 675.00, 20);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Frozen Pizza", "Food", 13.99, 20);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Cat Litter", "Pet Supply", 17.89, 20);

INSERT INTO products (
product_name, dept_name, price, stock_quantity)
	values("Bully Sticks", "Pet Supply", 12.99, 20);

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM products;

