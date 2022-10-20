const express = require('express')
const connection = require('../Connection/connection')
const router = express.Router()

router.get('/', (req, res) => {
    connection.query('SELECT * FROM Customers', (err, result) => {
        console.log(result)
        res.json(result)
    })
})

router.get('/paymentMethods/:firstName', (req, res) => {
    connection.query(`SELECT Customer_Number FROM Customers WHERE First_Name = '${req.params.firstName}'`, (err, result) => {
        if (err) throw err;
        const customerNumber = result[0].Customer_Number
        connection.query(`SELECT * FROM Customer_Card_Info WHERE Customer_Number = ${customerNumber}`, (err, card) => {
            if (err) throw err;
            console.log(card)
            res.json(card)
        })
    })
})

module.exports = router