import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());

let shapes: Shape[] = [];
shapes.push(myCircle);
shapes.push(myRectangle);

for (let tempShape of shapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}