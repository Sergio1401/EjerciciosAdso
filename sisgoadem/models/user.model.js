const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim : true
    },
    apellidos: {
        type: String,
        required: true,
        trim : true
    },
    email: {
        type: String,
        unique: true,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    contacto: Number,
    role: String,
    active: Boolean,
    avatar: String,
})

module.exports = mongoose.model("User", UserSchema)