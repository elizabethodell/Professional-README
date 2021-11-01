// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your README file name? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your README title!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this program? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter your installation guide!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'instructions',
        message: 'What are installation instructions? (Required)',
        validate: instructionsInput => {
            if (instructionsInput) {
                return true;
            } else {
                console.log('Please enter your installation guide!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your test instructions!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What license did you use?',
        choices: ['Apache', 'MIT', 'ISC', 'GNU GPLv3']
    },

    
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("README file created!")
        }
    })
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();