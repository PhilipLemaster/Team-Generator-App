const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./lib/htmlRenderer');

const employees = [];

createTeam();

function createTeam() {
    inquirer
        .prompt ([
            {
                type: 'list',
                message: 'What team member would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern'],
                name: 'type'
            }
        ])

        .then(function(response) {
            if (response.type === 'Manager') {
                managerQs();
            }
            else if (response.type === 'Engineer') {
                engineerQs();
            }
            else if (response.type === 'Intern') {
                internQs();
            }
        });
    
}

function addQs() {
    inquirer
        .prompt ([
            {
                type: 'list',
                message: 'Would you like to add another team member?',
                choices: ['Yes', 'No'],
                name: 'add'
            }
        ])

        .then(function(response) {
            if (response.add === 'Yes') {
                createTeam();
            }
            
            else if (response.add === 'No') {
                console.log('Rendering and writing HTML file..')
                // console.log(employees)
                let content = render(employees);
                fs.writeFile(outputPath, content);
            }
        })
}

function managerQs() { 

    inquirer
        .prompt ([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the manager's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the manager's work ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'office',
            },
        ])

        .then(function(response) {
            var manager = new Manager(response.name, response.id, response.email, response.office);
            employees.push(manager);
            addQs();
        })
}

function engineerQs() {
    inquirer
        .prompt ([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the engineer's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the engineer's work ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the engineer's Github username?",
                name: 'github',
            },
        ])

        .then(function(response) {
            var engineer = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(engineer);
            addQs();
        })    
}

function internQs() {
    inquirer
        .prompt ([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the intern's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the intern's work ID?",
                name: 'id',
            },
            {
                type: 'input',
                message: "Where does the intern attend school?",
                name: 'school',
            },
        ])

        .then(function(response) {
            var intern = new Intern(response.name, response.id, response.email, response.school);
            employees.push(intern);
            addQs();
        })    
}