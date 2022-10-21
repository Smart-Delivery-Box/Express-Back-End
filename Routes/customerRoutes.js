const express = require('express')
const connection = require('../Connection/connection')
const findPaymentMethodsByFirstName = require('../Queries/customerQueries')
const router = express.Router()

router.get('/', (req, res) => {
    connection.query('SELECT * FROM Customers', (err, result) => {
        console.log(result)
        res.json(result)
    })
})

router.get('/payment-methods/:firstName', (req, res) => {
    // const firstName = req.params.firstName
    // connection.query(`SELECT Customer_Number FROM Customers WHERE First_Name = '${firstName}'`, (err, result) => {
    //     if (err) throw err;
    //     const customerNumber = result[0].Customer_Number
    //     connection.query(`SELECT * FROM Customer_Card_Info WHERE Customer_Number = ${customerNumber}`, (err, card) => {
    //         if (err) throw err;
    //         res.json(card)
    //         // paymentMethods = card
    //     })
    // })
    findPaymentMethodsByFirstName(req.params.firstName, (err, data) => {
        if (err) throw err;
        else
            res.json(data)
    })
})

module.exports = router