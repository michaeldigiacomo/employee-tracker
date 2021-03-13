const mysql = require("mysql");
const inquirer = require("inquirer");

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
        choices: ["view roles", "view departments"],
      },
      {
        name: "employeeName",
        message: "What is the employees first name?",
        type: "list",
        choices: ["Michael", "David"],
      },
    ])
    .then((res) => {
      if (res.userChoice === "view roles") {
        viewRoles();
      } else if (res.userChoice === "view departments") {
        viewDepartments();
      }
    })
    .then((res) => {
      if (res.employeeName === "Michael") {
        viewEmployees();
      } else if (res.employeeName === "David") {
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
