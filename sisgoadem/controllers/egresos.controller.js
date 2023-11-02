const Egresos = require("../models/egresos.model")


async function getEgresos(req, res){

    const {page = 1, limit = 10 } = req.query

    const options = {
        page:parseInt(page),
        limit: parseInt(limit),
    }


    Egresos.paginate({}, options, (error, egresoss) =>{
        if(error) {
            res.status(400).send({msg: "Error al obtener los egresos"})
        } else {
            res.status(200).send(egresoss)
        }
    })
}
async function createEgresos(req, res){
    const egresos = new Egresos(req.body)

    egresos.save((error, egresosStored) => {
        if(error){
            res.status(400).send({msg: "Error al crear los egresos"})
        } else {
            res.status(201).send(egresosStored)
        }
    })
}

async function updateEgresos(req, res){
    const { id } = req.params
    const egresosData = req.body

    Egresos.findByIdAndUpdate({ _id: id}, egresosData, (error) => {
        if (error) { 
            res.status(400).send({msg: "Error al actualizar los egresos"})
        } else {
            res.status(200).send({msg: "Actualizacion Correcta"})
        }
    })
}

function deleteEgresos(req, res){
    const { id } = req.params

    Egresos.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar los egresos"})
        } else {
            res.status(200).send({msg: "Egresos Eliminados"})
        }
    })
}

module.exports = {
    getEgresos,
    createEgresos,
    updateEgresos,
    deleteEgresos
}