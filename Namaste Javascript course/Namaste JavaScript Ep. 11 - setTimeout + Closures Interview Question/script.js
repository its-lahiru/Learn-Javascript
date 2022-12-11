// function x() {
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);

//     console.log(`Namaste Javascript`);
// }

// x();


///////////////////////////////////////////////////////////////////////////////

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
//     console.log(`Namaste Javascript`);
// }
// x();

////////////////////////////////////////////////////////////////////////////////////

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
//     console.log(`Namaste Javascript`);
// }
// x();

////////////////////////////////////////////////////////////////////////////////////

function x() {
    for (var i = 1; i <= 5; i++) {
        function y(j) {
            setTimeout(() => {
                console.log(j);
            }, 1000);
        }
        y(i);
    }
    console.log(`Namaste Javascript`);
}
x();