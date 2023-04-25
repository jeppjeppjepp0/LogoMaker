const Shapes = require('./shapes.js')

class Circle extends Shapes{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor);
        this.shape = `<circle cx="150" cy="100" r="80" fill="`;
    }

    getShapeSVGText(){
        return `${shape} ${this.logoColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.textColor}</text>`
    }
}

module.exports = Circle;