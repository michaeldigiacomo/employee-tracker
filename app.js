const mysql = require("mysql");
const inquirer = require("inquirer");

// const employeeFirst = employeeFirst;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password",
  database: "employeeDB",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as ID " + connection.threadId);
  askQuestions();
});

function askQuestions() {
  inquirer
    .prompt([
      {
        name: "userChoice",
        message: "What would you like to do?",
        type: "list",
        choices: ["view roles", "view departments", "view employees", "add roles", "add departments", "add employees", "update employee role"],
      },
      {
        name: "employeeFirst",
        message: "What is the employees first name?",
        type: "input",
      },
      {
        name: "employeeLast",
        message: "What is the employees Last name?",
        type: "input",
      },
    ])
    .then((res) => {
      if (res.userChoice === "view roles") {
        viewRoles();
      } else if (res.userChoice === "view departments") {
        viewDepartments();
      } else if (res.userChoice === "view employees") {
        viewEmployees();
      } else if (res.userChoice === "add roles") {
        addRoles();
      } else if (res.userChoice === "add departments") {
        addDepartments();
      } else if (res.userChoice === "add employees") {
        addEmployees();
      } else if (res.userChoice === "update employee role") {
        updateEmployeeRole();
      }
    })
    .then((res) => {
      if (res.employeeFirst === "Michael") {
        viewEmployees();
      } else if (res.employeeFirst === "David") {
        viewEmployees();
      }
    });
}

function viewRoles() {
  connection.query("select * from role", function (err, res) {
    if (err) throw err;
    console.table(res);
    askQuestions();
  });
}

function viewDepartments() {
  connection.query("select * from department", function (err, res) {
    if (err) throw err;
    console.table(res);
    askQuestions();
  });
}

function viewEmployees() {
  connection.query("select * from employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    askQuestions();
  });
}

function addRoles() {
  connection.query("select * from role", function (err, res) {
    if (err) throw err;
    console.table(res);
    askQuestions();
  });
}