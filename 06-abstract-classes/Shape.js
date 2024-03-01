"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    /*
    private _x: number;
    private _y: number;
    */
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
        /*
        this._x = x;
        this._y = y;
        */
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    getInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.Shape = Shape;
