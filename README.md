# README Maker 

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)|   
| Git | [https://git-scm.com/](https://git-scm.com/) |
| Node.js | [https://nodejs.org/en](https://nodejs.org/en) |
| inquirer | [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer) |

<hr>

## Description 

This project focused heavily on `JavaScript` and had students prompt users through `Node.js` and `inquirer`. The full list of requirements is given below.

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

<hr>

## Table of Contents

* [Code Sample](#code-sample)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)

<hr>

## Code Sample

The prompt functionality of this project was made possible through the `inquirer` library through NPM. Inquirer allows developers to choose a prompt `type`. The code below shows two such prompts. The usage prompt is of type `input`, and will not submit unless there is included text thanks to the `validate` function. The second, the license prompt, is a `list` type prompt, and allows the user to choose from a list of given `choices` to submit.

```js
{
    type: 'input',
    message: 'How do you use your project?',
    name: 'usage',
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
```

The following code sample is from the `renderLicenseBadge` function. This `switch` statement was used to determine which license would be printed to screen. Each `case` corresponds to a given option from the above `choices` list for the license prompt. I chose not to include a `default` statement since every possible input was addressed because of the list prompt.

```js
switch(license){
    case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'None':
        return '';
}
```

<hr>

## Usage 

[Full Sample Video](https://drive.google.com/file/d/1iBP3kR2yE3Rek8f4Dz-h96qvx8z_cmzs/view?usp=sharing)

This project used `Node.js` and `inquirer` to prompt users to enter information about a README.md file. The given information is then used to generate a new `README.md` file (saved to a different file name). 

The user is prompted to give general information about the `README` including a title, description, installation instructions, and several other important pieces of information. The user inputs information to the prompts to be later printed into a new file. This information is then passed to the `generateMarkdown` function as a parameter called `data`. This function takes all the input information and creates a professional `README` with proper formatting.

<hr>

## Learning Points 

Below are the following topics/methods that I learned through this project:

 * [Node.js](https://nodejs.org/en)
 * [NPM](https://www.npmjs.com/)
 * [inquirer](https://www.npmjs.com/package/inquirer)
 * [Node file system](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
 * [Switch Statements](https://www.w3schools.com/js/js_switch.asp)

<hr>

## Author Info


### Jedd Javier

* [LinkedIn](https://www.linkedin.com/in/jedd-javier-4b323426b/)
* [Github](github.com/jeppjeppjepp0)