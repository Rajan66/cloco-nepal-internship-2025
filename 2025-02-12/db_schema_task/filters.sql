-- Get total_payments of all users, the amount is sum up using user_id
SELECT user_id, SUM(amount) AS total_payments FROM payments
	GROUP BY user_id ORDER BY user_id;

-- Show book count written by author_id
SELECT author_id, COUNT(book_id) FROM books 
GROUP BY author_id;

SELECT user_id, SUM(amount) AS total_payments FROM payments
	GROUP BY user_id 
	HAVING SUM(amount) > 2000
	ORDER BY user_id;


SELECT payment_id FROM payments 
UNION
SELECT shipment_id FROM shipments;

SELECT order_id from payments 
	INTERSECT select order_id from shipments 
	ORDER BY order_id;

SELECT user_id FROM users
EXCEPT 
SELECT user_id FROM authors 
ORDER BY user_id;

--  Sub queries
-- Get user who haven't ordered yet
SELECT first_name, last_name from users 
	WHERE user_id NOT IN (
		SELECT DISTINCT user_id from orders
	); 

-- Get book with the highest price
SELECT title, isbn, price from books 
	WHERE price=(
		SELECT MAX(price) from books
	);

-- Get book with higher price than average
SELECT title, isbn, price from books 
	WHERE price>(
		SELECT AVG(price) from books
	);

-- Get users who have ordered more than 3 books
SELECT first_name || ' ' || last_name as customer_name FROM users
	WHERE user_id IN ( 
		SELECT user_id FROM orders 
		WHERE quantity > 3
	);

-- Get books that haven't been ordered yet
SELECT title, isbn from books 
	WHERE book_id NOT IN (
		SELECT DISTINCT book_id FROM orders
	);

-- Get Total Revenue from Each User's Order
SELECT first_name || ' ' || last_name, (
	SELECT SUM (total_price) from orders 
	WHERE orders.order_id = users.user_id
) AS total_revenue
FROM users;

-- Get Authors who have written at least one book
SELECT author_id from authors 
	WHERE author_id IN (
		SELECT DISTINCT author_id FROM books
	);

-- Get books with average rating greater than 4
SELECT title, isbn, price FROM books
	WHERE book_id IN (
		SELECT book_id from reviews
		GROUP BY book_id
		HAVING AVG(rating) > 4
	);
