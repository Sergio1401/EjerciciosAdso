const Facturacion = require("../models/facturacion.model")


async function getFacturacion(req, res){

    const {page = 1, limit = 10 } = req.query

    const options = {
        page:parseInt(page),
        limit: parseInt(limit),
    }


    Facturacion.paginate({}, options, (error, facturacions) =>{
        if(error) {
            res.status(400).send({msg: "Error al obtener la facturacion"})
        } else {
            res.status(200).send(facturacions)
        }
    })
}
async function createFacturacion(req, res){
    const facturacion = new Facturacion(req.body)

    facturacion.save((error, facturacionStored) => {
        if(error){
            res.status(400).send({msg: "Error al crear la facturacion"})
        } else {
            res.status(201).send(facturacionStored)
        }
    })
}

async function updateFacturacion(req, res){
    const { id } = req.params
    const facturacionData = req.body

    Facturacion.findByIdAndUpdate({ _id: id}, facturacionData, (error) => {
        if (error) { 
            res.status(400).send({msg: "Error al actualizar la facturacion"})
        } else {
            res.status(200).send({msg: "Actualizacion Correcta"})
        }
    })
}

function deleteFacturacion(req, res){
    const { id } = req.params

    Facturacion.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar la facturacion"})
        } else {
            res.status(200).send({msg: "Facturacion Eliminados"})
        }
    })
}

module.exports = {
    getFacturacion,
    createFacturacion,
    updateFacturacion,
    deleteFacturacion
}