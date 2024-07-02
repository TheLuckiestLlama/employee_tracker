// Require all the shit we need
const inquirer = require('inquirer')
const { Pool } = require('pg')


const questions = [{
    tpye: "input",
    message: "Please enter your name",
    name: "employeeName",
}, {
    type: "list",
    message: "Which department do you work for?",
    name: "departmentName",
    choices: ["Research", "Logistics", "Manufacturing", "Security", "Programming"]
}]

inquirer
.prompt(questions)
.then((response) =>
console.log(response))

const pool = new Pool( 
    {
        user:'postgres',
        password: '2lucky4u!',
        host: 'localhost',
        database: 'employees_db'
    },
    console.log('Connected to the employees_db database!')
)


