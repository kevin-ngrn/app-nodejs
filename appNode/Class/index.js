class TicketManager{
    eventos
    
    constructor(){
        this.eventos = []
    }

    agregarEventos(nombre, lugar, precio, capacidad = 50, fecha, participantes = []){
        const infoEvento = {
            nombre: nombre,
            lugar: lugar,
            precio: precio * 1.15,
            capacidad: capacidad,
            fecha: fecha,
            participantes: participantes,
            id: 1            
        }
        this.eventos.push(infoEvento)
    }

    getEventos(){
        return this.eventos 
    }

    #precioBaseDeGanancia = this.precio * 1.15

    agregarUsuario(){
        if (this.eventos) {
            idEvento = this.eventos.id
        }else{
            console.log('error')
        }
        idUsuario = ''
    }
    ponerEventoEnGira(){
        idNuevoEvento = this.eventos.id
        nuevaLocalidiad = this.eventos.lugar
        nuevaFecha = this.eventos.fecha
    }
}

module.exports = TicketManager




