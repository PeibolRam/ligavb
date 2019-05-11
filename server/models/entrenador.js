// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA / ESQUEMA
const entrenadorSchema = mongoose.Schema({
    idEntrenador: {
        type: String
    },
    nombre: {
        type: String
    },
    idEquipo: {
        type: String
    }
})

// 3. CREACIÓN DEL MODELO
// mongoose.model("el nombre del modelo en singular", schema de arriba, "nombre de la colección")
const Entrenador = mongoose.model("entrenador", entrenadorSchema, "entrenadores")

// 4. EXPORTACIÓN
module.exports = { Entrenador }