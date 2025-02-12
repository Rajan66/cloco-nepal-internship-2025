# BookStore Application Relationships
### **One-to-Many Relationships**:

1. **Users → Orders**: A user can place multiple orders, but an order belongs to a single user.
2. **Users → Payments**: A user can make multiple payments, but each payment is belongs to one user.
3. **Users → Shipments**: A user can have multiple shipments, but each shipment belongs to one user.
4. **Users → Reviews**: A user can write multiple reviews, but each review belongs to one user.
5. **Users → Addresses**: A user is has one address, but multiple users can have the same address.
6. **Addresses → Publishers**: A publisher has one address, but multiple publishers can be at the same address.
7. **Publishers → Books**: A publisher can publish multiple books, but each book is published by one publisher.
8. **Authors → Books**: An author can write multiple books, but each book has one author.
9. **Orders → Order Items**: An order has multiple order items, but each order item belongs to one order.
10. **Books → Order Items**: A book can be in multiple order items, but one order item belongs to one book.
11. **Books → Reviews**: A book can have multiple reviews, but each review belongs to one book.
12. **Orders → Shipments**: An order can have multiple shipments, but each shipment belongs to one order.

### **Many-to-Many Relationships**:

1. **Books ↔ Categories** (via `books_categories`): A book can belong to multiple categories, and a category can have multiple books.

