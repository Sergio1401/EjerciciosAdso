const express = require("express")
const ProveedoresController = require("../controllers/proveedores.controller")
const md_auth = require("../middlewares/authenticated") 

const api = express.Router()

api.post("/proveedores", [md_auth.asureAuth], ProveedoresController.createProveedores)
api.get("/proveedores", [md_auth.asureAuth], ProveedoresController.getProveedores)
api.delete("/proveedores/:id", [md_auth.asureAuth], ProveedoresController.deleteProveedores)
api.patch("/proveedores/:id", [md_auth.asureAuth], ProveedoresController.updateProveedores)

module.exports = api