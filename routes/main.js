const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = req.context
    
    res.render('home', data)
})

router.get('/produk', (req, res, next) => {
    const data = req.context

    res.render('product', data)
})

router.get('/kontak', (req, res, next) => {
    const data = req.context

    res.render('contact', data)
})

module.exports = router