const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const EgresosSchema = mongoose.Schema({
    tipo_egresos: String,
    fecha: Date,
    monto: String,
    descripcion:String,
    fecha_reporte: Date,
    resumen_ingresos_totales: String,
    resumen_egresos_totales: String,
    ganancias_netas: String,
    otros_indicadores: String
})

EgresosSchema.plugin(mongoosePaginate)
module.exports = mongoose.model("Egresos", EgresosSchema)