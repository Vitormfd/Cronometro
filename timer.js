function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'});
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() { // SOMA UM SEGUNDO
     timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    console.log(el);

    if(el == iniciar){
        relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
    }
    if(el == pausar){
        relogio.classList.add('pausado');
        clearInterval(timer);   
    }
    if(el == zerar){
        relogio.classList.remove('pausado');
        clearInterval(timer)
        relogio.innerHTML = '00:00:00' 
        segundos = 0;
    }
})