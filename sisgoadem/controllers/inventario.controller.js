const Inventario = require("../models/inventario.model")

async function createInventario(req, res){
    
    const inventario = new Inventario(req.body)
    
    inventario.save((error, inventarioStored) => {
        if(error) {
            res.status(200).send({msg: "Error al crear inventario"})
        } else {
            res.status(400).send(inventarioStored)
        }
    })
}

function getInventario(req, res){
    
    const { page = 1, limit = 10 } = req.body
    
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    }

    Inventario.paginate({}, options, (error, inventarioStored) => {
        if (error) {
            res.status(400).send({msg: "Error al obtener productos"})
        } else {
            res.status(200).send(inventarioStored)
        }
    })
}

function deleteInventario(req, res){

    const { id } = req.params

    Inventario.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "No se ha podido eliminar el producto"})
        } else {
            res.status(200).send({msg: "Se ha eliminado el producto"})
        }
    })
}

function updateInventario (req, res) {
    const { id } = req.params
    const inventarioData = req.body

    Inventario.findByIdAndUpdate({ _id: id }, inventarioData, (error) => {
        if (error) {
            res.status(400).send({msg: "Su producto no se ha actualizado"})
        } else {
            res.status(200).send({msg: "Se ha actualizado correctamente"})
        }
    })
}

module.exports = {
    createInventario,
    getInventario,
    deleteInventario,
    updateInventario
}

