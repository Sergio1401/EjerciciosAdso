const Venta = require("../models/venta.model")

async function createVenta(req, res){
    const venta = new Venta(req.body)

    venta.save((error, ventaStored) => {
        if(error){
            res.status(400).send({msg: "No se pudo crear la venta"})
        } else {
            res.status(200).send(ventaStored)
        }
    })
}

async function getVenta(req, res){
    const { page = 1, limit = 10 } = req.query

    const options = {
        page: parseInt(page),
        limit: parseInt(limit)
    }

    Venta.paginate({}, options, (error, ventaStored) => {
        if(error){
            res.status(400).send({msg: "No se han podido encontrar los registros de ventas"})
        } else {
            res.status(200).send(ventaStored)
        }
    })
}

function deleteVenta(req, res){
    
    const { id } = req.params

    Venta.findByIdAndDelete(id, (error) => {
        if(error){
            res.status(400).send({msg: "No se ha podido eliminar el registro"})
        } else {
            res.status(200).send({msg: "Se ha eliminado correctamente"})
        }
    })
}

function updateVenta(req, res){
    const { id } = req.params
    const ventaData = req.body

    Venta.findByIdAndUpdate({ _id: id }, ventaData, (error) => {
        if(error){
            res.status(400).send({msg: "No se ha podido actualizar los datos"})
        } else {
            res.status(200).send({msg: "Los datos se han actualizado correctamente"})
        }
    })
}

module.exports = {
    createVenta,
    getVenta,
    deleteVenta,
    updateVenta
}