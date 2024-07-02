DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db

CREATE TABLE roster (
    employee_id INTEGER PRIMARY KEY,
    employee_name VARCHAR (20),
    department_id INTEGER PRIMARY KEY,
    department_name VARCHAR (40)
);