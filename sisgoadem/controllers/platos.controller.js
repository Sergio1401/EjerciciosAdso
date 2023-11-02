const Platos = require("../models/platos.model")
const image = require("../utils/image")

async function createPlatos(req, res){

    const platos = new Platos(req.body)

    if (req.files.platos){
        const imagePath = image.getFilePath(req.files.platos)
        platos.platos = imagePath
    }

    platos.save((error, platosStored) => {
        if (error) {
            res.status(400).send({msg: "Se ha creado correctamente la materia prima"})
        } else {
            res.status(200).send(platosStored)
        }
    })
}

async function getPlatos(req, res){

    const { page = 1, limit = 10} = req.body

    const options = {
        page: parseInt(page),
        limit: parseInt(limit)
    }

    Platos.paginate({}, options, (error, platos) => {
        if (error) {
            res.status(400).send({msg: "No se han encontrado los platos"})
        } else {
            res.status(200).send(platos)
        }
    })
}

async function deletePlatos(req, res){

    const { id } = req.params

    Platos.findByIdAndDelete(id, (error) => {
        if(error){
            res.status(200).send({msg: "No se ha podido eliminar el plato"})
        } else {
            res.status(400).send({msg: "Se ha eliminado correctamente"})
        }
    })
}

async function updatePlatos(req, res){
    const { id } = req.params
    const platosData = req.body

    if(req.files.platos) {
        const imagePath = image.getFilePath(req.files.platos)
        platosData.platos = imagePath
    }

    Platos.findByIdAndUpdate({ _id: id }, platosData, (error) => {
        if(error) {
            res.status(400).send({msg: "No se han podido actualizar el plato"})
        } else {
            res.status(200).send({msg: "Se han actualizado correctamente los datos"})
        }
    })
}

module.exports = {
    createPlatos,
    getPlatos,
    deletePlatos,
    updatePlatos
}