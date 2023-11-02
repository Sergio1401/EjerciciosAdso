const express = require("express")
const InventarioController = require("../controllers/inventario.controller")
const md_auth = require("../middlewares/authenticated")

const api = express.Router()

api.get("/inventario", [md_auth.asureAuth], InventarioController.getInventario)
api.post("/inventario", [md_auth.asureAuth], InventarioController.createInventario)
api.delete("/inventario/:id", [md_auth.asureAuth], InventarioController.deleteInventario)
api.patch("/inventario/:id", [md_auth.asureAuth], InventarioController.updateInventario)

module.exports = api