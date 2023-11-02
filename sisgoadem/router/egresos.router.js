const express = require("express")
const EgresosController = require("../controllers/egresos.controller")
const md_auth = require("../middlewares/authenticated")


const api = express.Router()

api.get("/egresos", EgresosController.getEgresos)
api.post("/egresos", [md_auth.asureAuth], EgresosController.createEgresos)
api.patch("/egresos/:id", [md_auth.asureAuth], EgresosController.updateEgresos)
api.delete("/egresos/:id", [md_auth.asureAuth], EgresosController.deleteEgresos)


module.exports = api