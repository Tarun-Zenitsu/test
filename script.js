// var x = 10;

// function firstCode() {
//     console.log("hellow world");
// }

// firstCode();
// console.log(x);

// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }

//Scope chain or lexical scope chain

// function a(){
//     console.log(c);
//     b();
//     function b(){
//         const d=9;
//         console.log(d)
//         console.log(c);
//     }
// }

// var c=10;

// a();

//let vs const vs var

// let b=20;

// let a="20";

// var c;
// c=11; 


// console.log(a==b);

//closers

// function y(){
//     for(let i=0;i<6;i++){
//         setTimeout(function(){
//             console.log(i);   
//         }, i*1000);
//     }console.log("second call back functions");
// }
// y();

// // function x(){
// //     for(let i=0;i<6;i++){
// //         setTimeout(() => {
// //             console.log(i);
// //         }, i*1000);
// //     }
// //     console.log("hellow world");
    
// // }
// // x();

// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }

// outer();

// function x(y){
//     console.log(x);
//     y();
// }

// x(function y(){
//     console.log("y");
// });

// function attecheventListener(){
    let count=0;
    const a=document.getElementById("button1")
a.addEventListener("click",function show(){
    console.log("button was click", count++);

});
// }

// attecheventListener();
