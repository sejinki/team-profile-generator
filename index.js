const inquirer = require ("inquirer")
const fs = require("fs")
const path = require("path")

let managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager?",

    },
    {
        type: "input",
        name: "employeeID",
        message: "What is the employee ID?",

    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is the manager's email address?",

    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",

    },
]

let engineerQuestions = [
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the engineer?",
    
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the engineer's employee ID?",
    
        },
        {
            type: "input",
            name: "emailAdress",
            message: "What is the engineer's email address?",
    
        },
        {
            type: "input",
            name: "gitHubUsername",
            message: "What is the engineer's github username?",
    
        },

]

let internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is the name of the intern",

    },
    {
        type: "input",
        name: "internID",
        message: "What is the intern's ID?",

    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",

    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the name of the intern's school",

    },
]

function start_app(){
    inquirer.prompt(managerQuestions).then(data => {
        console.log(data)
    })
}
start_app()