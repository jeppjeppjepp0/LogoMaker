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
```

<hr>

## Table of Contents

* [Code Sample](#code-sample)
* [Usage](#usage)
* [Tests](#tests)
* [Learning Points](#learning-points)
* [Author Info](#author-info)

<hr>

## Code Sample

The following code is a sample from the `Triangle` class (extended from the `Shapes` class). 

The constructor uses `super` to assign `text`, `textColor`, and `logoColor` the way the `Shapes` class does so. The shape value is then assigned as a string literal (which is different for `Circle`, `Square`, and `Triangle`). 

The `getShapeSVGText()` function simply returns the text content of the shape in the form that the `SVG` asks of it. The string is constructed using literals that refer to the given `Object` at the spots they are required within the `SVG` file.

```js
class Triangle extends Shapes{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor);
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="`;
    }

    getShapeSVGText(){
        return `${this.shape}${this.logoColor}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
```


<hr>

## Usage 

[Full Sample Video](https://drive.google.com/file/d/1iBP3kR2yE3Rek8f4Dz-h96qvx8z_cmzs/view?usp=sharing)

This project used `Node.js` and `inquirer` to prompt users to enter information about a logo to. The given information is then used to generate a new logo stored to `logo.svg`. 

The user is prompted to give general information about the logo including a text content, text color, logo color, and shape. The user inputs information to the prompts to be later printed into a new file. The given information is then used to create a new logo with the given parameters.

<hr>

## Learning Points 

Below are the following topics/methods that I learned through this project:

 * [Node.js](https://nodejs.org/en)
 * [NPM](https://www.npmjs.com/)
 * [inquirer](https://www.npmjs.com/package/inquirer)
 * [Node file system](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
 * [Switch Statements](https://www.w3schools.com/js/js_switch.asp)
 * [Jest](https://jestjs.io/)

<hr>

## Tests

The following two tests are to ensure that the `Triangle` class works as intended. 

The first is to test the constructor of the `Triangle` class. The triangle extends the shapes class and sets the shape to a given size for the `SVG` file. So, the text, text color, logo color, and shape should be set to proper values. 

The second test is to ensure that the `get method` of the `Triangle` actually prints the proper information. A very self-explanatory test, it checks to ensure that the proper information that is set is printed in the correct location through the literal in the `Triangle` class.

```js
describe('Constructor', () => {
    it('should set text, text color, and logo color', () => {
        const newShape = new Triangle('text', 'text color', 'logo color');
        expect(newShape.text).toBe('text');
        expect(newShape.textColor).toBe('text color');
        expect(newShape.logoColor).toBe('logo color');
        expect(newShape.shape).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="`);
    })
})

describe('get method', () => {
    it('should return a properly completed SVG', () => {
        const newShape = new Triangle('text', 'text color', 'logo color');
        expect(newShape.getShapeSVGText()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="logo color" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="text color">text</text>`);
    })
})
```

<hr>

## Author Info


### Jedd Javier

* [LinkedIn](https://www.linkedin.com/in/jedd-javier-4b323426b/)
* [Github](github.com/jeppjeppjepp0)