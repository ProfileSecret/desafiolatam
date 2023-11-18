const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const boton = document.querySelector("button");
const text = document.querySelector("p");

boton.addEventListener("click", function () {
  if (input1.value == +9 && input2.value == +1 && input3.value == +1) {
    text.innerHTML = "Password 1 Correcto";
  } else if (input1.value == +7 && input2.value == +1 && input3.value == +4) {
    text.innerHTML = "Password 2 Correcto";
  } else {
    text.innerHTML = "Incorrecto";
  }
  console.log(typeof input1);
});
