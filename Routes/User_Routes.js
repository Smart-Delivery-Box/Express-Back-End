const express = require('express')
const connection = require('../Connection/connection')
const router = express.Router()

router.get('/users', (req, res) => {
    connection.query('SELECT * FROM Customers', (err, result) => {
        console.log(result)
        res.json(result)
    })
})

module.exports = router