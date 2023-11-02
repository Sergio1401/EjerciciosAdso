const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const PlatosSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: String,
    tipo: String,
    ingredientes: String,
    platos: String,
})

PlatosSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Platos", PlatosSchema)