const Proveedores = require("../models/proveedores.model")

async function createProveedores(req, res){
    
    const proveedores = new Proveedores(req.body)
    proveedores.save((error, proveedoresStored) => {
        if (error) {
            res.status(400).send({msg: "No se insertaron los datos"})
        } else {
            res.status(200).send(proveedoresStored)
        }
    })
}

function getProveedores(req, res) {
    
    const { page = 1, limit = 10 } = req.query

    const options = {
        page: parseInt(page),
        limit: parseInt(limit)
    }

    Proveedores.paginate({}, options, (error, proveedoresStored) => {
        if(error){
            res.status(400).send({msg: "Proveedor actualizado"})
        } else {
            res.status(200).send(proveedoresStored)
        }
    })
}

function deleteProveedores(req, res){
    const { id } = req.params

    Proveedores.findByIdAndDelete(id, (error) => {
        if(error){
            res.status(400).send({msg: "El provedor no ha sido eliminado"})
        } else {
            res.status(200).send({msg: "Se ha eliminado correctamente"})
        }
    })
}

function updateProveedores (req, res){
    const { id } = req.params
    const proveedoresDate = req.body

    Proveedores.findByIdAndUpdate({ _id: id }, proveedoresDate, (error) => {
        if(error){
            res.status(400).send({msg: "Los datos no se han actualizado"})
        } else {
            res.status(200).send({msg: "los datos se han actualizado correctamente"})
        }
    })
}
module.exports = {
    createProveedores,
    getProveedores,
    deleteProveedores,
    updateProveedores,
}

