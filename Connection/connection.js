const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cesar10ld*',
  database: 'Smart_Delivery_Box'
})

connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log('Connected to database')
})

module.exports = connection



// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })


