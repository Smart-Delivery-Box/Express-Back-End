const express = require('express')
const connection = require('./Routes/customerRoutes')
const app = express()
const port = 3000

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get('/', (req, res) => {
//     connection.query('SELECT * FROM Smart_Boxes', (err, result, fields) => {
//         if (err) throw err;
//         console.log(result)
//         res.json(result)
//     })
// })

app.use('/customers', require('./Routes/customerRoutes'))
app.use('/orders', require('./Routes/orderRoutes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// Supplies