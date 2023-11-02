const Materia = require("../models/materiaPrima.model")
const image = require("../utils/image")

async function createMateria(req, res){
    
    const materia = new Materia(req.body)

    const imagePath = image.getFilePath (req.files.imagen)
    materia.imagen = imagePath

    materia.save((error, materiaStored) => {
        if (error) {
            res.status(400).send({msg: "Se ha creado correctamente la materia prima"})
        } else {
            res.status(200).send(materiaStored)
        }
    })
}

async function getMateria(req, res){
    
    const { page = 1, limit = 10 } = req.body

    const options = {
        page: parseInt(page),
        limit: parseInt(limit)
    }

    Materia.paginate({}, options, (error, materia) => {
        if (error) {
            res.status(400).send({msg: "Error al obtener la materia prima"})
        } else {
            res.status(200).send(materia)
        }
    })
}


async function deleteMateria(req, res){

    const { id } = req.params

    Materia.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar el producto"})
        } else {
            res.status(200).send({msg: "Producto eliminado"})
        }
    })
}

async function updateMateria(req, res) {

    const { id } = req.params
    const materiaData = req.body

    if(req.files.imagen) {
        const imagePath = image.getFilePath(req.files.imagen)
        materiaData.imagen = imagePath
    }

    Materia.findByIdAndUpdate({ _id: id }, materiaData, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al actualizar el producto"})
        } else {
            res.status(200).send({msg: "El producto ha sido actualizado correctamente"})
        }
    })
}

module.exports = {
    createMateria,
    getMateria,
    deleteMateria,
    updateMateria
}