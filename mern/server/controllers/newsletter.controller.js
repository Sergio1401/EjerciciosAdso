const Newsletter = require("../models/newsletter.model")

function suscribeEmail(req, res) {
    const { email } = req.body

    if (!email) res.status(400).send({msg: "Email Obligatorio"})

    const newsletter = new Newsletter({
        email: email.toLowerCase(),
    })

    newsletter.save((error) => {
        if (error) {
            res.status(400).send({msg: "El email ya esta registrado"})
        } else {
            res.status(200).send({msg: "El email se registro con exito"})
        }
    })
}

function getEmail(req, res) {
    const { page = 1, limit = 10 } =req.body

    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    }

    Newsletter.paginate({}, options, (error, emailsStored) => {
        if (error) {
            res.status(400).send({msg: "Error al obtener Emails"})
        } else {
            res.status(200).send(emailsStored)
        }
    })
}

function deleteEmail(req, res) {
    const { id } = req.params

    Newsletter.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar registro"})
        } else {
            res.status(200).send({msg: "Eliminacion Correcta"})
        }
    })
}

module.exports = {
    suscribeEmail,
    getEmail,
    deleteEmail,
}