var fecha="Naci el 05/04/1982 en donostia";

var exp1="[0-9]{2}\/[0-9]{2}\/[0-9]{4}";
var exp1="[0-3]{1}[\/[0-9]{2}\/[0-9]{4}";

var.exec(fecha);


/*Crear una expresión regular que valide una dirección de email. Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y los caracteres . y -, mientras que los valores tra la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.*/
/*cualquier caracter alfanumerico+la arroba+cualquiercaracteralfanumerico+.+cualquiercaracteralfanumerico.*/

var exp2="\S+@\S+\.\S{2,3}";
var exp22="/\w+@\w+\.\w{2,3};




/*Dada la siguiente función que de reemplazo de caracteres, reescribirla utilizando expresiones regulares.
function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"],
                        ["<", "&lt;"], [">", "&gt;"]];
    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}*/

var caracter = {
                 '<' : '&lt;',
                 '>' : '&gt;',
                 '&' : '&amp;',
                 '/' : '&quot;'
                };
//var exp3="[&\<>]/gi";


var cadena='/<>&';

return cadena.replace("[&/<>]/gi", function (c) {
            return caracter[c];
         });



/*Dados un nombre y un apellido, crear la expresión regulatr necesaria para mostrarlos en orden inverso y separados por una coma. Por ejemplo, la cadena "John Smith", convertirla en "Smith, John".*/



var c = 'john smith'.split(' ');
c.replace(c[1],c[2]);

/*Crear una expresión regular que elimine las etiquetas potencialmente peligrosas (<script>...</script>) y todo su contenido de una cadena HTML.*/


var exp3="<script>.*<\/\1>/g";

