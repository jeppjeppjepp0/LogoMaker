const inquirer = require('inquirer');
const fs = require('fs');
// const Shapes = require('./lib/shapes.js');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle.js');
const Circle = require('./lib/circle');

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters of text',
            name: 'text',
            validate: function (input) { 
                return input.length > 0 && input.length <= 3
            }
        },
        {
            type: 'input',
            message: 'Enter a color (name or hexadecimal) for text color',
            name: 'textColor',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'Enter a color (name or hexadecimal) for your logo',
            name: 'logoColor',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'list',
            choices: ['Square', 'Circle', 'Triangle'],
            message: 'Choose a shape for your logo',
            name: 'shape'
        },
    ])
    .then((res) => {
        let logo;
        // console.log(res)
        switch(res.shape){
            case 'Square':
                logo = new Square(res.text, res.textColor, res.logoColor, res.shape);
                break;
            case 'Circle':
                logo = new Circle(res.text, res.textColor, res.logoColor, res.shape);
                break;
            case 'Triangle':
                logo = new Triangle(res.text, res.textColor, res.logoColor, res.shape);
                break;
        }

        fs.writeFile('logo.svg',
        // console.log(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${logo.getShapeSVGText()}

</svg>`, 
(err) =>
err ? console.error(err) : console.log('Success!')
);
    })
}

init();

/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
*/