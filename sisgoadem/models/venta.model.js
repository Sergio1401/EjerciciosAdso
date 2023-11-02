const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const VentaSchema = mongoose.Schema({
    codigo: Number,
    nombre_cliente: String,
    fecha_venta: String,
    nombre_cajero: String,
    metodo_pago: String,
    mesa: Number,
    resumen_venta: String,
    cantidad: Number,
    precio_unitario: String,
    total_venta:String
})

VentaSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Venta", VentaSchema)