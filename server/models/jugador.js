// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA / ESQUEMA
const jugadorSchema = mongoose.Schema({
    idJugador: {
        type: String
    },
    nombre: {
        type: String
    },
    edad: {
        type: Number
    },
    boleta: {
        type: String
    },
    idEquipo: {
        type: Number
    },
    estatura:{
        type: Number
    },
    peso:{
        type: Number
    }
})

// 3. CREACIÓN DEL MODELO
// mongoose.model("el nombre del modelo en singular", schema de arriba, "nombre de la colección")
const Jugador = mongoose.model("jugador", jugadorSchema, "jugadores")

// 4. EXPORTACIÓN
module.exports = { Jugador }