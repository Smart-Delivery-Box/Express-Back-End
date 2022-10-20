const express = require('express')
const connection = require('./Routes/User_Routes')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     connection.query('SELECT * FROM Smart_Boxes', (err, result, fields) => {
//         if (err) throw err;
//         console.log(result)
//         res.json(result)
//     })
// })

app.use('/', require('./Routes/User_Routes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// Supplies