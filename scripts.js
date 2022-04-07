console.log('deu bim');


// Esta função pode ficar separada do código acima, onde você preferir
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

for(let i = 0; i < qtdpares; i++){
    listacartas.innerHTML += `<div class="carta figura${i}" onclick = "virarCarta(this)">figura${i}</div>`
    listacartas.innerHTML += `<div class="carta ${i}" onclick = "virarCarta(this)">figura${i}</div>`
    console.log(i)
}

let cartas = document.querySelectorAll(".carta") ;
console.log(cartas);
let minhaArray = [1,2,3,5,9];
console.log(minhaArray);
minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
console.log(minhaArray);

cartas.sort(comparador);
console.log(cartas);
}

iniciarJogo();

function virarCarta(elemento){
    console.log(elemento);
    elemento.classList.toggle("verso");
    elemento.innerHTML = ``;
}

