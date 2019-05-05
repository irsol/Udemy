// Replace element

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent 
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

//console.log(newHeading);


// Remove element, when use .querySelectorAll can access to elements lis[0]
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item, lis[0] removeq first item
lis[0].remove();

// Remove child
list.removeChild(lis[3]);

// Classes and ATTR
const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val;

// CLASSES
val = link.className;  // gives string of the classes
val = link.classList;  // DOM token list
val = link.classList[0];  

// add a class using classList
link.classList.add('test');
link.classList.remove('test');  // remove
val = link;


// ATTRIBUTES
val = link.getAttribute('href');
// add attribute
val = link.setAttribute('href', 'http://google.com');
// chack if there an attribute
val = link.hasAttribute('href');

// add an attribute
link.setAttribute('title', 'Google');
// to see attribute title
val = link.hasAttribute('title');

// remove attr
link.removeAttribute('title');
val = link;

console.log(val);