DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    INDEX dep_id (department_id), 
    -- foreign key refereces cascade
    -- FOREIGN KEY (department_id) REFERNCES department(department_id)

    title VARCHAR(30),
    salary INT UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,

);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fist_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    INDEX role_id (role_id),
    -- foreign key refereces cascade

    manager_id INT UNSIGNED,
    INDEX man_id (manager_id)
    -- foreign key refereces cascade
    -- manager id references role_id

);
