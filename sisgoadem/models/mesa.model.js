const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const MesaSchema = mongoose.Schema({
    numero_mesa: {
        type:Number,
        required:true
    },
    capacidad: Number,
    estado:String,
    Zona:String
})

MesaSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Mesa", MesaSchema)