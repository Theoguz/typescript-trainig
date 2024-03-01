"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
let myCustomer = new Customer("Oguz", "Aslan");
/*
myCustomer.firstName = "Oguz";
myCustomer.lastName = "Aslan";
*/
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
