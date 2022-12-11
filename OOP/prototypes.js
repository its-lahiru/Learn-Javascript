function Person(firstName, yearOfBirth) {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  //Do not add method like this
  // this.doNotAddMethodLikeThis = function(){}
}

Person.prototype.calcAge = function () {
  console.log((new Date()).getFullYear() - this.yearOfBirth);
};

Person.prototype.species = "Homo Sapiens";

const lahiru = new Person("Lahiru", 1995);
console.log(lahiru);

// console.log(lahiru instanceof Person);

// console.log(lahiru.__proto__);

// console.log(lahiru.__proto__ === Person.prototype);

// console.log(lahiru.calcAge());
// console.log(lahiru.species);

console.log(lahiru.hasOwnProperty('firstName'));
console.log(lahiru.hasOwnProperty('lastName'));
