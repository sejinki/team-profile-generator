const inquirer = require ("inquirer");
const fs = require("fs");
const path = require("path");
const userInput = [];

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

let menuOne = [
    {
    type: "list",
    name: "menu",
    message: "What is the next step you want to take?",
    choices: ["add engineer", "add intern", "finish building my team"]
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
        // do something with the data
        returnMenu()
    })
}
function returnMenu(){
    inquirer.prompt(menuOne).then(data => {
        console.log(data)
    }).then((userAnswers) => {
        switch(userAnswers.menu){
            case "add engineer":
            addEngineer()
            case "add intern":
            addIntern()
            case "finishing building my team":
        }
    })
}

function addEngineer(){
    inquirer.prompt(engineerQuestions).then(data => {
        console.log(data)
    })
}

function addIntern(){
    inquirer.prompt(internQuestions).then(data => {
        console.log(data)
    })
}
function 

start_app()

// Logic chain
// Start with manager questions
// do something with the user answers
// Menu --> ask if they want to enter an engineer, intern or be done
// Engineer? Ask engineer questions, do something with those answers then go back to the menu
// Intern? Same as engineer
// Done? Take the user generated list and write the file

// Example
// user inputs manager questions
// let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
// manager {name: 'bob', id: '23', email: 'bob@mail.com', office: '2105551313'}
// push that manager into the team array (userInput) and move on to the next thing