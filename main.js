const botoes = document.querySelectorAll (".botao");
const textos = document.querySelectorAll (".aba-conteudo");

for(let i=0;i < botoes.length; i++){
    botoes[i].onclick = function(){

        for(let j=0;j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
      botoes[i].classList.add("ativo");
      textos[i].classList.add("ativo");
    }
    console.log();
}

const contadores = document.querySelectorAll (".contador");
const tempoObjetivo1 = new Date("2026-04-01T00:00:00");
contadores[0].textContent = calculaTempo (tempoObjetivo1);
const tempoObjetivo2 = new Date("2026-02-08T00:00:00");
contadores[1].textContent = calculaTempo (tempoObjetivo2);
const tempoObjetivo3 = new Date("2026-04-20T00:00:00");
contadores[2].textContent = calculaTempo (tempoObjetivo3);
const tempoObjetivo4 = new Date("2030-02-08T00:00:00");
contadores[3].textContent = calculaTempo (tempoObjetivo4);

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
let tempoAtual = new Date ();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor (tempoFinal/1000);
let minutos = Math.floor (segundos/60);
let horas = Math.floor (minutos/60);
let dias = Math.floor (horas/24);
let anos = Math.floor (dias/365)

segundos %= 60;
minutos %= 60;
horas %= 24;
dias %= 365;
return anos + "Anos " + dias + " Dias " + horas +" Horas " + minutos + " Minutos " + segundos + " Segundos ";
} 

function atualizaCronometro () {
    for (let i=0; i<contadores.length; i++) {
        contadores[i] .textContent = calculaTempo (tempos[i]);
    }
}
function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

//comecaCronometro();
