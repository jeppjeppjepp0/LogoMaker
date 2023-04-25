const Shapes = require('./shapes.js')

class Square extends Shapes{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor);
        this.shape = `<rect x="80" y="10" width="160" height="160" fill="`;
    }

    getShapeSVGText(){
        return `${shape} ${this.logoColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.textColor}</text>`
    }
}

module.exports = Square;