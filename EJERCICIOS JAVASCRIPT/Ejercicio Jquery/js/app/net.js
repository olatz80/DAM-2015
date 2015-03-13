//objeto global
var APP = APP || {};


//Usar "use strict"


//esperar a que el DOM este cargado

$(document).ready(function () {
    "use strict";
    


//Funcion anonima autoejecutable para realizar las peticiones AJAX, que añadiremos en el objeto global 
//y expondra un metodo para poder realizar las llamadas al servidor. 


    APP.setAjax = function (num){
        $.ajax({
        url: "./php/getcards.php",
        data:{numero:num},
        type: 'GET',
        dataType: 'json',
        success: function(json) {
            // Se ejecuta cuando se ha recibido correctamente
            // los datos de la url
            APP.cargaImagen(json);
            
        }
    });
    }
    
});

//El servidor espera un parametro 'numero' con el número de elementos que tendra el JSON de respuesta.

// obtiene información en formato JSON desde el servidor

