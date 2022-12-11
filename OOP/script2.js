function Animal(fName, age) {

    this.fName = fName;
    this.age = age;

    this.calcBirthYear = function(){
        console.log(new Date().getFullYear() - this.age);
    }
}

const obj = new Animal('Kitty', 3);
// console.log(obj);