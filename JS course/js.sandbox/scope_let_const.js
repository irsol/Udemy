// Global scope

var a = 1;
let b = 2;
const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }
//test();

// Block Scope it affects on var of Global Scope and change
// the value to 4.
// if(true){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// Try with let and var
for(let a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
}



console.log('Global Scope: ', a, b, c);