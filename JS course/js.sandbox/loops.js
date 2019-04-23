// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my fav');
//     continue;  //replace num 2 with '2 is my fav'
//   }
  
//   if(i === 5){
//     console.log('Stop the loop')
//     break;
//   }

//   console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// // LOOP THROUGH ARRAY
//const cars = ['F', 'C', 'T', 'H'];

// for(let i = 0; i < cars.length; i++){
//   // acces to the first element
//   console.log(cars[i]); 
// }

// FOREACH
// Cleaner way to iterate through array

// const cars = ['F', 'C', 'T', 'H'];

// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const cars = ['F', 'C', 'T', 'H'];

// const users = [
//   {id:1, name: 'John'},
//   {id:2, name: 'Peter'},
//   {id:3, name: 'Alex'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// FOR IN
// Loop through the object and get key, value pairs.
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);

}