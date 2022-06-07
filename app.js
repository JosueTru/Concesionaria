const fs = require("fs");
const concesionaria = require('./funciones');

const accion = process.argv[2];


switch(accion){
    case "lista":
        console.log(concesionaria.autos)
        break;
    case "buscar":
        console.log("El auto con la patente recibida es:")
        console.log("------------------------------------")
        console.log(concesionaria.buscarAuto(process.argv[3]))
        break;
    case "vender":
        console.log("Se ha vendido el auto con las siguientes descripciones:")
        console.log("-------------------------------------------------------")
        console.log(concesionaria.venderAuto(process.argv[3]))
        break;
    case "disponible":
        console.log("Los siguientes autos estan disponibles para su venta:")
        console.log("--------------------------------------------------------")
        console.log(concesionaria.autosParaLaVenta())
        break;
    case "nuevos":
        console.log("Los autos con kilometraje menor a 100 son los siguientes:")
        console.log("----------------------------------------------------------")
        console.log(concesionaria.autosNuevos())
        break;
    case "ventas":
        console.log("Lista de dinero de las ventas:")
        console.log("------------------------------")
        console.log(concesionaria.listaDeVentas())
        break;
    case "ventas totales":
        console.log("Suma total de las ventas:")
        console.log("-------------------------")
        console.log(concesionaria.totalVentas())
        break;
    case "puede comprar":
        let persona = {
            nombre: process.argv[4],
            capacidadDePagoEnCuotas: process.argv[5],
            capacidadDePagoTotal: process.argv[6]
        }
        let autox = concesionaria.buscarAuto(process.argv[3])
        console.log("El siguiente resultado verifica si " + process.argv[4] + " puede comprar el auto con patente " + process.argv[3])
        console.log("--------------------------------------------------------------------------------")
        console.log(concesionaria.puedeComprar(autox,persona))
        break;
    case "lista puede comprar":
        let cliente = {
            nombre: process.argv[3],
            capacidadDePagoEnCuotas: process.argv[4],
            capacidadDePagoTotal: process.argv[5]
        }
        console.log("Esta es la lista de autos que puede comprar " + process.argv[3] + ":")
        console.log("-------------------------------------------------")
        console.log(concesionaria.autosQuePuedeComprar(cliente))
        break;
    default:
        console.log("Porfavor elija una opcion valida.")
}


















/*


switch (accion) {

case "listar" : 
console.log(concesionaria.autos);
break;

case "buscar" : 
console.log('El resultado de la búsqueda es:')
console.log('-------------------------------')
console.log(concesionaria.buscarAuto(process.argv[3]));
break;

case "vender" : 

concesionaria.venderAuto(primerParametro)
break;

case "en venta":
console.log(concesionaria.autosParaLaVenta());
break;

case "vendidos" :
console.log(concesionaria.listaDeVentas());    
break;

case "total de ventas" :
console.log(concesionaria.totalDeVentas());    
break;

case "ver posibles" :

let nuevaPersona = {
    nombre : process.argv[3],
    capacidadDePagoEnCuotas : process.argv[4],
    capacidadDePagoTotal : process.argv[5],
}

}


*/