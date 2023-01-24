// declare class
// function Shape(color) {
//     this.color = '#333';
//     this.drawShape = function () {};
//     this.calculateArea = function () {};
// }

class Shape {
    constructor() {
        this.color = "#FF40FF";
        this.state = () => { return 5} 
    }
    drawShape() {
        return this.color;
    }
    calculateArea() {
        return 1;
    }
}
// export class using module.exports
module.exports = Shape;