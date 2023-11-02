const Caja = require("../models/caja.model")


async function getCaja(req, res){

    const {page = 1, limit = 10 } = req.query

    const options = {
        page:parseInt(page),
        limit: parseInt(limit),
    }


    Caja.paginate({}, options, (error, cajas) =>{
        if(error) {
            res.status(400).send({msg: "Error al obtener la caja"})
        } else {
            res.status(200).send(cajas)
        }
    })
}
async function createCaja(req, res){
    const caja = new Caja(req.body)

    caja.save((error, cajaStored) => {
        if(error){
            res.status(400).send({msg: "Error al crear la caja"})
        } else {
            res.status(201).send(cajaStored)
        }
    })
}

async function updateCaja(req, res){
    const { id } = req.params
    const cajaData = req.body

    Caja.findByIdAndUpdate({ _id: id}, cajaData, (error) => {
        if (error) { 
            res.status(400).send({msg: "Error al actualizar la caja"})
        } else {
            res.status(200).send({msg: "Actualizacion Correcta"})
        }
    })
}

function deleteCaja(req, res){
    const { id } = req.params

    Caja.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar la caja"})
        } else {
            res.status(200).send({msg: "Caja Eliminada"})
        }
    })
}

module.exports = {
    getCaja,
    createCaja,
    updateCaja,
    deleteCaja
}