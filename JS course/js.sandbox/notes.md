#### Log to the console
```
console.log('Hello World');
console.log(1,2,3);
console.log(true);
var greeting = 'Hello Me!'
console.log(greeting);
console.log([1, 2, 3]);  // array 
console.log({a:1, b:2, c:3});  // to log objects
console.table({a:1, b:2, c:3});  // print objects out as a table

console.error('This is some error');
console.warn('This is a warning!')
console.clear();  // to clear

console.time('Hello');  // gives time that it took to run Hello World.
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');
````

#### Variables

To define a variable there're 3 possible keywords:
 var, let, const. 

`let` and `const` have a big advantage when it comes to block level scope.

Variable can include: letters, numbers, _, $ sign. Can't start with numbers. $ sign can be used at the beginning of the variable's name when using Jquery. Not a good practice to use _ at the begging of the variable name. Multi words variables: `var firstName = "John";` this method is called **camel case**. Onother option is underscore method: `var first_name = "John";`. Or Pascal case: `var FirstName = "Sara";`

##### let

`let` works similar to var:
```
let name;  // init  
name = "John Tree";
console.log(name);
name = "Aloe Vera";  // reassign variables if use var or let
console.log(name);
```