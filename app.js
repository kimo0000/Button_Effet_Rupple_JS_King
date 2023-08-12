const btn = document.getElementById("btn");

btn.addEventListener("mouseover", (e) => {
  console.log(e.pageX);
  console.log(btn.offsetLeft);
  console.log(e.pageY);
  console.log(btn.offsetTop);

  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;

  btn.style.setProperty("left", x + "%");
  btn.style.setProperty("top", y + "%");
});
