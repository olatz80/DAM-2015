//objeto global
var APP = APP || '';

//esperar a que el DOM este cargado. y
//Usar "use strict".

$(document).ready(function () {
    "use strict";
    console.log('el documento está preparado');


    // Iniciaremos las variables privadas que sean necesarias.


    // Necesitaremos una funcion que cree objetos DOM de clase img y todos los atributos necesarios.
    // Necesitaremos una funcion que agrege el array de img al DOM (no se realizaran cambios de DOM dentro de ningun bucle).


    $('#carga').on("click", function () {
        var filas = parseInt(document.getElementById('filas').value);
        var columnas = parseInt(document.getElementById('columnas').value);

        var num = filas * columnas;
        APP.setAjax(num);


    });




    APP.cargaImagen = function (json) {

        //                var jsonArray = json;
        var arrayImagenes = [];
        var i = 0;
        var jsonArraylength = json.length;
        var srcArray = "";

        for (i; i < jsonArraylength; i++) {
            if (json[i].animal == "dog") {
                srcArray = "./img/dog.png";

            } else {

                srcArray = "./img/cat.png";
            }
            arrayImagenes.push('<img id="imagen"  data-idimg="'+i+'" src="' + srcArray + '"></img>');

        }
        //añadir las imagenes al contenedor
        $('#contenedor').append(arrayImagenes.join(' '));
       
        //llamada a funcion mostrar Animales
        
        mostrarAnimales(jsonArraylength);
        
   
    }
    
    
function mostrarAnimales(numero){
     //ocultar el contenedor de botones
        $('#botones').hide();
    
    if (numero>1 && numero<6){
        $('#contenedor').css({'container':'80%'});
        $('#imagen').css({'background-color':'red'                   
                         });
    }
  //mostrar el conenedor de imagenes
    $('#contenedor').show();
    
    
}
});

// Necesitaremos una o varias funcion(es) que controle(n) el paso del tiempo.

// Necesitaremos añadir los eventos necesarios en el momento adecuado. solo se puede hacer click cuando el elemento cambia de color

// Necesitaremos las funciones de callback para los eventos.

// Necesitaremos una funcion encargada de llamar al modulo que se define en el fichero net.js con los parametros adecuados para realizar la llamada y capturar la respuesta AJAX.

// Necesitaremos una funcion que controle el final del juego.

// Necesitaremos una funcion que controle la lista de eliminados. 

// Cualquier otra funcion que sea necesaria.