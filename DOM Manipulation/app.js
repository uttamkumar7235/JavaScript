// Selecting Elements

// 1. getElementById - returns the element as an object or null (if not found)

// let mainImg = document.getElementById("mainImg");
// console.log(mainImg);


// 2. getElementsByClassName - returns the element as a HTML collection or empty collection (if not found)

// let oldImg = document.getElementsByClassName("oldImg");
// for (let i=0; i<oldImg.length; i++) {
//   console.dir(oldImg[i].src);
// }


// 3. getElementsByTagName - returns the element as a HTML collection or empty collection (if not found)
// let para = document.getElementsByTagName("p");
// console.log(para);


// 4. Query Selectors
document.querySelector("p"); // selects first p element
document.querySelector("#mainImg"); // selects first element with id = mainImg
document.querySelector(".oldImg"); // selects first element with class = .oldImg
document.querySelector("div a"); // selects first a element inside div

document.querySelectorAll("div a"); // selects first all a element inside div
document.querySelectorAll("p"); // selects all p elements




// Using Properties and Methods

let paragraph = document.querySelector("p");

// 1. innerText - shows the visible text contained in a node
// console.log(paragraph.innerText)
// paragraph.innerText = "Hi, I'm Peter Parker"; // manipulation


// 2. textContent - shows the full text (shows hidden content also Eg. \n- new line as in your index.html file)
// console.log(paragraph.textContent);


// 3. innerHTML - shows the full markup 
// console.log(paragraph.innerHTML);
paragraph.innerHTML = "Hi, I'm <b>Peter Parker</b>"; // manipulation
// let heading = document.querySelector("h1");
// heading.innerHTML = `<u>${heading.innerText}</u>`;





// Manipulating Attributes

// obj.getAttribute(attr)
// obj.setAttribute(attr, val)

// let img = document.querySelector("img");
// console.log(img.getAttribute('id'));
// img.setAttribute('id', "spidermanImage");




// Manipulating Style

// let heading = document.querySelector("h1");
// console.log(heading.style);
// heading.style.color = "red"; // inline style
// heading.style.backgroundColor = "yellow"; // inline style

// let links = document.querySelectorAll(".pubInfo a");
// for (let i=0; i<links.length; i++) {
//   links[i].style.color = "purple"; // inline style
// }

// Manipulating Style with classList Property

// classList.add() - to add new class
// classList.remove() - to remove class
// classList.contain() - to check if class exist
// classList.toggle() - to toggle between add and remove

// console.log(heading.classList);
// heading.classList.add("blue");
// heading.classList.add("size");
// console.log(heading.classList);

// let div = document.querySelector(".pubInfo");
// console.log(div.classList);
// div.classList.add("box");
// console.log(div.classList);





// Navigation in JavaScript
// let ul = document.querySelector("ul");
// console.log(ul.parentElement) // -> div
// console.log(ul.children) // -> [li, li]
// console.log(ul.childElementCount) // -> 2
// console.log(ul.children[0].nextElementSibling) // -> li
// console.log(ul.children[2].previousElementSibling) // -> li





// Adding Elements on Page

// appendChild(element)
let newP = document.createElement('p');
newP.innerText = "Hi, I'm a new P";
let body = document.querySelector("body");
body.appendChild(newP);

// append(element)/(text)
let btn = document.createElement('button');
btn.innerText = "Click me";
body.append(btn);
newP.append(" this is new text.")

// prepend(element)
newP.prepend(document.createElement('p').innerText="Starting ");

// insertAdjacentElement(where, element)
let bb = document.createElement('p');
bb.innerText = "BeforeBegin";
newP.insertAdjacentElement('beforebegin', bb);

let be = document.createElement('p');
be.innerText = "BeforeEnd";
newP.insertAdjacentElement('beforeend', be);

let ab= document.createElement('p');
ab.innerText = "AfterBegin";
newP.insertAdjacentElement('afterbegin', ab);

let ae = document.createElement('p');
ae.innerText = "AfterEnd";
newP.insertAdjacentElement('afterend', ae);



// Removing elements form Page

// body.removeChild(btn);
// btn.remove();