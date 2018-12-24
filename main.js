var elemento1 = document.getElementsByClassName("vermelho");
var elemento2 = document.getElementsByClassName("azul");
var elemento3 = document.getElementsByClassName("roxo");
var elemento4 = document.getElementsByClassName("branco");
var cores = ['#fff', 'rgb(246, 69, 69)', 'rgb(51, 48, 241)', 'rgb(183, 78, 231)'];

setInterval(teste, 500);

function teste(){
    sortearElemento1();
    sortearElemento2();
    sortearElemento3();
    sortearElemento4();
    teste2();
}



function sortearElemento1(){
    for (let i = 0; i < elemento1.length; i++) {
        elemento1[i].style.color = cores[Math.floor(Math.random() * cores.length)];
    }
}

function sortearElemento2(){
    for (let i = 0; i < elemento2.length; i++) {
        elemento2[i].style.color = cores[Math.floor(Math.random() * cores.length)];
    }
}

function sortearElemento3(){
    for (let i = 0; i < elemento3.length; i++) {
        elemento3[i].style.color = cores[Math.floor(Math.random() * cores.length)];
    }
}

function sortearElemento4(){
    for (let i = 0; i < elemento4.length; i++) {
        elemento4[i].style.color = cores[Math.floor(Math.random() * cores.length)];
    }
}

