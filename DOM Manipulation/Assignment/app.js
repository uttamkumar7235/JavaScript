
// Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me' 
let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click me";
document.querySelector('body').append(inp);
document.querySelector('body').append(btn);

// Change placeholder value of input to "username" 
inp.setAttribute('placeholder', "username");

// Change the id of button to "btn' 
btn.setAttribute('id', 'btn');

// Access the btn using the querySelector and button id. Change the button background color to blue and text color to white. 
let button = document.querySelector("#btn");
button.style.backgroundColor = "blue";
button.style.color = "white";

// Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple. 
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";
document.querySelector('body').append(h1);

// Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold. 
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(p);