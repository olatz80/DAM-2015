var mvideo, reproducir, pausa, stop, barra, pcompleta, avance, retroceso, pinicio, pfinal, bprogreso;

//$(document).ready(function() {
//    
//
//
//      iniciar();

iniciar();

function iniciar() {
    mvideo = document.getElementById('mvideo');
    reproducir = document.getElementById('Iniciar');
    pausa = document.getElementById('Pausar');
    stop = document.getElementById('Parar');
    barra = document.getElementById('progreso');
    pcompleta = document.getElementById('pcompleta');
    avance = document.addEventListener('Avanzar');
    retroceso = document.addEventListener('Retroceder');
    pinicio = document.getElementById('Inicio');
    pfinal = document.getElementById('Fin');
    bprogreso=document.addEventListener('progreso');
    reproducir.addEventListener('click', marcha);
    pausa.addEventListener('click', pausar);
    stop.addEventListener('click', parar);
    pinicio.addEventListener('click', marcha);
    pfin.addEventListener('click',final);
    mvideo.addEventListener('timeupdate',progresar);
pcompleta.addEventListener('click',pantallaCompleta);


}

function marcha() {

    mvideo.play();
    
    avance.addEventListener('click', avanzar);
    retroceso.addEventListener('click', retroceder);
    bprogreso.addEventListener('click',progresar);
    
}
function pausar() {

    mvideo.pause();
    
}

function parar() {
    mvideo.load();
    mvideo.iniciar();
}

function retroceder() {
    mvideo.currentTime -= 5;
}

function avanzar() {
        mvideo.currentTime += 5;
}

function progresar(){

//  if(!mvideo.ended){
//    var pos = parseInt(mvideo.currentTime * 400 / mvideo.duration);
//    bprogreso.style.width = pos + 'px';
//  }else{
//    bprogreso.style.width = '0px';
//    reproducir.innerHTML = 'Iniciar';
//    
//  }

    bprogreso.value=Math.floor((mvideo.currentTime * 100) / mvideo.duration);}


function final(){
    
    
}


 function pantallaCompleta() {

        

        if (mvideo.requestFullscreen) {
            mvideo.requestFullscreen();
        } else if (mvideo.msRequestFullscreen) {
            mvideo.msRequestFullscreen();
        } else if (mvideo.mozRequestFullScreen) {
            mvideo.mozRequestFullScreen();
        } else if (mvideo.webkitRequestFullscreen) {
            mvideo.webkitRequestFullscreen();
        }
    }

    //});