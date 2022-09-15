const express = require('express')

const router = express.Router()

const Contenedor = require('../Contenedor')
const contenedor = new Contenedor()

router.get('/', (req, res) => {
    let result = contenedor.getAll()
    res.send(result)
})

router.get('/:id', (req, res) => {
    let result = contenedor.getById(req.params.id)
    if (!result) return res.send({error: 'Producto no encontrado'})
    res.send(result)
})

router.post('/', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'Los datos son necesarios'})
    let result = contenedor.create(req.body)
    res.send(result)
})

router.put('/:id', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'Los datos son necesarios'})
    let result = contenedor.update(req.params.id, req.body)
    if (!result) return res.send({error: 'Producto no encontrado'})
    res.send(result)
})

router.delete('/:id', (req, res) => {
    let result = contenedor.delete(req.params.id)
    res.send(result)
})

module.exports = router