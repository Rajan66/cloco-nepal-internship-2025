-- create db
CREATE DATABASE book_store;

-- custom types to store user role
CREATE TYPE role_type as ENUM(
'admin', 'customer','staff','author');

-- 1. Addresses
CREATE TABLE addresses (
	address_id serial PRIMARY KEY NOT NULL,
	country varchar(50) NOT NULL,
	state varchar(50) NOT NULL,
	city varchar(50) NOT NULL,
	street varchar(50) NOT NULL,
	zipcode varchar(50) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. Users
CREATE TABLE users (
	user_id serial PRIMARY KEY NOT NULL,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(50) UNIQUE NOT NULL,
	password varchar(255) NOT NULL,
	address_id int NOT NULL REFERENCES addresses(address_id) ON DELETE CASCADE,
	phone varchar(20) NULL UNIQUE,
	role role_type NOT NULL DEFAULT 'customer',
	active BOOLEAN NOT NULL DEFAULT TRUE,
	is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	deleted_at TIMESTAMPTZ NULL
);

-- 3. Publishers
CREATE TABLE publishers (
	publisher_id serial PRIMARY KEY NOT NULL,
	name varchar(50) UNIQUE NOT NULL,
	address_id int NOT NULL REFERENCES addresses (address_id) ON DELETE CASCADE,
	phone varchar(20) UNIQUE NOT NULL,
	email varchar(50) UNIQUE NOT NULL,
	about TEXT NOT NULL,
	status BOOLEAN NOT NULL DEFAULT TRUE,
	is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	deleted_at TIMESTAMPTZ NULL
);

-- 4. Authors
CREATE TABLE authors (
	author_id serial PRIMARY KEY NOT NULL,
	user_id int UNIQUE NOT NULL REFERENCES users (user_id)
	ON UPDATE CASCADE ON DELETE CASCADE,
	bio TEXT CHECK (LENGTH(bio) > 5) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 5. Books
CREATE TABLE books (
	book_id serial PRIMARY KEY NOT NULL,
	publisher_id int REFERENCES publishers(publisher_id) ON DELETE SET NULL,
	author_id int REFERENCES authors(author_id) ON DELETE SET NULL,
	isbn varchar(255) UNIQUE NOT NULL,
	title varchar(100) NOT NULL,
	description text NOT NULL,
	page_count int NOT NULL CHECK (page_count > 0),
	stock_quantity int NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
	price DECIMAL (10,2) NOT NULL CHECK (price > 0.00),
	published_date Date NULL,
	is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	deleted_at TIMESTAMPTZ NULL
);

-- 6. Categories
CREATE TABLE categories (
	category_id serial PRIMARY KEY NOT NULL,
	name varchar(50) NOT NULL,
	description TEXT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 7. BooksCategories
CREATE TABLE books_categories (
	books_categories_id serial PRIMARY KEY NOT NULL,
	book_id int NOT NULL REFERENCES books (book_id) ON DELETE CASCADE,
	category_id int NOT NULL 
	REFERENCES categories (category_id) ON DELETE CASCADE,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE (book_id, category_id)
);

-- 8. Reviews
CREATE TABLE reviews (
	review_id serial PRIMARY KEY NOT NULL,
	user_id int NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
	book_id int NOT NULL REFERENCES books (book_id) ON DELETE CASCADE,
	rating int NOT NULL CHECK (rating BETWEEN 1 and 5), 
	comment TEXT,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 9. Orders
CREATE TABLE orders (
	order_id serial PRIMARY KEY NOT NULL,
	user_id int NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
	billing_address int NOT NULL 
	REFERENCES addresses (address_id) ON DELETE CASCADE,
	shipping_address int NULL
	REFERENCES addresses (address_id) ON DELETE CASCADE,
	quantity int NOT NULL CHECK (quantity > 0),
	total_price DECIMAL (10,2) NOT NULL CHECK (total_price > 0.00),
	status varchar(20) NOT NULL DEFAULT 'unfulfilled'
	CHECK (status IN ('unfulfilled', 'pending', 'fulfilled', 'cancelled')),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 10. Order_items 
CREATE TABLE order_items (
	order_items_id serial PRIMARY KEY NOT NULL,
	order_id int NOT NULL REFERENCES orders (order_id) ON DELETE CASCADE,
	book_id int NOT NULL REFERENCES books (book_id) ON DELETE CASCADE,
	quantity int NOT NULL CHECK (quantity > 0),
	UNIQUE (order_id, book_id),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 11. Payments 
CREATE TABLE payments (
	payment_id serial PRIMARY KEY NOT NULL,
	user_id int NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
	order_id INT NOT NULL REFERENCES orders (order_id) ON DELETE CASCADE,
	amount DECIMAL (10,2) NOT NULL CHECK (amount > 0.00),
	delivery_charge DECIMAL (10,2) NULL CHECK (delivery_charge >= 0),
	payment_method varchar(10) NOT NULL
	CHECK (payment_method IN ('cash', 'esewa', 'paypal', 'card')),
	status varchar(10) NOT NULL CHECK (status IN ('paid', 'pending', 'unpaid')),
	paid_at TIMESTAMPTZ NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 12. Shipments
CREATE TABLE shipments (
	shipment_id serial PRIMARY KEY NOT NULL,
	user_id int NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
	order_id int NOT NULL REFERENCES orders (order_id) ON DELETE CASCADE,
	shipment_date TIMESTAMPTZ NOT NULL,
	estimated_date TIMESTAMPTZ NOT NULL,
	delivery_date TIMESTAMPTZ NULL,
	status varchar(50) NOT NULL DEFAULT 'waiting for pickup' 
	CHECK (status IN ('waiting for pickup','in transit', 'delivered')),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
