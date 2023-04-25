const inquirer = require('inquirer');

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'list',
            choices: ['MIT', 'Mozilla', 'Apache', 'None'],
            message: 'Does your repository have a license?',
            name: 'license'
        },
    ])
    .then((response) => {
        // console.log(response);
        writeToFile('generatedREADME.md', response);
    })
}

init();