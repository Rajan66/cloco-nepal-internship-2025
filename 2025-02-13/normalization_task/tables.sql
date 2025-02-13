-- Problem 1

 CREATE TABLE customers (
	 id serial NOT NULL PRIMARY KEY,
	 customer_name varchar(50) NOT NULL
 );

CREATE TABLE orders (
	 id serial NOT NULL PRIMARY KEY,
	 order_id int REFERENCES orders(id) NOT NULL,
	 order_item varchar(50));
);

CREATE TABLE order_items (
	id serial NOT NULL  PRIMARY KEY,
	order_id int  REFERENCES orders(id) NOT NULL,
	order_item varchar(50)
);

-- Problem 2

CREATE TABLE students (
	id  serial PRIMARY KEY,
	name varchar(50) NOT NULL,
	semester varchar(50) NOT NULL
);

CREATE TABLE courses (
	id serial PRIMARY KEY,
	course_name varchar(50) NOT NULL,
	instructor_name varchar(50) NOT NULL
);

CREATE TABLE students_courses (
	id serial PRIMARY KEY,
	student_id int REFERENCES students(id),
	course_id int REFERENCES courses(id)
);

-- Problem 3

CREATE TABLE employees (
	id serial PRIMARY KEY,
	employee_name varchar(50) NOT NULL
);

CREATE TABLE departments (
	id serial PRIMARY KEY,
	department_name varchar(50) NOT NULL
);

CREATE TABLE managers (
	id serial PRIMARY KEY,
	manager_name varchar(50) NOT NULL,
	department_id int REFERENCES departments(id)
);

CREATE TABLE employees_managers (
	id serial PRIMARY KEY,
	employee_id INT REFERENCES employees (id),
	department_id INT REFERENCES departments (id)	
);
