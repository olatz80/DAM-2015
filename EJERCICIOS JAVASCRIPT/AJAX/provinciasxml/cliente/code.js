//delaro variable estado servidor completado
var READY_STATE_COMPLETE = 4;

//declaro la variable de peticion al servidor
var peticion_http = null;

//inicio la funcion de peticion al servidor
function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}


//cargar el primer combo (provincias) al cargar la ventana:

//function cargarComboProvincias(){
//
//    //iniciamos peticion
//    peticion_http = inicializa_xhr();
//    //si hay respuesta del servidor (true)
//    if (peticion_http) {
//        //guardamos el estado que nos devuele el servidor
//
//        peticion_http.onreadystatechange = cargaProvincias;
//
//        peticion_http.open("POST", "http://localhost/AJAX/provinciasxml/servidor/cargaProvinciasXML.php", true);
//
//        //cabeceras:para enviar parÃ¡metros mediante el metodo POST, es obligatorio incluir la cabecera Content-Type mediante la siguiente instrucciÃ³n
//        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//        
//       
//    }
//
//
//
//}


//Respuesta del servidor

function cargaProvincias() {
    if (peticion_http.readyState == READY_STATE_COMPLETE) {
        if (peticion_http.status == 200) {
            
            var listaprov= document.getElementById("provincia");
            //respuesta xml del servidor
            var respuestaServXml = peticion_http.responseXML;
            //elemento padre del xml
            var provincias = respuestaServXml.getElementsByTagName("provincias")[0];
            
            //primer elemento hijo provincia de provincias            
            
            var laprovincia=provincias.getElementsByTagName("provincia");
            //primer elemento hijo codigo de provincia
            var codigo = provincias.getElementsByTagName("codigo");
            //primer elemento hijo nombre de provincia
            var nombre = provincias.getElementsByTagName("nombre");
            //primervalor de la lista es el -selecciona-
            
            listaprov.options[0] = new Option("- selecciona -");

            //recorremos todos los nodos provincia
            for(var i=0; i<laprovincia.length; i++) {
                
                
            var codigo =laprovincia[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;

            var nombre =laprovincia[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;


            listaprov[i+1]=new Option(nombre,codigo);
            
            }
//            document.getElementById("prov").innerHTML =nombre;

            }
        }
    }






window.onload = function () {
    //iniciamos peticion
    peticion_http = inicializa_xhr();
    //si hay respuesta del servidor (true)
    if (peticion_http) {
        //guardamos el estado que nos devuele el servidor

        peticion_http.onreadystatechange = cargaProvincias;

        peticion_http.open("GET", "http://localhost/AJAX/provinciasxml/servidor/cargaProvinciasXML.php", true);

        //cabeceras:para enviar parÃ¡metros mediante el metodo POST, es obligatorio incluir la cabecera Content-Type mediante la siguiente instrucciÃ³n
//        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//        
         peticion_http.send(null);
    }

}

