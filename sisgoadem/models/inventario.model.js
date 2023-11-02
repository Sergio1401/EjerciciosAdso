const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const InventarioSchema = mongoose.Schema({
    nombre: String,
    cantidad_en_stock: Number,
    fecha_reposicion: Number
})

InventarioSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Inventario", InventarioSchema)