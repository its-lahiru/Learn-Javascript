const numbers = [5, 1, 3, 4, 6];

//Map
function doubleFunc(x) {
    return x * 2;
}
const double = numbers.map(doubleFunc);
console.log(double);

function binaryFunc(x) {
    return x.toString(2);
}
const binary = numbers.map(binaryFunc);
console.log(binary);




//Filter
const oddNumbers = numbers.filter(number => number % 2);
console.log(oddNumbers.sort((number1, number2) => number1 - number2));
// console.log(numbers.map(number=>number%2));




// Reduce
const summation = numbers.reduce(function (acc, curr) { return acc + curr }, 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(summation);
console.log(sum);
// find max
const max = numbers.reduce((max, current) => {
    if (current > max) {
        max = current
    }
    return max;
}, 0);
console.log(max);


// more examples with map, filter and reduce
const users = [
    { firstName: 'lahiru', lastName: 'sandaruwan', age: 26 },
    { firstName: 'donald', lastName: 'trump', age: 75 },
    { firstName: 'elon', lastName: 'musk', age: 50 },
    { firstName: 'deepika', lastName: 'padukone', age: 26 },
];
//get full names
const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(fullNames);

//get this result = {26: 2, 75: 1, 50: 1}
const result = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(result);

// first name of users which age is less than 30
const lessThan30 = users.filter(user => { if (user.age < 30) return user }).map(user => user.firstName);
console.log(lessThan30);

const lessThan30Reduce = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(lessThan30Reduce);

users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);