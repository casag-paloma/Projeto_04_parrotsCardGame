console.log('deu bim');

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

let listacartas = document.querySelector(".container");
console.log(listacartas);
for(let i = 0; i < qtdcartas; i++){
    listacartas.innerHTML += `<div class="carta" onclick = "virarCarta(this)"><img src="/img/front.png" alt=""></div>`;
    console.log(i)
}

}

iniciarJogo();

function virarCarta(elemento){
    console.log(elemento);
    elemento.classList.add("verso");
    elemento.innerHTML = ``;
}

