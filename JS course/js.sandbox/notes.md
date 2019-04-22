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
```

#### Variables

To define a variable there're 3 possible keywords:
 var, let, const. 

`let` and `const` have a big advantage when it comes to block level scope.

Variable can include: letters, numbers, `_` , `$` sign. Can't start with numbers. $ sign can be used at the beginning of the variable's name when using Jquery. Not a good practice to use `_` at the begging of the variable name. 
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

**const** stands for constant that means it can't change or can't be reassigned. 

**const** allows to declare variables whose values are never intended to change. The variable is available from the block it is declared in.

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
`val = String(5);`

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
```

```
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
// Mutating Arrays
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take of from end
numbers.pop();
// Take of from the fromt
numbers.shift();
// Splice out values: (start,end)
numbers.splice(0,2);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);  // sort array by the first num

// Sort arrays
val = fruit.sort();
val = numbers.sort();
// use the "compare function", to ascending order
val = numbers.sort(function(x, y){
  return x - y;
});

// use the "compare function", to descending order
val = numbers.sort(function(x, y){
  return y - x;
});

console.log(numbers); 
console.log(val);
```

```
// Find the first instance of under 50 num
function under50(num){
  return num < 50;
}

val = numbers.find(under50);
```

#### Object Literals

Object Literals define by curly braces {}, inside curly braces are key, value pairs.

```
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 21,
  email: 'smith@lll.com',
  hobbies: ['music', 'sport'],
  address: {
    city: 'Berlin',
    state: 'Brl'
  },
  getBirthYear: function(){
    return 2019 - this.age;
  }
}

let val;

val = person;
// Get specific value or select values from an object.
val = person.firstName;  // recommend syntax
val = person['firstName']
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 22},
  {name: 'Pike', age: 42}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
```

#### Dates and Times

```
let val;

const today = new Date();
let birthday = new Date('9-10-1985');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getMinutes();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);

console.log(birthday);
```

#### If Statements and Comarison operator
```
const id = '100';

// Equal to
if(id == 100){
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Equal to Value and Type. To avoid issues!!!
if(id === 100){
  console.log('Correct');
} else {
  console.log('Incorrect');
}
```

```
// To test if something is undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`); 
} else {
  console.log(`No ID`);
}
```

```
// Greater or Less than
if(id > 20){
  console.log(`Correct`); 
} else {
  console.log(`Incorrect`);
}
```
```
// if else
const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}
```

**Logical Operators**
```
const name = 'Steve';
const age = 67;

// And &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// Or ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in game`);
} else {
  console.log(`${name} is registered for the game`);
}
```

**Ternary Operator** 
`?` stands for **if**, `:` stands for **or**.
```
const id = 100;
console.log(id === 100 ? 'Correct' : 'Incorrect');
```

**Curly braces** in JS are optional. They are recommended.

**Switches**
Switches is another way to validay condition. Use **switch** if you have a lot of different cases.

```
const color = 'red';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not blue or red');
    break;
}
```

```
let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);
````
