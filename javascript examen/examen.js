class Prueba{
	_nombre;
	constructor(nombre="rafa"){
	this._nombre=nombre;
	}
	obtener(){
		console.log(this._nombre);
	}
}
var mio1=new Prueba();
var mio2=new Prueba();
var arrelgo={mio1,mio2};

console.log("Ejercicio 1");
var numero1 = 5;
var numero2 = 8;
if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0 ) {
console.log("numero1 es negativo o distinto de cero");
}
if((numero1 +1) <= numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
console.log("-------------------------------------------------------------------------------------");
console.log("Ejercicio 2");
let factorial=5;
let respuesta=1;
for(let i=1;i<=factorial;i++){
	respuesta*=i;
}
console.log(respuesta);
console.log("-------------------------------------------------------------------------------------");
console.log("Ejercicio 3");
function esPar(numero){
	if(numero%2 == 0){
		console.log("el numero es par");
	}
	else{
		console.log("el numero es impar");
	}
}
esPar(10);
console.log("-------------------------------------------------------------------------------------");
console.log("Ejercicio 5");
class Persona{
	_nombre="";
	_edad=0;
	constructor(nombre,edad){
		this._nombre=nombre;
		this._edad=edad;
	}
	obtDetalles(){
		console.log(this._nombre);
		console.log(this._edad);
	}
}
class Estudiante extends Persona{
	_calificacion=0.0;
	constructor(nombre,edad){
		super(nombre,edad);
	}
	obtDetalles(){
		console.log(this._nombre);
		console.log(this._edad);
		console.log(this._calificacion);
	}
}
class Profesor extends Persona{
	_asignatura="";
	_nivel="";
	constructor(nombre,edad,asignatura="JS",nivel="basico"){
		super(nombre,edad);
		this._asignatura=asignatura;
		this._nivel=nivel;
	}
	obtDetalles(){
		console.log(this._nombre);
		console.log(this._edad);
		console.log(this._asignatura);
		console.log(this._nivel);
	}
}
class Grupo{
	_profesor={};
	_promedio=0;
	_estudiantes={};
	constructor(profesor,estudiantes){
		this._profesor=profesor;
		this._estudiantes=estudiantes;
	}
	calificar(){
		this._estudiantes.forEach(function(elemento,indice,array){
			elemento._calificacion=(Math.random()*10);
		});
	}
	promedio(){
		let suma=0;
		this._estudiantes.forEach(function(elemento,indice,array){
			suma+=elemento._calificacion;
		});
		this._promedio=suma/(this._estudiantes.length);
	}
	objDetalles(){
		this._profesor.obtDetalles();
		this._estudiantes.forEach(function(elemento,indice,array){
			elemento.obtDetalles();
			
		});
	}

}
var estudiante1=new Estudiante("rafa",35);
var estudiante2=new Estudiante("rafa",35);
var estudiante3=new Estudiante("rafa",35);
var estudiante4=new Estudiante("rafa",35);
var estudiante5=new Estudiante("rafa",35);
var estudiante6=new Estudiante("rafa",35);
var arrayEstudiantes={estudiante1,estudiante2,estudiante3,estudiante4,estudiante5,estudiante6};

var profesor= new Profesor("Monse",34);

var grupo= new Grupo(profesor,arrayEstudiantes);