const connection = require('../Connection/connection')

const findPaymentMethodsByFirstName = (firstName, callback) => {
    console.log(firstName)
    let paymentMethods
    connection.query(`SELECT Customer_Number FROM Customers WHERE First_Name = '${firstName}'`, (err, result) => {
        const customerNumber = result[0].Customer_Number
        // console.log(err, customerNumber)
        connection.query(`SELECT * FROM Customer_Card_Info WHERE Customer_Number = ${customerNumber}`, (err, paymentMethods) => {
            if (err) 
                callback(err, null);
            else
                callback(null, paymentMethods);
        })
    })
}

module.exports = findPaymentMethodsByFirstName