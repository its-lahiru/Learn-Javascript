function x() {
    var a = 8;
    function y() {
        console.log(a);
    }
    return y;

    // OR can return function directly
    // return function y() {
    //     console.log(a);
    // }
}

const z = x();
console.log(z);

z();