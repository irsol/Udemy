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

Variable can include: letters, numbers, _, $ sign. Can't start with numbers. $ sign can be used at the beginning of the variable's name when using Jquery. Not a good practice to use _ at the begging of the variable name. 
Multi words variables: `var firstName = "John";` this method is called **camel case**. Onother option is underscore method: `var first_name = "John";`. Or Pascal case: `var FirstName = "Sara";`

##### let

`let` works similar to var. It allows you to declare block-level variables. The declared variable is available from the block it is enclosed in.
```
let name;  // init  
name = "John Tree";
console.log(name);
name = "Aloe Vera";  // reassign variables if use var or let
console.log(name);
```

##### const 

const stands for constant that means it can`t change or can`t be reassigned. 
`const`allows to declare variables whose values are never intended to change. The variable is available from the block it is declared in.

```
const name = "John";
console.log(name);
// Can't reassign
name = "Sara";
```
When using const with arrays, objects and with primitiv types of data like strings, numbers they're can be change but not be reassigned.

```
const person = {
  name: "John",
  age: 30
}

console.log(person);
```

#### Data Types

**Primitive Daty Types:**

Stored directly in the location the variable accesses. Stored on the stack.

- **String** is a sequences of characters like letters, 
- **Number** can be decimals, integers, flows. Numbers don't requaired quotes.
- **Boolean** True or False. Don't have quotes.
- **Null** is an ententional empty value 
- **Undefined** is a variable that has not been assigned a value. All variables are undefined by default or till the value will be assign.
- **Symbols** (ES6)

**Reference  Data Types**

Reference types aren't primitive. They're not accessed by the actual value they`re acces
by a reference. They're also considered objects.

Accessed by reference. Data or Objects are stored on the heap.
A pointer to a location in memory.

- **Arrays**
- **Object Literals**
- **Functions**
- **Dates**
- **Anything else you can store is going to be reference types**

JavaScript is a dynamicallyt yped language. This means that:

* Types are associated with values not varibles
* The same variable can hold multiple types
* Don't need to specify types. Many languages you have to define what type of
  value is going to be in that variables.
* Most other languages are statically typed (Java, C#, C++)
* There are technologies that can turn JS into a stytically typed language. For example         TypeScript, Flow.

#### Type conversion

Number to string:
`lenght` only works on strings. To convert number to a string wrap it in the string function.
`val = String(5); 

Boolean to a string:
`val = String(true);`

Date to string:
`val = String(new Date());`

String to date:
+ `val.toFixed();` works only on numbers

```
val = Number("5");
console.log(val.toFixed());
```

With Template strings (es6)       
```
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li><Job: ${job}/li>
    <li>City: ${city}</li>
  </ul>
`;
```

#### Arrays

Arrays in JavaScript are a special type of object. They work very much like regular objects (numerical properties can naturally be accessed only using [] syntax) but they have one interesting property called 'length'.

Create array:
```
const numbers = [66, 76, 84, 63, 5];
const numbers2 = new Array(33, 2, 65, 7);  // array constructor

const fruit = ["A", "B", "c"]
const mixed = ["2", true, null, "hi", {a:1, b:2}, new Date()]

let val;

// Get array length
val = numbers.length;
// Check if id array
val = Array.isArray(numbers);
// Get a single value
val = numbers[3];
// Insert into array
numbers[2] = 100;
// Find index
val = numbers.lastIndexOf(5);

console.log(numbers); 
console.log(val);

// Mutating Arrays

```
