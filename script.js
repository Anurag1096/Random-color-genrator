"use strict";
const button = document.querySelector(".btnn");
// const body1 = document.querySelector("body");
// let randomVar = Math.ceil(Math.random() * 255);

button.addEventListener("click", function () {
  let randomVar1 = Math.floor(Math.random() * 255);
  let randomVar2 = Math.floor(Math.random() * 255);
  let randomVar3 = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${randomVar1} ,${randomVar2}, ${randomVar3})`;
});
