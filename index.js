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
  .prompt({
    type: "list",
    message: "Welcome to Hyperion Employee Tracker! Please select an option.",
    name: "bootupFunction",
    choices: ["New", "View"]
  })
  .then((response) => {
    executePrompt(response)
})


function executePrompt(response) {
    console.log(response);
    if (response == 'New'){
        inquirer
        .prompt(questions)
        .then((response) =>
        console.log(response))
     } else if (response == 'View') {
         console.log("Somebody fix the employee database!")
     }
    
}




// inquirer
// .prompt(questions)
// .then((response) =>
// console.log(response))

// const pool = new Pool( 
//     {
//         user:'username',
//         password: 'password',
//         host: 'localhost',
//         database: 'employees_db'
//     },
//     console.log('Connected to the employees_db database!')
// )

// pool.connect();

// pool.query('SELECT * FROM employee_names', function (err, {rows}) {
//     console.log(rows);
// })
