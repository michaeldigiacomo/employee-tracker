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
        choices: [
          "view roles",
          "view departments",
          "view employees",
          "add roles",
          "add departments",
          "add employees",
          "update employee role",
        ],
      },
    ])
    .then((res) => {
      let userChoice = res.userChoice;
      if (userChoice === "view roles") {
        viewRoles();
      } else if (userChoice === "view departments") {
        viewDepartments();
      } else if (userChoice === "view employees") {
        viewEmployees();
      } else if (userChoice === "add roles") {
        addRoles();
      } else if (userChoice === "add departments") {
        addDepartments();
      } else if (userChoice === "add employees") {
        addEmployees();
      } else {
        updateEmployeeRole();
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
    console.log("\n")
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
  inquirer.prompt ([
    {
      name: "title",
      message: "What is the name of the role you would like to add?",
      type: "input",
    },
    {
      name: "salary",
      message: "What is the salary of the role?",
      type: "input",
    },
    {
      name: "department_id",
      message: "What is the department ID of the role?",
      type: "input",
    },
  ]) .then(res => {
    connection.query("insert into role set ?",{title: res.title, salary: res.salary, department_id: res.department_id}, function (err, res) {
      if (err) throw err;
      viewRoles();
      askQuestions();
    });
    });
  }

function addDepartments() {
  inquirer.prompt ([
    {
      name: "departmentName",
      message: "What is the name of the department you would like to add?",
      type: "input",
    }
  ]) .then(res => {
    connection.query("insert into department set ?",{name: res.departmentName}, function (err, res) {
      if (err) throw err;
      viewDepartments();
      askQuestions();
    });
  })
}

function addEmployees() {
  inquirer.prompt ([
    {
      name: "firstName",
      message: "What is the first name of the employee?",
      type: "input",
    },
    {
      name: "lastName",
      message: "What is the last name of the employee?",
      type: "input",
    },
    {
      name: "roleId",
      message: "What is the role ID of the employee?",
      type: "input",
    },
    {
      name: "managerId",
      message: "What is the manager ID of the employee?",
      type: "input",
    }
  ]) .then(res => {
    // console.log(res.departmentName);
    connection.query("insert into employee set ?",[
      {
        first_name: res.firstName
      },
      {
        last_name: res.lastName
      },
      {
        role_id: res.roleId
      },
      {
        manager_id: res.managerId
      }
    ], function (err, res) {
      if (err) throw err;
      console.table(res)
      askQuestions();
    });
  })
}

function updateEmployeeRole() {
  inquirer.prompt ([
    {
      name: "id",
      message: "What is the ID of the role you would like to update?",
      type: "input",
    },
    {
      name: "title",
      message: "What is the new title of this role?",
      type: "input",
    }
  ]) .then(res => {
    connection.query("update role set ? where ?",[{title: res.title},{id: res.id}], function (err, res) {
      if (err) throw err;
      viewRoles();
      askQuestions();
    });
  })
}