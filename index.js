const inquirer = require ("inquirer");
const fs = require("fs");
const path = require("path");
const employeesInfo = [];
const profileMethods = require('./src/profile.js')

// const generateHTML = ({ }) =>


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
            name: "github",
            message: "What is the engineer's github username?",
    
        },


]

let internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is the name of the intern?",

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
        message: "What is the name of the intern's school?",

    },
]

function start_app(){
    inquirer.prompt(managerQuestions).then(data => {
        data.employeeType = 'manager'
        employeesInfo.push(data)
        // do something with the data
        returnMenu()
    })
}
function returnMenu(){
    console.log(returnMenu)
    inquirer.prompt(menuOne).then(data => {
        switch(data.menu){
            case "add engineer":
                addEngineer()
                break
            case "add intern":
                addIntern()
                break
            case "finish building my team":
                console.log(employeesInfo)
                createHTML()
                break
        }
    })
}

function addEngineer(){
    inquirer.prompt(engineerQuestions).then(data => {
        data.employeeType = 'engineer'
        employeesInfo.push(data)
        returnMenu()
    })
}

function addIntern(){
    inquirer.prompt(internQuestions).then(data => {
        data.employeeType = 'intern'
        employeesInfo.push(data)
        returnMenu()
    })
}

function createHTML(){
    profileMethods.teamGeneratorProfile(employeesInfo)
}

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