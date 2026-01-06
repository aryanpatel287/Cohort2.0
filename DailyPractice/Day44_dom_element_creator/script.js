// covers the tasks for the days 42,43
let btn = document.getElementById("btn");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let w = Math.floor(Math.random() * 100 + 50);
  let h = Math.floor(Math.random() * 100 + 50);
  let rot = Math.floor(Math.random() * 360);
  console.log(x, y, b, g, r, h, w);
  let div = document.createElement("div");

  div.style.height = h + "px";
  div.style.width = w + "px";
  div.style.backgroundColor = `rgb(${r},${g},${b})`;          
  div.style.position = "absolute";
  div.style.top = y +'%';
  div.style.left = x +'%';
  div.style.rotate=rot+'deg'
  console.log(div);
  main.appendChild(div);
});
