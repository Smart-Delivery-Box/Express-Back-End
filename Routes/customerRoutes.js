const express = require('express')
const connection = require('../Connection/connection')
const customerQueries = require('../Queries/customerQueries')
const router = express.Router()

router.get('/', (req, res) => {
    connection.query('SELECT * FROM Customers', (err, result) => {
        console.log(result)
        res.json(result)
    })
})

router.get('/payment-methods/name/:firstName', (req, res) => {
    customerQueries.findPaymentMethodsByFirstName(req.params.firstName, (err, data) => {
        if (err) throw err;
        else
            res.json(data)
    })
})

router.get('/payment-methods/number/:customerNumber', (req, res) => {
    customerQueries.findPaymentMethodsByCustomerNumber(req.params.customerNumber, (err, data) => {
        if (err) throw err;
        else
            res.json(data)
    })
})

module.exports = router