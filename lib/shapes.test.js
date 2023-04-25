const Shapes = require('./shapes.js');
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

//Shapes
describe('Shapes', () => {
    describe('Initialize', () => {
        it('should be a shape class object', () => {
            const newShape = new Shapes('text', 'text color', 'logo color');
            expect(newShape).toBeInstanceOf(Shapes);
        })
    })
    
    describe('Constructor', () => {
        it('should set text, text color, and logo color', () => {
            const newShape = new Shapes('text', 'text color', 'logo color');
            expect(newShape.text).toBe('text');
            expect(newShape.textColor).toBe('text color');
            expect(newShape.logoColor).toBe('logo color');
        })
    })
})

//Circle
describe('Circle', () => {
    describe('Initialize', () => {
        it('should be a Circle class object', () => {
            const newShape = new Circle('text', 'text color', 'logo color');
            expect(newShape).toBeInstanceOf(Circle);
        })
    })
    
    describe('Constructor', () => {
        it('should set text, text color, and logo color', () => {
            const newShape = new Circle('text', 'text color', 'logo color');
            expect(newShape.text).toBe('text');
            expect(newShape.textColor).toBe('text color');
            expect(newShape.logoColor).toBe('logo color');
            expect(newShape.shape).toBe(`<circle cx="150" cy="100" r="80" fill="`);
        })
    })

    describe('get method', () => {
        it('should return a properly completed SVG', () => {
            const newShape = new Circle('text', 'text color', 'logo color');
            expect(newShape.getShapeSVGText()).toBe(`<circle cx="150" cy="100" r="80" fill="logo color" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="text color">text</text>`);
        })
    })
})

//Square
describe('Square', () => {
    describe('Initialize', () => {
        it('should be a Circle class object', () => {
            const newShape = new Square('text', 'text color', 'logo color');
            expect(newShape).toBeInstanceOf(Square);
        })
    })
    
    describe('Constructor', () => {
        it('should set text, text color, and logo color', () => {
            const newShape = new Square('text', 'text color', 'logo color');
            expect(newShape.text).toBe('text');
            expect(newShape.textColor).toBe('text color');
            expect(newShape.logoColor).toBe('logo color');
            expect(newShape.shape).toBe(`<rect x="80" y="10" width="160" height="160" fill="`);
        })
    })

    describe('get method', () => {
        it('should return a properly completed SVG', () => {
            const newShape = new Square('text', 'text color', 'logo color', 'Square');
            expect(newShape.getShapeSVGText()).toBe(`<rect x="80" y="10" width="160" height="160" fill="logo color" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="text color">text</text>`);
        })
    })
})

//Triangle
describe('Triangle', () => {
    describe('Initialize', () => {
        it('should be a Circle class object', () => {
            const newShape = new Triangle('text', 'text color', 'logo color');
            expect(newShape).toBeInstanceOf(Triangle);
        })
    })
    
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
})