const Shapes = require('./shapes.js')

class Triangle extends Shapes{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor);
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="`;
    }

    getShapeSVGText(){
        return `${this.shape}${this.logoColor}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Triangle;