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
    const profileHTML = profileMethods.teamGeneratorProfile(employeesInfo);
    const pageHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="./profile.css">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/78a2821f83.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <h2>Team Profile</h2>
        </header>
    
        <div class = "team justify-content-center d-flex flex-wrap" style = "margin-top: 70px; gap: 10px;">
    
        ${profileHTML}
    
        </div>
        
    </body>
    </html>`;
    fs.writeFile('index.html', pageHTML, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
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