USE employeeDB;

INSERT INTO department (name)
VALUES ('Sales'),('Engineering'),('Finance'),('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1), ('Salesperson', 150000, 2), ('Software Engineer', 150000, 2), ('Software Engineer', 150000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ;
