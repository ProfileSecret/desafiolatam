const click = document.querySelector('img'); 
const text = document.querySelector('p');

click.addEventListener("click", function() {
        click.classList.toggle("toggle")
})

text.addEventListener("click", () => {
        text.classList.toggle("vueltas")
})



