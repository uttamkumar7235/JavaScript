
let btns = document.querySelectorAll('button');

// onclick and onmouseenter

// for(btn of btns) {
//   btn.onclick = sayHello;
//   btn.onmouseenter = function () {
//     console.log("You entered a mouse.");
//   }
// }

function sayHello() {
  console.log("Hello");
}

function sayName() {
  console.log("Apna College");
}

// You can have only ONE onclick handler.
// for (btn of btns) {
//   btn.onclick = () => console.log("First");
//   btn.onclick = () => console.log("Second"); // First is gone
// }


// addEventListener - You can attach multiple listeners for the same event!

// element.addEventListener(event, callback)

for(btn of btns) {
  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);

  // btn.addEventListener("dblclick", ()=> {
  //   console.log("You double clicked.");
  // });
  
}