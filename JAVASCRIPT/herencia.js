function persona(nombre, edad, genero) {
    this.nombre = nombre || "";
    this.edad = edad || "";
    this.genero = genero || "";
}



persona.prototype.move = function obtDetalles(nombre, edad, genero) {
    this.nombre = nombre;
    this.nombre = edad;
    this.nombre = genero;
    console.log("Datos estudiante");
}

function estudiante(nombre, curso, grupo) {
    this.base = persona;
    this.base(nombre);
    this.curso = curso;
    this.grupo = grupo || "a";


}

persona.prototype.move = function registrar(nombre, curso, grupo) {
    persona.call(this);
    this.curso = curso;
    this.grupo = grupo;
    console.log("estudiante registrado");
}

estudiante.prototype = new persona;

function profesor(nombre, asignatura, nivel) {
    this.base = persona;
    this.base(nombre);
    this.asignatura = asignatura || "";
    this.nivel = nivel || "1";


}
persona.prototype.move = function asignar(nombre, asignatura, nivel) {
    persona.call(this);
    this.asignatura = asignatura;
    this.nivel = nivel;
    console.log("estudiante asignado");
}
profesor.proptotype = new persona;
