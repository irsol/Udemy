//document.getElementsByClassName
// get elem by class name on the global scope
// <div class="collection-item">TEST</div>
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'green';
// items[1].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName
// ('collection-item');

// console.log(listItems);

// // document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'green';
// lis[1].textContent = 'Hello';

// // Convert HTML Collection into array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// // document.querySelectorAll
// // node list - doesn't need to convert into array
// const items = document.querySelectorAll('ul.collection li.collection-item');
// items.forEach(function(item, index){
//     item.textContent = `${index}: Alpaka`;
//   });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');
// liOdd.forEach(function(li, index){
//   li.style.background = 'red';
// });

// // for loop will work with HTML collection even if it don't convert in array
// // because use length on an HTML collection
// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = 'grey';
// }

// console.log(items);