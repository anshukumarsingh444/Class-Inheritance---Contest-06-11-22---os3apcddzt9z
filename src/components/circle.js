// import using require
import { Shape } from './shape.js';

//  declare class
function Circle() {
    Shape.call(this);
} 

Circle.prototype.__proto__ = Shape.prototype;
Circle.prototype.calculateArea = function() {};


// export class using module.exports