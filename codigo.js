//Probando Map
var a = ["Pedro", "Facundo"];
var a2= a.map(function(s){return s.length})
var a3= a.map(s => s.length);
console.log(a2);
console.log("Map con flecha "+a3);

//Declarando objetos

var miAuto = new Object();
miAuto.marca = "Ford";
miAuto.modelo = "Focus";
miAuto.año = "2020";
console.log(miAuto.marca);

//Declarando funciones:
function Auto(marca, modelo, año)
{
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;
}
var miCarro=new Auto("renaaal", "Sandero", "2012");
console.log(miCarro);