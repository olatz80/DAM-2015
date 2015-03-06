function persona(nombre, edad, genero) {
    this.nombre = nombre || "";
    this.edad = edad || "";
    this.genero = genero || "";

this.obtDetalles() {
   console.log("Nombre: "+this.nombre+, " Edad: " + this.edad+
}




function estudiante(nombre, curso, grupo) {
    this.base = persona;
    this.base(nombre);
    this.curso = curso;
    this.grupo = grupo || "a";
    this

}

persona.prototype.move = function registrar(nombre, curso, grupo) {
    persona.call(this);
    this.curso = curso;
    this.grupo = grupo;
    console.log("estudiante registrado");
}

//estudiante.prototype = new persona;

function profesor(nombre, asignatura, nivel) {
    this.base = persona;
    this.base(nombre,eda,genero);
    this.asignatura = asignatura || "";
    this.nivel = nivel || "1";
    this.asignar = function(){
        console.log("asignar: asignaturas:

}
persona.prototype.move = function asignar(nombre, asignatura, nivel) {
    persona.call(this);
    this.asignatura = asignatura;
    this.nivel = nivel;
    console.log("estudiante asignado");
}
profesor.proptotype = new persona;



var per1=new persona("aitorpe", 31, "M")
