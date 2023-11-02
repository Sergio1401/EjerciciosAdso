const Mesa = require("../models/mesa.model")


async function getMesa(req, res){

    const {page = 1, limit = 10 } = req.query

    const options = {
        page:parseInt(page),
        limit: parseInt(limit),
    }


    Mesa.paginate({}, options, (error, mesas) =>{
        if(error) {
            res.status(400).send({msg: "Error al obtener la mesa"})
        } else {
            res.status(200).send(mesas)
        }
    })
}
async function createMesa(req, res){
    const mesa = new Mesa(req.body)

    mesa.save((error, mesaStored) => {
        if(error){
            res.status(400).send({msg: "Error al crear la mesa"})
        } else {
            res.status(201).send(mesaStored)
        }
    })
}

async function updateMesa(req, res){
    const { id } = req.params
    const mesaData = req.body

    Mesa.findByIdAndUpdate({ _id: id}, mesaData, (error) => {
        if (error) { 
            res.status(400).send({msg: "Error al actualizar la mesa"})
        } else {
            res.status(200).send({msg: "Actualizacion Correcta"})
        }
    })
}

function deleteMesa(req, res){
    const { id } = req.params

    Mesa.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar la mesa"})
        } else {
            res.status(200).send({msg: "Mesa Eliminada"})
        }
    })
}

module.exports = {
    getMesa,
    createMesa,
    updateMesa,
    deleteMesa
}