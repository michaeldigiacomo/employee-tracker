const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password',
    database: 'employeeDB'
});

connection.connect(function(err){
    if(err) throw (err);
    console.log('Connected as ID ' + connection.threadId);
    askQuestions();
});

function askQuestions() {
    inquirer.prompt([
        {
            name: "userChoice",
            message: "What would you like to do?",
            type: "list",
            choices: ["view roles", "view departments"] 
        }
    ]).then(res => {
        if (res.userChoice === 'view roles') {
            viewRoles()
        } else if (res.userChoice === 'view departments') {
            viewDepartments()
        }
    })
}

function viewRoles() {
    connection.query('select * from role', function(err, res) {
    if(err) throw (err);
        console.table(res)
        askQuestions()
    })
}

function viewDepartments() {
    connection.query('select * from department', function(err, res) {
    if(err) throw (err);
        console.table(res)
        askQuestions()
    })
}


