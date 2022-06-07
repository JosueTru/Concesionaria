let autos = require("./autos");


let concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        let coleccion = this.autos
        let resultado
        let nulo
        coleccion.forEach(function(valor, i){
            patente === valor.patente? resultado = valor : nulo = null
        })
        return resultado || nulo
    },
    venderAuto: function(patentefax){
        let seleccionado = this.buscarAuto(patentefax)
        let coleccion = this.autos
        seleccionado.vendido = true
        this.autos = coleccion
        return  seleccionado
    },
    autosParaLaVenta: function(){
        let lista = this.autos
        let filtrado = lista.filter(function(valorfax){
            return valorfax.vendido === false
        })
        return filtrado
    },
    autosNuevos: function(){
        let lista = this.autosParaLaVenta()
        let filtradaso = lista.filter(function(filtro){
            return filtro.km < 100
        })
        return filtradaso
    },
    listaDeVentas: function(){
        let lista = this.autos
        let arrayLista = []
        let filtrado = lista.filter(filtro => {
            return filtro.vendido === true
        })
        filtrado.forEach((valor, i) =>{
            arrayLista.push(valor.precio)
        })
        return arrayLista
    },
    totalVentas: function(){
        let ventas = this.listaDeVentas()
        let resultado
        let nulo
        switch (ventas.length){
            case 0:
                nulo = 0
                break;
            default:
                resultado = ventas.reduce((acumulador, numero)=>{
                return acumulador + numero
            })
        } return resultado || nulo
    },
    puedeComprar: function(auto, persona){
        return ((persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)) && (persona.capacidadDePagoTotal >= auto.precio))
    },
    autosQuePuedeComprar: function(persona){
        let lista = this.autosParaLaVenta()
        let arrayAutos = []
        lista.forEach((valor, i) => {
            if( this.puedeComprar(valor, persona) === true){
                arrayAutos.push(valor)
            }});
        return arrayAutos
    }
}

module.exports = concesionaria;





