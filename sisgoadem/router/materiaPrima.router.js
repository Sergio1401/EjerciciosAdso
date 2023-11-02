const express = require("express")
const multiparty = require("connect-multiparty")    
const MateriaController = require("../controllers/materiaPrima.controller")
const md_auth = require("../middlewares/authenticated")
const md_upload = multiparty({ uploadDir: "./uploads/imagen"})

const api = express.Router()

api.post("/materia", [md_auth.asureAuth, md_upload], MateriaController.createMateria)
api.get("/materia", [md_auth.asureAuth], MateriaController.getMateria)
api.delete("/materia/:id", [md_auth.asureAuth], MateriaController.deleteMateria)
api.patch("/materia/:id", [md_auth.asureAuth, md_upload], MateriaController.updateMateria)

module.exports = api