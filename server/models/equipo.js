// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA / ESQUEMA
const equipoSchema = mongoose.Schema({
    idEquipo: {
        type: String
    },
    nombre: {
        type: String
    },
    idEntrenador: {
        type: String
    },
})

// 3. CREACIÓN DEL MODELO
// mongoose.model("el nombre del modelo en singular", schema de arriba, "nombre de la colección")
const Equipo = mongoose.model("equipo", equipoSchema, "equipos")

// 4. EXPORTACIÓN
module.exports = { Equipo }