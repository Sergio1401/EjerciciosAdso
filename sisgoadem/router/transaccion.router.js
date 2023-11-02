const express = require("express")
const TransaccionesController = require("../controllers/transacciones.controller")
const md_auth = require("../middlewares/authenticated")


const api = express.Router()

api.post("/transacciones", [md_auth.asureAuth], TransaccionesController.createTransacciones)
api.get("/transacciones", TransaccionesController.getTransacciones)
api.patch("/transacciones/:id", [md_auth.asureAuth], TransaccionesController.updateTransacciones)
api.delete("/transacciones/:id", [md_auth.asureAuth], TransaccionesController.deleteTransacciones)

module.exports = api