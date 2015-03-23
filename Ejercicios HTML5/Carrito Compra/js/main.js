$(document).ready(function () {

    //cuando el documento este listo
    iniciar();
    //declaro variables    
    var producto, cesta;

    //iniciamos
    function iniciar() {
        //guardo en producto el elemento div seleccionado
        producto = document.getElementById('product');
        //controlo el arrastrado
        producto.addEventListener('dragstart', arrastrado);
        //guardo en la cesta el contenedor desta
        cesta = document.getElementById('drop');
        
                
    }
    
    function arrastrado(){
        this.style.opacity = '0.4';}
    
        addEventListener('load', iniciar);

});