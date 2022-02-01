console.log("-------------------------------------------------------------------------------------");
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

//creacion de la clase persona
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
//creacion de la clase Estudiante
class Estudiante extends Persona{
	_calificacion=0.0;
	constructor(nombre,edad){
		super(nombre,edad);
	}
	//imprime el valor de los atributos del objeto estudiante
	obtDetalles(){
		console.log("Los datos del alumno son:");
		console.log(this._nombre);
		console.log(this._edad);
		console.log(this._calificacion);
	}
}
//creacion de la clase Profesor
class Profesor extends Persona{
	_asignatura="";
	_nivel="";
	constructor(nombre,edad,asignatura="JS",nivel="basico"){
		super(nombre,edad);
		this._asignatura=asignatura;
		this._nivel=nivel;
	}
	//imprime el valor de los atributos del objeto Profesor
	obtDetalles(){
		console.log("Los datos del profesor son:");
		console.log(this._nombre);
		console.log(this._edad);
		console.log(this._asignatura);
		console.log(this._nivel);
	}
}//creacion de la clase grupo que contendra los objetos Profesor y un arreglo con los objetos estudiante
class Grupo{
	_profesor={};
	_promedio=0;
	_estudiantes=new Array();
	constructor(profesor,estudiantes){
		this._profesor=profesor;
		this._estudiantes=estudiantes;
	}
	// callifica de forma aleatoria a los estudiantes y asigna el valor al atributo calificacion de cada uno
	calificar(){
		for(let key in this._estudiantes){
			this._estudiantes[key]._calificacion=(Math.random()*10);
		};
	}
	//toma el valor de la calificacion de cada estudiante y lo suma en una varaiable para despues dividirlo entre el numero de estudiantes
	promedio(){
		let suma=0;
		//tomamos la calificacion de cada estudiante
		for(let key in this._estudiantes){
			suma+=(this._estudiantes[key]._calificacion);
		};
		//realizamos la division de suma entre el numero de estudiantes
		this._promedio=suma/(Object.keys(this._estudiantes).length);
		console.log(this._promedio);
	}
	//imprimimos el valor de los atributos de el profesor y de cada estudiante
	objDetalles(){
		//imprimimos los datos del profesor
		this._profesor.obtDetalles();
		//imprimimos el los datos de cada estudiante
		for(let key in this._estudiantes){
			this._estudiantes[key].obtDetalles();
		};
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

grupo.calificar();
console.log("<----------   Ya se ha calificado a los estudiantes   --------------->");
console.log("El promedio general de los estudiantes es:");
grupo.promedio();
console.log("El detalle del maestro y los estudiantes es:");
grupo.objDetalles();