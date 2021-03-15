USE employeeDB;

INSERT INTO department (name)
VALUES ('Sales'),('Engineering'),('Finance'),('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1), ('Engineer', 150000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Tony', 'Stark', 1, NULL), ('Steve', 'Rodgers', 1, NULL), ('Bruce', 'Banner', 1, NULL), ('Natasha', 'Romanoff', 1, NULL), ('Clint', 'Barton', 1, NULL), ('Bucky', 'Barnes', 1, NULL), ('Steve', 'Rodgers', 1, NULL);
