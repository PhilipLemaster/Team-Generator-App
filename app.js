const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./lib/htmlRenderer');

createTeam();

function createTeam(teamize) {
    inquirer
        .prompt ([
            {
                type: 'list',
                message: 'What team member are you accounting for?',
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
                message: "What is the manager's office number?",
                name: 'office',
            },
        ])
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
                message: "What is the engineer's Github username?",
                name: 'github',
            },
        ])
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
                message: "Where does the intern attend school?",
                name: 'school',
            },
        ])
}