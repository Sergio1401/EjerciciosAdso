const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const FacturacionSchema = mongoose.Schema({
    hora: String,
    fecha: Date,
    platos: String,
    bebidas: String,
    cantidad_platos:String,
    valor_unitario: String,
    valor_total: String,
    fecha_pedido: Date,
    hora_solicitud: String,
    estado_pedido: String,
    notas_adicionales: String
})

FacturacionSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Facturacion", FacturacionSchema)