const sticker1 = document.querySelector("#sticker1");
const sticker2 = document.querySelector("#sticker2");
const sticker3 = document.querySelector("#sticker3");
const texto = document.querySelector("#text");
const boton = document.querySelector("#verificar");

boton.addEventListener("click", () => {
  const total = +sticker1.value + +sticker2.value + +sticker3.value;

  if (total > 10) {
    texto.innerHTML = `Llevas mas de 10 Stickers (${total})`;
  } else if (total <= 10) {
    texto.innerHTML = `Llevas ${total} Stickers`;
  } else if (total >= 0) {
    texto.innerHTML = `Ingresa cantidad de stickers`;
  }
});
