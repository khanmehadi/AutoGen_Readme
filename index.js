// Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is name of your project?',
        name: 'projectname'
    },
    {
        type: 'input',
        message: 'Give a short description of what your app is used for?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Who contributed in the development of the app?',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'What is your username for your GitHub?',
        name: 'username'
    },
    
    {
        type: 'list',
        message: 'Select the license you would like to use.',
        name: 'license',
        choices: ["APACHE 2.0", "MIT", "BOOST 1.0", "NONE"]
    },
    {
        type: 'input',
        message: 'What is the installation process?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How would the end-user use this app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What is the testing process, if any?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'List the type of dependecies used.',
        name: 'dependencies'
    }


];

// Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('Success!')
    })

}

// Create a function to initialize app
function init() {
    inquire.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();