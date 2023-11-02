const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const TransaccionesSchema = mongoose.Schema({
    fecha_transaccion: String,
    hora_transaccion: String,
    tipo_transaccion: String,
    descripcion_transaccion: String,
    nombre_cuenta: String,
    tipo_cuenta: String,
    saldo_actual: String,
    monto_ingreso: String
})

TransaccionesSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Transacciones", TransaccionesSchema)