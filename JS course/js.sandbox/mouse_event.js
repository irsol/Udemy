const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('.h5');

// Click
//clearBtn.addEventListener('click', runEvent);
// Double click
//clearBtn.addEventListener('dbclick', runEvent);

// Mousedown
//clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
//clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// Mousedown
//card.addEventListener('mouseenter', runEvent);
// Mouseleave
//card.addEventListener('mouseleave', runEvent);
// Mouseout
//card.addEventListener('mouseout', runEvent);
// Mouseover
//card.addEventListener('mouseover', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}

