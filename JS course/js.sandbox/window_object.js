// WINDOW OBJECTS / PROPERTIES

// ALERT
//window.alert('Hello');

// PROMPT takes an input
// const input = prompt();
// alert(input);

// Confirm 
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// 
let val;
// Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll properties
//val = window.scrollY;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = "http://google.com";
//Reload
//window.location.reload();

// History object
//window.history.go(-1);
//window.history.lenght;

// Navigator Object works with browser
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;

console.log(val);