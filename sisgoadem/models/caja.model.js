const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const CajaSchema = mongoose.Schema({
    base_caja: String,
    numero_mesa: Number,
    cajera:String,
    total_caja:String,
    fecha_hora_apertura:String,
    fecha_hora_cierre: String,
    ventas_totales:String
})

CajaSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Caja", CajaSchema)