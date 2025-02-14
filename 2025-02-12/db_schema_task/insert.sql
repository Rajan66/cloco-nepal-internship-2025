-- 1. Addresses (Nepal-based)
INSERT INTO addresses (country, state, city, street, zipcode)
VALUES 
('Nepal', 'Bagmati', 'Kathmandu', 'Thamel 1', '44600'),
('Nepal', 'Lumbini', 'Lumbini', 'Lumbini Road', '32900'),
('Nepal', 'Karnali', 'Surkhet', 'Badhikhel Road', '21000'),
('Nepal', 'Gandaki', 'Pokhara', 'Lakeside Road', '33700'),
('Nepal', 'Sudurpashchim', 'Dhangadhi', 'Khajura', '10300'),
('Nepal', 'Province No. 2', 'Janakpur', 'Main Road', '45600'),
('Nepal', 'Bagmati', 'Bhairahawa', 'Shree Harsha', '44100'),
('Nepal', 'Koshi', 'Ilam', 'Chandragadhi', '57300'),
('Nepal', 'Lumbini', 'Butwal', 'Siddhartha Nagar', '32901'),
('Nepal', 'Karnali', 'Nepalgunj', 'Airport Road', '20900');

-- 2. Users
INSERT INTO users (first_name, last_name, email, password, address_id, phone, role)
VALUES 
('Sushil', 'Bhandari', 'sushil.bhandari@example.com', 'password123', 1, '9812345678', 'customer'),
('Nisha', 'Sharma', 'nisha.sharma@example.com', 'password123', 2, '9845678901', 'admin'),
('Anil', 'Chhetri', 'anil.chhetri@example.com', 'password123', 3, '9801122334', 'staff'),
('Sita', 'Ghimire', 'sita.ghimire@example.com', 'password123', 4, '9812233445', 'customer'),
('Ramesh', 'Koirala', 'ramesh.koirala@example.com', 'password123', 5, '9809988776', 'author'),
('Pooja', 'Rai', 'pooja.rai@example.com', 'password123', 6, '9815667788', 'customer'),
('Bikash', 'Thapa', 'bikash.thapa@example.com', 'password123', 7, '9846677889', 'customer'),
('Laxmi', 'Tamang', 'laxmi.tamang@example.com', 'password123', 8, '9803344556', 'admin'),
('Deepak', 'Malla', 'deepak.malla@example.com', 'password123', 9, '9812123334', 'staff'),
('Kiran', 'Subedi', 'kiran.subedi@example.com', 'password123', 10, '9845556677', 'author');

-- 3. Publishers
INSERT INTO publishers (name, address_id, phone, email, about)
VALUES 
('Mukti Pustak Bhandar', 1, '9841536210', 'info@muktibooks.com', 'Leading publisher of educational books in Nepal'),
('Ekta Prakashan', 2, '9841547865', 'contact@ektapublishers.com', 'Publisher of Nepali literature and culture'),
('Bikash Pustakalaya', 3, '9847541234', 'info@bikashbooks.com', 'Focused on childrens educational content'),
('Shree Hari Books', 4, '9801122233', 'contact@shreeharibooks.com', 'Publisher of historical fiction and novels'),
('Kathmandu Publishers', 5, '9811223344', 'kathmandupub@example.com', 'Nepals leading book publisher specializing in academic texts'),
('Lumbini Publishers', 6, '9802233445', 'lumbinipub@example.com', 'Books that promote culture and history of Nepal'),
('Nepali Pustak Prakashan', 7, '9845566778', 'info@nepalipustak.com', 'A renowned publisher of Nepali language novels and stories'),
('Sunshine Publishers', 8, '9846677889', 'sunshine.pub@example.com', 'Books for children and young adults'),
('Kantipur Publishers', 9, '9808899011', 'kantipurpubs@example.com', 'Academic publishing house with a focus on local research'),
('Himalaya Publications', 10, '9845671234', 'himalayapub@example.com', 'Books about the Himalayas and their ecological importance');

-- 4. Authors
INSERT INTO authors (user_id, bio)
VALUES 
(5, 'Ramesh Koirala is a famous Nepali author known for his works on Nepali culture and history'),
(9, 'Kiran Subedi is a well-known author and researcher in Nepali literature'),
(10, 'Deepak Malla writes thrilling novels about historical figures of Nepal'),
(1, 'Sushil Bhandari is an emerging author with a passion for fiction and mystery'),
(3, 'Anil Chhetri writes about contemporary Nepali life'),
(2, 'Nisha Sharma is a poet and author who writes on womens issues and rights'),
(6, 'Pooja Rai writes stories about rural Nepal and its challenges'),
(8, 'Laxmi Tamang focuses on short stories with deep human emotions'),
(7, 'Bikash Thapa has written several books on social reform and justice in Nepal'),
(4, 'Sita Ghimire writes childrens books that reflect Nepali values');

-- 5. Books
INSERT INTO books (publisher_id, author_id, isbn, title, description, page_count, stock_quantity, price, published_date)
VALUES 
(1, 5, '978-1234567890', 'The Road to Freedom', 'A captivating tale of Nepals independence movement', 300, 15, 450.00, '2022-06-15'),
(2, 9, '978-2345678901', 'Echoes of the Himalayas', 'A deep dive into the Himalayan mountains and their cultural significance', 250, 10, 500.00, '2023-01-10'),
(3, 10, '978-3456789012', 'Nepal in History', 'A book detailing Nepals rich historical background', 400, 25, 700.00, '2023-07-05'),
(4, 1, '978-4567890123', 'Shadows in the Dark', 'A mystery novel set in Kathmandu', 350, 20, 300.00, '2024-01-20'),
(5, 6, '978-5678901234', 'Roots of the Earth', 'A poetic exploration of rural Nepal', 200, 18, 350.00, '2023-12-01'),
(6, 2, '978-6789012345', 'The Silent Voice', 'A narrative about womens empowerment in Nepal', 280, 30, 550.00, '2024-03-05'),
(7, 3, '978-7890123456', 'Stories of Hope', 'Stories about overcoming adversity in Nepali society', 220, 35, 600.00, '2023-09-25'),
(8, 7, '978-8901234567', 'The Himalayan Journey', 'A travelogue through the Himalayas', 320, 40, 650.00, '2024-02-01'),
(9, 4, '978-9012345678', 'Nepal: The Land of My Heart', 'A personal memoir about Nepals culture', 150, 50, 400.00, '2023-08-15'),
(10, 8, '978-0123456789', 'Children of the Hills', 'Childrens stories from the hills of Nepal', 100, 60, 250.00, '2022-11-10');

-- 6. Categories
INSERT INTO categories (name, description)
VALUES 
('Fiction', 'Novels and stories that focus on imagination and creativity'),
('Non-Fiction', 'Books that are based on factual information and real events'),
('History', 'Books that focus on historical events, people, and places'),
('Children', 'Books suitable for young readers'),
('Biography', 'Books that detail the life of a person'),
('Education', 'Books focusing on educational materials and resources'),
('Culture', 'Books that focus on the cultural aspects of Nepal'),
('Science', 'Books that explain scientific concepts and theories'),
('Adventure', 'Books that involve action and adventurous stories'),
('Mystery', 'Books with thrilling plots and suspenseful twists');

-- 7. BooksCategories
INSERT INTO books_categories (book_id, category_id)
VALUES 
(1, 1), (1, 3),
(2, 2), (2, 3),
(3, 3), (3, 5),
(4, 1), (4, 9),
(5, 1), (5, 7),
(6, 4), (6, 2),
(7, 2), (7, 3),
(8, 5), (8, 4),
(9, 6), (9, 3),
(10, 4), (10, 1);

-- 8. Reviews
INSERT INTO reviews (user_id, book_id, rating, comment)
VALUES 
(1, 1, 5, 'A fantastic read that really opens your eyes to Nepals history'),
(2, 2, 4, 'Very informative, although some chapters were  bit dry'),
(3, 3, 5, 'A must-read for anyone interested in Nepals past'),
(4, 4, 3, 'The book was good, but it was a bit too predictable'),
(5, 5, 5, 'Ramesh Koirala is a brilliant writer, loved every page'),
(6, 6, 4, 'Great book, but could have used more focus on rural development'),
(7, 7, 4, 'Inspiring stories of hope, though a bit lengthy'),
(8, 8, 5, 'Beautifully written, loved the travel experiences shared'),
(9, 9, 5, 'A heartfelt memoir about Nepal, highly recommend'),
(10, 10, 4, 'Children will love this, but a little too simplistic for older readers');

-- 9. Orders
INSERT INTO orders (user_id, billing_address, shipping_address, quantity, total_price, status)
VALUES 
(1, 1, 2, 3, 1350.00, 'unfulfilled'),
(2, 3, 4, 5, 2500.00, 'pending'),
(3, 5, 6, 1, 700.00, 'fulfilled'),
(4, 7, 8, 2, 1200.00, 'unfulfilled'),
(5, 9, 10, 4, 1600.00, 'fulfilled'),
(6, 1, 3, 6, 3300.00, 'cancelled'),
(7, 2, 4, 1, 600.00, 'fulfilled'),
(8, 6, 7, 2, 1300.00, 'pending'),
(9, 8, 9, 3, 1950.00, 'fulfilled'),
(10, 5, 10, 1, 250.00, 'unfulfilled');

-- 10. Order_items 
INSERT INTO order_items (order_id, book_id, quantity)
VALUES 
(1, 1, 2),
(2, 3, 1),
(3, 5, 1),
(4, 4, 3),
(5, 6, 2),
(6, 7, 4),
(7, 8, 1),
(8, 9, 3),
(9, 10, 1),
(10, 1, 2);

-- 11. Payments 
INSERT INTO payments (user_id, order_id, amount, delivery_charge, payment_method, status)
VALUES 
(1, 1, 1350.00, 50.00, 'cash', 'paid'),
(2, 2, 2500.00, 100.00, 'paypal', 'pending'),
(3, 3, 700.00, 25.00, 'esewa', 'paid'),
(4, 4, 1200.00, 75.00, 'card', 'paid'),
(5, 5, 1600.00, 50.00, 'paypal', 'unpaid'),
(6, 6, 3300.00, 150.00, 'cash', 'paid'),
(7, 7, 600.00, 20.00, 'esewa', 'paid'),
(8, 8, 1300.00, 60.00, 'card', 'pending'),
(9, 9, 1950.00, 80.00, 'paypal', 'paid'),
(10, 10, 250.00, 10.00, 'cash', 'paid');

-- 12. Shipments
INSERT INTO shipments (user_id, order_id, shipment_date, estimated_date, delivery_date, status)
VALUES 
(1, 1, '2024-02-05 10:00:00', '2024-02-07 15:00:00', '2024-02-06 12:00:00', 'delivered'),
(2, 2, '2024-02-06 09:00:00', '2024-02-08 14:00:00', NULL, 'in transit'),
(3, 3, '2024-02-07 11:00:00', '2024-02-09 13:00:00', '2024-02-08 11:00:00', 'delivered'),
(4, 4, '2024-02-08 10:30:00', '2024-02-10 16:00:00', NULL, 'waiting for pickup'),
(5, 5, '2024-02-09 12:00:00', '2024-02-11 17:00:00', '2024-02-10 10:00:00', 'delivered'),
(6, 6, '2024-02-10 13:00:00', '2024-02-12 14:00:00', NULL, 'in transit'),
(7, 7, '2024-02-11 14:00:00', '2024-02-13 15:00:00', '2024-02-12 11:00:00', 'delivered'),
(8, 8, '2024-02-12 15:30:00', '2024-02-14 18:00:00', NULL, 'waiting for pickup'),
(9, 9, '2024-02-13 16:00:00', '2024-02-15 12:00:00', '2024-02-14 09:00:00', 'delivered'),
(10, 10, '2024-02-14 09:30:00', '2024-02-16 14:00:00', NULL, 'in transit');
