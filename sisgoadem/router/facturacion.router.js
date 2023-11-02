const express = require("express")
const FacturacionController = require("../controllers/facturacion.controller")
const md_auth = require("../middlewares/authenticated")


const api = express.Router()

api.get("/facturacion", FacturacionController.getFacturacion)
api.post("/facturacion", [md_auth.asureAuth], FacturacionController.createFacturacion)
api.patch("/facturacion/:id", [md_auth.asureAuth], FacturacionController.updateFacturacion)
api.delete("/facturacion/:id", [md_auth.asureAuth], FacturacionController.deleteFacturacion)


module.exports = api