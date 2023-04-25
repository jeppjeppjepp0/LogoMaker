const Shapes = require('./shapes.js')

class Triangle extends Shapes{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor);
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="`;
    }

    getShapeSVGText(){
        return `${shape} ${this.logoColor}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.textColor}</text>`
    }
}

module.exports = Triangle;