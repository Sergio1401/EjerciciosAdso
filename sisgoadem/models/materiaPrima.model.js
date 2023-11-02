const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const MateriaSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio_unitario: String,
    cantidad_insumo: Number,
    categoria: String,
    imagen: String,
})

MateriaSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Materia", MateriaSchema)