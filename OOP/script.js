"user strict";

// //constructor functions
// function Man(name, age) {
//     this.name = name;
//     this.age = age;

//     // this.getBirthYear = function () {
//     //     return new Date().getFullYear() - age;
//     // }
// };

// const lahiru = new Man('Lahiru', 27);
// // console.log(lahiru);
// // console.log(lahiru.getBirthYear());

// Man.prototype.getBirthYear = function () {
//     return (new Date()).getFullYear() - this.age;
// }

// const obj = new Man('Shehani', 27);
// // console.log(obj);
// // console.log(obj.getBirthYear());
// // console.log(obj.__proto__);
// // console.log(obj.__proto__ === Man.prototype);
// // console.log(Man.prototype.isPrototypeOf(obj));

// Man.prototype.isHuman = true;

// // console.log(obj);

// // console.log(obj.hasOwnProperty('name'));
// // console.log(obj.hasOwnProperty('getBirthYear'));
// // console.log(obj.hasOwnProperty('isHuman'));

// // console.log(obj.__proto__.__proto__);

// // console.dir(Man.prototype.constructor);

// const arr = [1, 2, 3, 4, 3, 2, 1, 0];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);
// // console.log(arr.__proto__.__proto__);

// // const str = 'Lahiru';
// // console.log(str.__proto__);

// Array.prototype.unique = function(){
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const test = document.getElementById("test");
// console.log(test)







//ES6 classes
//class expression
// const testCl = class {

// }

// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
        this.sayHi = function () {
            console.log('Hi');
        }
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    }

    greet() {
        console.log(`hey, ${this.firstName}`);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

//add new method to PersonCl prototype
// PersonCl.prototype.greet = function () {
//     console.log(`hey, ${this.firstName}`);
// }
jessica.greet();