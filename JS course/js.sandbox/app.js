// var name = "John Tree";
// console.log(name);
// name = "Aloe Vera";  // reassign variables if use var or let
// console.log(name);

// // Create variables and not assign them to a value: initialize without a value
// var greeting;  // init var
// console.log(greeting);
// greeting = "Hi";
// console.log(greeting)

// Variable can include: letters, numbers, _, $ sign
// Can't start with number. $ sign can be used at the beginning of the variable's name
// when using Jquery. 

// Let

// let name;  // init  
// name = "John Tree";
// console.log(name);
// name = "Aloe Vera";  // reassign variables if use var or let
// console.log(name);

// Const

// const name = "John";
// console.log(name);
// // Can't reassign
// name = "Sara";

// Have to assign to a value

// const person = {
//   name: "John",
//   age: 30
// }

// person.name = "Sara";
// console.log(person);

// Primitive

// // String
// const name = "Aloe Vera";
// // Number
// const age = 45;
// // Bulean
// const hasKids = false;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// // Reference Types - Objects
// //Array
// const hobbies = ["movies", "music"]
// // Object literal
// const address = {
//   city: "Berlin",
//   state: "De"
// }
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// Conversion

//let val;

// Nimber to String
// val = String(555);
// val =String(4+4);

// //Boolean to a string
// val = String(true);

// // Date to string
// val = String(new Date());

// // Array to string
// val = String([1, 2, 3, 4]);

// // toString() method
// val = (5).toString;
// val = (true).toString;

// // String, boolean to number
// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("hello");  //NaN - not a number
// val = Number([1, 2, 3])

// val = parseInt("100");
// val = parseFloat("1.20");

// // Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// Simole math with numbers
//val = num1 + num2;

// Mathe Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.pow(8, 2);
// val = Math.floor(Math.random() *20);

// console.log(val);

// String

// const firstName = "Alex";
// const lastName = "Green";
// const tags = "tag1, tag2, tag3";

// let val;

// val = firstName + " " + lastName;

// Append
// val = "Yellow";
// val += "Apple";

// Escaping

// val = "That's awesome!";

// Length
// val = firstName.length;

// concate
// val = firstName.concat(" ", lastName);

// Uppercase, lowercase
// val = firstName.toUpperCase();

//val = firstName[2];

// indexOf()
// val = firstName.indexOf("x");

// charAt()
// val = firstName.charAt("2");

// Get last char
// val = firstName.charAt(firstName.length - 1);

// substring()
// val = firstName.substring(0, 2);

// slice
// val = firstName.slice(0, 3);
// val = firstName.slice(-3);

// split
// val = tags.split(",");

// console.log(val);

// Templates Literals
// const name = "John";
// const age = 30;
// const job = "Artist";
// const city = "Berlin";
// let html;
// Without template strings (es5)
// html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: "+ city +" </li></ul>";

// html = "<ul>" +
//        "<li>Name: " + name +"</li>" +
//        "<li>Age: " + age +"</li>" +
//        "<li>Job: " + job +"</li>" +
//        "<li>City: " + city +"</li>";
//        "</ul>"
// document.body.innerHTML = html;

// With Template strings (es6)       
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li><Job: ${job}/li>
//     <li>City: ${city}</li>    
//   </ul>
// `;


// Arrays
// const numbers = [66, 76, 84, 33, 5];
// const numbers2 = new Array(32, 2, 65, 7);  // array constructor
// const fruit = ["Y", "A", "B", "c"];
// const mixed = [2, true, null, "hi", {a:1, b:2}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if id array
// val = Array.isArray(numbers);
// // Get a single value
// val = numbers[3];
// // Insert into array
// numbers[2] = 100;
// // // Find index
// val = numbers.lastIndexOf(5);

// // Mutating Arrays
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take of from end
// numbers.pop();
// // Take of from the fromt
// numbers.shift();
// // Splice out values: (start,end)
// numbers.splice(0,2);
// // Reverse
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);  //sort by the first num

// // Sort arrays
// val = fruit.sort();
// //val = numbers.sort();

// // use the "compare function", to ascending order
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // use the "compare function", to descending order
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// // Find
// function under50(num){
//   return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers); 
// console.log(val);


// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 21,
//   email: 'smith@lll.com',
//   hobbies: ['music', 'sport'],
//   address: {
//     city: 'Berlin',
//     state: 'Brl'
//   },
//   getBirthYear: function(){
//     return 2019 - this.age;
//   }
// }

// let val;

// val = person;
// // Get specific value or select values from an object.
// val = person.firstName;  // recommend syntax
// val = person['firstName']
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   {name: 'John', age: 30},
//   {name: 'Mike', age: 22},
//   {name: 'Pike', age: 42}
// ];

// for(let i = 0; i < people.length; i++){
//   console.log(people[i].name);
// }

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1985');
// birthday = new Date('9/10/1981');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getMinutes();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);

// console.log(birthday);

//const id = 100;

// // if else
// const color = 'red';

// switch(color){
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Color is not blue or red');
//     break;
// }
// let day;

// switch(new Date().getDay()){
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);

// // Logical Operators
// const name = 'Steve';
// const age = 27;

// // And &&
// if(age > 0 && age < 12){
//   console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // Or ||
// if(age < 16 || age > 65){
//   console.log(`${name} can not run in game`);
// } else {
//   console.log(`${name} is registered for the game`);
// }

// // Ternary Operator
// console.log(id === 100 ? 'Correct' : 'Incorrect');

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }


// // Greater or Less than
// if(id > 20){
//   console.log(`Correct`); 
// } else {
//   console.log(`Incorrect`);
// }

// To test if something is undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`); 
// } else {
//   console.log(`No ID`);
// }


// // Equal to
// if(id == 100){
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // Equal to Value and Type. To avoid issues!!!
// if(id === 100){
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// if(id !== 100){
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// Function Declaration

function greet(firsName = 'John', lastName = 'Doe'){

  //if(typeof firsName === 'undefined'){firsName = 'John'}
  //if(typeof lastName == 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firsName + ' ' + lastName;
}

//console.log(greet());

// Function Expressions

// const square = function(x = 3){
//   return x*x;
// };

// //console.log(square();

// // Immidiatley Invokable Function Expressions - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('IIFE Ran..');
// })('Brad');

// Property Methods

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.add();
todo.edit(22);