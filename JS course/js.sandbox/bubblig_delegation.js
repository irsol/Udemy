// Event Bubbling is a bubbling up of events through the DOM
//  pass action to all childrens/parents

// document.querySelector('.card-title').addEventListener('click',
// function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//   console.log('card content');
// });

// Event Delegation is when put the listner on one of the parent
// element and use the logic inside of the event handler
// to targen element that want to click for

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  // //if(e.target.className === 'fa fa-remove'){
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    // remove element
    e.target.parentElement.parentElement.remove();
  }
}
