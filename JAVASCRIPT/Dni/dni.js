
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var letra='Z';
    var numerodni = 44165854;
    if (numerodni < 0 || numerodni > 99999999) {
        alert("nuemro erroneo");
    } else {
        var resto = numerodni % 23;
        letra=letra.toUpperCase();
        for (var i = 0; i < 23; i++) {
            if (i == resto) {
                letra = letras[i];
            }
        }
    }
    return letra;

