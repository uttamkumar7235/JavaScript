
//Add a paragraph on page using javascript only
let para = document.createElement('p');
para.innerText = "Hey, I'm a new paragraph";
document.querySelector('body').appendChild(para);

//Changing color of paragraph
para.classList.add('red')

//Create a h1 and paragraph inside a div
let div = document.createElement('div');
let h1 = document.createElement('h1');
let para1 = document.createElement('p');

h1.innerText = "I'm in a div";
para1.innerText = "Mee Too!";

div.append(h1);
div.append(para1);
div.classList.add('box')
document.querySelector('body').append(div);