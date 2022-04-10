console.log('deu bim');

let contadorCartas = 0;
let pares;

function comparador() { 
	return Math.random() - 0.5; 
}

function iniciarJogo(){
let qtdcartas = prompt("Quantas cartas?");
qtdcartas = Number(qtdcartas);
console.log(qtdcartas);
console.log(typeof(qtdcartas));
console.log( qtdcartas%2);

while( qtdcartas%2 !== 0 || qtdcartas < 4 || qtdcartas > 14 ){
    alert('tente de novo');
    qtdcartas = Number(prompt("Quantas cartas?"));
}

console.log(qtdcartas)
let qtdpares = qtdcartas/2;
console.log(qtdpares);

let listacartas = document.querySelector(".container");
console.log(listacartas);

let cartas = [];

for(let i = 0; i < qtdpares; i++){
    cartas.push('parrot'+i);
    console.log(i);
    console.log(cartas);
}
for(let j = 0; j < qtdpares; j++){
    cartas.push('parrot'+j);
    console.log(j);
    console.log(cartas);
}

let cartasemb = cartas.sort(comparador);
console.log(cartasemb);

for(let k = 0; k < cartasemb.length; k++){
    listacartas.innerHTML += `<div class="carta" onclick ="viraCarta(this)">
     <img class = "verso amostrado" src="/img/front.png" alt="">
     <img class="frente" src="/img/${cartasemb[k]}.gif" alt=""></div>`
    console.log(k)
}
}

iniciarJogo();


function viraCarta(elemento){
    console.log(elemento);
    let pares = document.querySelectorAll(".frente.amostrado");
    console.log(pares);

    if(pares.length < 2){
        elemento.classList.toggle("virar");
         elemento.querySelector(".frente").classList.add("amostrado");
         elemento.querySelector(".verso").classList.remove("amostrado");

         contadorCartas++;
         console.log(contadorCartas);
    }
    
    setTimeout(comparaCartas, 1000);
}

function reviraCarta(elemento){
    console.log(elemento);
    elemento.classList.toggle("virar");
    elemento.querySelector(".frente").classList.remove("amostrado");
    elemento.querySelector(".verso").classList.add("amostrado");
}

function comparaCartas(){
    let pares = document.querySelectorAll(".frente.amostrado");
    console.log(pares);

    console.log("comparando cartas");
    console.log(pares[0].src);
    console.log(pares[1].src);
    
        if(pares[0].src === pares[1].src){
            pares[0].classList.remove("frente");
            pares[1].classList.remove("frente");

            console.log(pares[0].parentNode.innerHTML);
            console.log(pares[1].parentNode.innerHTML);
        } else{

            reviraCarta(pares[0].parentNode);
            reviraCarta(pares[1].parentNode);
        }
    
    
    console.log(pares);
    finalizarJogo();
}



function finalizarJogo(){
    let cartasNaoViradas = document.querySelectorAll(".frente").length;
    if( cartasNaoViradas === 0){
        alert(`Você ganhou em ${contadorCartas} jogadas!`);
    }
}
