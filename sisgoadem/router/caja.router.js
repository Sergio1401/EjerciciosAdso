const express = require("express")
const CajaController = require("../controllers/caja.controller")
const md_auth = require("../middlewares/authenticated")


const api = express.Router()

api.get("/caja", CajaController.getCaja)
api.post("/caja", [md_auth.asureAuth], CajaController.createCaja)
api.patch("/caja/:id", [md_auth.asureAuth], CajaController.updateCaja)
api.delete("/caja/:id", [md_auth.asureAuth], CajaController.deleteCaja)


module.exports = api