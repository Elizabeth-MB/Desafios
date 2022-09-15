const express = require('express')

const router = express.Router()

const Contenedor = require('../Contenedor')
const contenedor = new Contenedor()

router.get('/', (req, res) => {
    res.render('get-products', {
        products: contenedor.getAll()
    })
})

router.post('/', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'Los datos son necesarios'})
    contenedor.create(req.body)
    res.redirect('/')
})

module.exports = router