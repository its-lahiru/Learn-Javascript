

fun2();
fun1();


function fun1(){
    console.log('function declaration');
}

const fun2 = function(){
    console.log('function expression');
}

const fun3 = () => console.log('arrow function expression');