const TicketManager = require("./Class")


const nuevoEvento = new TicketManager('hola')


nuevoEvento.agregarEventos('Recital - Shakira', 'Colombia', 5000, 50000, '12/12/2023' )

const eventos = nuevoEvento.getEventos()
console.log(eventos);
