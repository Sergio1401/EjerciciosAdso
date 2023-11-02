const express = require("express")
const multiparty = require("connect-multiparty")    
const PlatosController = require("../controllers/platos.controller")
const md_auth = require("../middlewares/authenticated")
const md_upload = multiparty({ uploadDir: "./uploads/platos"})

const api = express.Router()

api.post("/platos", [md_auth.asureAuth, md_upload], PlatosController.createPlatos)
api.get("/platos", [md_auth.asureAuth], PlatosController.getPlatos)
api.delete("/platos/:id", [md_auth.asureAuth], PlatosController.deletePlatos)
api.patch("/platos/:id", [md_auth.asureAuth, md_upload], PlatosController.updatePlatos)

module.exports = api