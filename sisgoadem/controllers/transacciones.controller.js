const Transacciones = require("../models/transacciones.model")

async function getTransacciones(req, res){

    const {page = 1, limit = 10 } = req.query

    const options = {
        page:parseInt(page),
        limit: parseInt(limit),
    }

    Transacciones.paginate({}, options, (error, transaccioness) =>{
        if(error) {
            res.status(400).send({msg: "Error al obtener las transacciones"})
        } else {
            res.status(200).send(transaccioness)
        }
    })
}

async function createTransacciones(req, res){
    const transacciones = new Transacciones(req.body)

    transacciones.save((error, transaccionesStored) => {
        if(error){
            res.status(400).send({msg: "Error al crear la transaccion"})
        } else {
            res.status(201).send(transaccionesStored)
        }
    })
}

async function updateTransacciones(req, res){
    const { id } = req.params
    const transaccionesData = req.body

    Transacciones.findByIdAndUpdate({ _id: id}, transaccionesData, (error) => {
        if (error) { 
            res.status(400).send({msg: "Error al actualizar la transaccion"})
        } else {
            res.status(200).send({msg: "Actualizacion Correcta"})
        }
    })
}

function deleteTransacciones(req, res){
    const { id } = req.params

    Transacciones.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar la transaccion"})
        } else {
            res.status(200).send({msg: "Transaccion Eliminada"})
        }
    })
}

module.exports = {
    createTransacciones,
    getTransacciones,
    updateTransacciones,
    deleteTransacciones
}