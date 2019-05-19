// addEventListener takes event you want to listen for,
// anonymos func
// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//   console.log('Hello!!');

//   //e.preventDefault();  //prevent default behaviour
// });

document.querySelector('.clear-tasks').addEventListener('click',
onclick);

function onclick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello!';

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the element
  val = e.clientY;
  val = e.clientX;

  console.log(val);

};