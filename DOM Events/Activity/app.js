let btn = document.querySelector('button');

btn.addEventListener('click', () => {
  let h2 = document.querySelector('h2');
  let color = getRandomColor();
  h2.innerText = color;

  let div = document.querySelector('div');
  div.style.backgroundColor = color;
  console.log("color updated.")
})

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  
  return color;
}