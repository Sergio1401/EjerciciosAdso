const express = require("express")
const MesaController = require("../controllers/mesa.controller")
const md_auth = require("../middlewares/authenticated")


const api = express.Router()

api.get("/mesa", MesaController.getMesa)
api.post("/mesa", [md_auth.asureAuth], MesaController.createMesa)
api.patch("/mesa/:id", [md_auth.asureAuth], MesaController.updateMesa)
api.delete("/mesa/:id", [md_auth.asureAuth], MesaController.deleteMesa)


module.exports = api