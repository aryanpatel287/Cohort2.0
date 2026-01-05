// covers the tasks for the days 42,43
let btn = document.getElementById("btn");
let main = document.querySelector("main");

  let arr = ['I am Aryan','Want to be a crazy dev','Aur kuch...','Pata nahi...']

btn.addEventListener("click", function () {
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let i = Math.floor(Math.random() * arr.length);
  let h = Math.floor(Math.random() * 50 + 20);
  let rot = Math.floor(Math.random() * 360);
  console.log(x, y, b, g, r, h, i);
  let h1 = document.createElement("h1");
  h1.innerHTML=arr[i]
  h1.style.fontSize = h + "px";
  h1.style.borderRadius='10px'
  h1.style.padding='10px'
  h1.style.border= '1px solid black';
  h1.style.backgroundColor = `rgb(${r},${g},${b})`;          
  h1.style.position = "absolute";
  h1.style.top = y +'%';
  h1.style.left = x +'%';
  h1.style.rotate=rot+'deg'
  console.log(h1);
  main.appendChild(h1);
});
