let meuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector("nav");

function mostrarMenu(){
    //nav.style.display = "block";
    nav.classList.add("visivel");
}

meuHamburguer.onclick = mostrarMenu;