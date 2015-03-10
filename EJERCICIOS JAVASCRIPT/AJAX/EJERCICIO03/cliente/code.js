//delaro variable estado servidor completado
var READY_STATE_COMPLETE=4;

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

//compruebo si el usuario que esta en el login esta usado

function comprobar() {
	var login = document.getElementById("login").value;
    //iniciamos peticion
	peticion_http = inicializa_xhr();
    //si hay respuesta del servidor (true)
	if(peticion_http) {
        //guardamos el estado que nos devuele el servidor
		peticion_http.onreadystatechange = RespuestaServidor;

		peticion_http.open("POST", "http://localhost/EJERCICIO03/servidor/compruebaDisponibilidad.php", true);

        //cabeceras:para enviar parámetros mediante el método POST, es obligatorio incluir la cabecera Content-Type mediante la siguiente instrucción
		peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send("login="+login+"&nocache="+Math.random());
	}
}

function RespuestaServidor() {
	if(peticion_http.readyState == READY_STATE_COMPLETE) {
		if (peticion_http.status == 200) {
            //guardamos en la variable login el valor
            //que se nos pasa en el textfield
			var login = document.getElementById("login").value;
            //comprobamos la respuesta del servidor
			if(peticion_http.responseText == "si") {
			/*si la respuesta del servidor es si es que se puede usar devolvemos mensaje:*/	document.getElementById("disponibilidad").innerHTML = "El usuario elegido "+login+" está disponible";
			}
			else {
			/*si la respuesta del servidor es no es que se puede usar devolvemos mensaje de no:*/	document.getElementById("disponibilidad").innerHTML = "El usuario elegido no esta disponible "+login+"";
			}
		}
	}
}


window.onload = function() {
	document.getElementById("comprobar").onclick = comprobar;
}
