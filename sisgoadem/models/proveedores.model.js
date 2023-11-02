const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const ProveedoresSchema = mongoose.Schema({
    nombre: String,
    contacto: Number,
    empresa: String,
    correo: String,
    total_productos: Number,
    productos_inventario: String,
    historial_compras: Number
})

ProveedoresSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Proveedores", ProveedoresSchema)