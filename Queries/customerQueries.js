const connection = require('../Connection/connection')

const findPaymentMethodsByFirstName = (firstName, callback) => {
    console.log(firstName)
    connection.query(`SELECT Customer_Number FROM Customers WHERE First_Name = '${firstName}'`, (err, result) => {
        const customerNumber = result[0].Customer_Number
        connection.query(`SELECT * FROM Customer_Card_Info WHERE Customer_Number = ${customerNumber}`, (err, paymentMethods) => {
            if (err) 
                callback(err, null);
            else
                callback(null, paymentMethods);
        })
    })
}

const findPaymentMethodsByCustomerNumber = (customerNumber, callback) => {
    connection.query(`SELECT * FROM Customer_Card_Info WHERE Customer_Number = ${customerNumber}`, (err, paymentMethods) => {
        if (err)
            callback(err, null)
        else
            callback(null, paymentMethods)
    })
}

module.exports = {
    findPaymentMethodsByFirstName,
    findPaymentMethodsByCustomerNumber
}