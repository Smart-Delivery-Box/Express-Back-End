const express = require('express')
const connection = require('../Connection/connection')
const router = express.Router()

router.get('/', (req, res) => {
    connection.query('SELECT * FROM Orders', (err, result) => {
        console.log(result)
        res.json(result)
    })
})

// router.get('/')

module.exports = router