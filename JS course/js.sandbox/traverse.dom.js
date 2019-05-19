let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes, child returns node list
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;  // first list item
// This numbers refer to type of nodes 
// 1- Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children elment nodes, children return HTML collection 
val = list.children;
val = list.children[0];
list.children[0].textContent = "Hello";
// Children of children
val = list.children[3].children[0];
// add test link
list.children[3].children[0].id = 'test-link';

// firstChild gives first nodes
val = list.firstChild;
val = list.firstElementChild;

// lastChild gives first nodes
val = list.lastChild;
val = list.lastElementChild;
// Count child elements
val = list.childElementCount;

// Get perents node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Previous next sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; // null
console.log(val);