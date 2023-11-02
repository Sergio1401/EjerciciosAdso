const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const { API_VERSION } = require("./constants")

const app = express()

//importacion de rutas 

const authRoutes = require("./router/auth.router.js") 
const userRoutes = require("./router/user.router.js")
const inventarioRoutes = require("./router/inventario.router")
const proveedoresRoutes = require("./router/proveedores.router")
const materiaRoutes = require("./router/materiaPrima.router")
const ventaRoutes = require("./router/venta.router")
const transaccionesRoutes = require("./router/transaccion.router")
const platosRoutes = require("./router/platos.router")
const cajaRoutes = require("./router/caja.router")
const egresosRoutes = require("./router/egresos.router")
const facturacionRoutes = require("./router/facturacion.router")
const mesaRoutes = require("./router/mesa.router")

//Configurar body Parse

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//Configurar carpeta static

app.use(express.static("uploads"))

//configurar header HTTP - CORS

app.use(cors())

//Configurar rutas

app.use(`/api/${API_VERSION}`, authRoutes)
app.use(`/api/${API_VERSION}`, userRoutes)
app.use(`/api/${API_VERSION}`, inventarioRoutes)
app.use(`/api/${API_VERSION}`, proveedoresRoutes)
app.use(`/api/${API_VERSION}`, materiaRoutes)
app.use(`/api/${API_VERSION}`, ventaRoutes)
app.use(`/api/${API_VERSION}`, transaccionesRoutes)
app.use(`/api/${API_VERSION}`, platosRoutes)
app.use(`/api/${API_VERSION}`, cajaRoutes)
app.use(`/api/${API_VERSION}`, egresosRoutes)
app.use(`/api/${API_VERSION}`, facturacionRoutes)
app.use(`/api/${API_VERSION}`, mesaRoutes)

module.exports = app


