function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function cargaProvincias() {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {
            //crear la lista
            var lista = document.getElementById("provincia");
            var documento_xml = peticion.responseXML;
            //elemento raiz provincias
            var provincias = documento_xml.getElementsByTagName("provincias")[0];
            //listaprovincias
            var listaProvincias = provincias.getElementsByTagName("provincia");
            //añadir la seleccion a la lista, posicion 0
            lista.options[0] = new Option("- selecciona -");

            // añadir a la lista el resto de elementos
            for (i = 0; i < listaProvincias.length; i++) {
                //guardar cada elemento codigo y nombre de provincias
                var codigo = listaProvincias[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                var nombre = listaProvincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                //añadir cada par nombre y codigo
                lista.options[i + 1] = new Option(nombre, codigo);
            }


        }
    }
}

function cargaMunicipios() {
    //guardamos en la variable lista  provincias
    var lista = document.getElementById("provincia");
    //guaradar la provincia selccionada
    var provincia = lista.options[lista.selectedIndex].value;
    //comprobamos que provincia es un numero, por que es una posicion:
    if (!isNaN(provincia)) {
        peticion = inicializa_xhr();
        if (peticion) {
            peticion.onreadystatechange = mostrarMunicipios;
            peticion.open("POST", "http://localhost/PROVINCIASXML/servidor/cargaMunicipiosXML.php?nocache=" + Math.random(), true);
            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            peticion.send("provincia=" + provincia);
        }
    }
}

function mostrarMunicipios() {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {
            //creamos la lista
            var lista = document.getElementById("municipio");
            //hacemos la peticion al servidor
            var documento_xml = peticion.responseXML;
            ////elemento raiz municipios
            var listamunicipios = documento_xml.getElementsByTagName("municipios")[0];
            //lista de municipios
            var municipios = listamunicipios.getElementsByTagName("municipio");

            // dejamos la lista a cargar en el select  vacia 
            lista.options.length = 0;

            // igual que con las provincias añado lo elementos a la lista
            for (i = 0; i < municipios.length; i++) {
                var codigo = municipios[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                var nombre = municipios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                lista.options[i] = new Option(nombre, codigo);
            }
        }
    }
}

window.onload = function () {
    //hacer la peticion al servidor, la hacemos aqui en vez de en una funcion
    //al cargar la pagina se tiene que cargar las provincias
    peticion = inicializa_xhr();
    if (peticion) {
        peticion.onreadystatechange = cargaProvincias;
        peticion.open("POST", "http://localhost/PROVINCIASXML/servidor/cargaProvinciasXML.php?nocache=" + Math.random(), true);
        peticion.send(null);
    }
//    Cuando cambie el elemento provincia, es decir cuando seleccione la provincia se carga municiipios
    document.getElementById("provincia").onchange = cargaMunicipios;
}