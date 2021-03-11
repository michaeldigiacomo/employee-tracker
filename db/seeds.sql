USE employeeDB;

INSERT INTO department (name)
VALUES ('Sales'),('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1), ('Engineer', 150000, 2);