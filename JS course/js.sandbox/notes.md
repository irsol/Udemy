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
- **Number** can be decimals, integers, flows.
- **Boolean** True or False
- **Null** is an ententional empty value 
- **Undefined** is a variable that has not been assigned a value. All variables are undefined by default or till the value will be assign.
- **Symbols** (ES6)

**Referense  Data Types:**
- **Arrays**
- **Object Literals**
- **Functions**
- **Dates**
- **Anything else**

Accessed by reference. Data or Objects are stored on the heap.
A pointer to a location in memory.