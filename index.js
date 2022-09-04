const inquirer = require('inquirer')
const fs = requirer("fs")
const path = require("path")

let managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager",

    },
    {
        type: "input",
        name: "employeeID",
        message: "What is the name of the manager",

    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is the name of the manager",

    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the name of the manager",

    },
]

let employeeQuestions = [
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of the employee",
    
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the name of the manager",
    
        },
        {
            type: "input",
            name: "emailAdress",
            message: "What is the name of the manager",
    
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the name of the manager",
    
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
        message: "What is the name of the",

    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the name of the manager",

    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the name of the manager",

    },
]

function start_app(){
    managerQuestions.then(function()){
        
    }
}
start_app()