let meuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector("nav");
let input = document.querySelector("input");
let botao = document.querySelector("button");
let h2 = document.querySelector("h2");

function mostrarMenu(){
    //nav.style.display = "block";
//JEITO 1
//     if(nav.classList.contains("visivel")){
//         nav.classList.remove("visivel");
//     }else{
//         nav.classList.add("visivel");
//     }
// 
//JEITO 2
    nav.classList.toggle("visivel");
    menu-Hamburguer.classList.toggle("ativo");
}

function pegarNome(){
    let nome = input.value
    h2.innerHTML = `Seja bem-vind@ ${nome}`;
    input.value = ""; 
}
meuHamburguer.onclick = mostrarMenu;

botao.onclick = pegarNome;