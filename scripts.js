let contadorCartas = 0;
let pares;
let tempo = document.querySelector(".clock");
tempo.innerHTML = 0;
let idInterval;

function comparador() { 
	return Math.random() - 0.5; 
}

function tempoDeJogo(){
    tempo.innerHTML++;
}


function iniciarJogo(){
let qtdcartas = prompt(` Deseja começar com quantas cartas? \n(Escolha um número PAR entre 4 e 14)`);
qtdcartas = Number(qtdcartas);

while( qtdcartas%2 !== 0 || qtdcartas < 4 || qtdcartas > 14 ){
    qtdcartas = Number(prompt(` Deseja começar com quantas cartas? \n(Escolha um número PAR entre 4 e 14)`));
}

let qtdpares = qtdcartas/2;
let listacartas = document.querySelector(".container");
let cartas = [];

for(let i = 0; i < qtdpares; i++){
    cartas.push('parrot'+i);
}
for(let j = 0; j < qtdpares; j++){
    cartas.push('parrot'+j);
}

let cartasemb = cartas.sort(comparador);
for(let k = 0; k < cartasemb.length; k++){
    listacartas.innerHTML += `<div class="carta" onclick ="viraCarta(this)">
     <img class = "verso amostrado" src="/img/front.png" alt="">
     <img class="frente" src="/img/${cartasemb[k]}.gif" alt=""></div>`
}

idInterval = setInterval(tempoDeJogo, 1000);
}

iniciarJogo();

function viraCarta(elemento){
    let pares = document.querySelectorAll(".frente.amostrado");
    if(pares.length < 2){
        elemento.classList.add("virar");
        elemento.querySelector(".frente").classList.add("amostrado");
        elemento.querySelector(".verso").classList.remove("amostrado");
        contadorCartas++;
        pares = document.querySelectorAll(".frente.amostrado");
        if(pares.length === 2){
            setTimeout(comparaCartas, 1000);
        }
    }    
}

function reviraCarta(elemento){
    elemento.classList.remove("virar");
    elemento.querySelector(".frente").classList.remove("amostrado");
    elemento.querySelector(".verso").classList.add("amostrado");
}

function finalizarJogo(){
    let cartasNaoViradas = document.querySelectorAll(".frente").length;
    if( cartasNaoViradas === 0){
        clearInterval(idInterval);
        alert(`Você ganhou em ${contadorCartas} jogadas em um tempo de ${tempo.innerHTML} segundos!`);

        reiniciarJogo();
    }
}

function comparaCartas(){
    let pares = document.querySelectorAll(".frente.amostrado");
        if(pares[0].src === pares[1].src){
            pares[0].classList.remove("frente");
            pares[1].classList.remove("frente");
        } else{
            reviraCarta(pares[0].parentNode);
            reviraCarta(pares[1].parentNode);
        }
    finalizarJogo();
}

function reiniciarJogo(){
    let resposta = prompt("Você deseja jogar novamente?");
    switch(resposta){
        case "sim":
            let novoJogo = document.querySelector(".container")
            novoJogo.innerHTML = ""
            contadorCartas = 0
            tempo.innerHTML = 0
            iniciarJogo()
            break;
        case "não" :
            break;
        default:
            alert("Resposta não reconhecida, digite 'sim' ou 'não'");
            reiniciarJogo()
            break;
        
    }
}

