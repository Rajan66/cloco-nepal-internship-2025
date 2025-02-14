-- Get author's name from users table
SELECT u.first_name || ' ' ||  u.last_name AS author_name 
FROM users u JOIN authors a ON a.user_id = u.user_id;

-- Get customer's order's billing and shipping address
SELECT u.first_name || ' ' || u.last_name AS customer_name, 
	b.street AS billing_street , b.city AS billing_city, s.street AS shipping_street, s.city AS shipping_street,
	o.status AS order_status FROM users u
	JOIN orders o ON o.user_id = u.user_id
	JOIN addresses b ON b.address_id = o.billing_address
	JOIN addresses s ON s.address_id = o.shipping_address;

-- Get customer's order  and book details
SELECT o.order_id,u.first_name || ' ' || u.last_name AS customer_name,
	b.title AS book_name, i.quantity AS order_quantity,
	'Rs.' || ' ' || (i.quantity * b.price) AS total_price FROM orders o
	JOIN order_items i ON i.order_id = o.order_id 
	JOIN books b ON b.book_id = i.book_id
	JOIN users u ON u.user_id=o.user_id
	WHERE o.status='fulfilled';

-- Order get shipments and order by delivery_date
SELECT s.shipment_id, s.shipment_date, s.delivery_date, s.estimated_date,
	u.first_name || ' ' || u.last_name AS customer_name FROM shipments s
	LEFT JOIN users u ON s.user_id = u.user_id ORDER BY s.delivery_date;

-- Also get the user who doesn't have a shipment row
SELECT s.shipment_id, s.shipment_date, s.delivery_date, s.estimated_date,
	u.first_name || ' ' || u.last_name AS customer_name FROM shipments s
	RIGHT JOIN users u ON s.user_id = u.user_id;

SELECT b.title, b.isbn,u.first_name || ' ' || u.last_name, from books b
	JOIN authors a ON b.author_id = a.author_id
	JOIN users u ON u.author_id = a.author_id

-- Self JOIN is a regular join that joins a table to itself using the Inner JOIN or LEFT JOIN 
-- JOIN and INNER JOIN are the same
SELECT u.first_name || ' ' || u.last_name AS author_name,
	b.title AS book_title, b.isbn AS book_isbn from books b 
	INNER JOIN authors a ON a.author_id = b.author_id
	INNER JOIN users u ON u.user_id = a.user_id;

-- Get the book, author_name but also the user who doesn't have a book
SELECT u.first_name || ' ' || u.last_name AS author_name,
	b.title AS book_title, b.isbn AS book_isbn from books b 
	INNER JOIN authors a ON a.author_id = b.author_id
	RIGHT JOIN users u ON u.user_id = a.user_id ORDER BY author_name ;

SELECT u.first_name || ' ' || u.last_name AS user_name from users u
	FULL OUTER JOIN authors a ON u.user_id = a.user_id 
	JOIN books b ON b.author_id = a.author_id WHERE b.book_id = NULL;

-- Get users who are not author
SELECT * from users u 
	FULL OUTER JOIN authors a ON a.user_id = u.user_id
	WHERE a.author_id IS NULL;

-- Get a tabe of unrelated tables, results in m x n rows i.e. books x addresses 
SELECT books.title, addresses.country FROM books 
	CROSS JOIN addresses;
