//Probando Map
var a = ["Pedro", "Facundo"];
var a2= a.map(function(s){return s.length})
var a3= a.map(s => s.length);
console.log(a2);
console.log("Map con flecha "+a3);
//Declarando objetos con Objet
var miAuto = new Object();
miAuto.marca = "Ford";
miAuto.modelo = "Focus";
miAuto.año = "2020";
console.log(miAuto.marca);
//Declarando funciones: creando clase 
function Auto(marca, modelo, año)
{
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;
}
// creo un nuevo Auto llamado mi Carro
var miCarro=new Auto("renaaal2", "Sandero", "2032");
console.log(miCarro.año);
//lo imprimo
var miCarro =
{
    arrancar: function(miCarro)
    {
        console.log("llamando")
        console.log(miCarro.año)  
        console.log(miCarro.marca)
        console.log(miCarro.modelo)      
    }
};
miCarro.arrancar();



//funciones de sumar
Valor = function sumar(a,b)
{
    return a+b;
}
console.log(Valor(5,3))


