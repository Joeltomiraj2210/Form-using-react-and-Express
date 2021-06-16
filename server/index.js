const express = require('express');
const sql = require('mysql');
const body = require('body-parser');
const cors = require('cors');



const app = express()



const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "joel7200",
    database: "sample",
});

app.use(cors());
app.use(body.urlencoded({ extended: true }))
app.use(express.json())



connection.connect((err) => {
    if (err) {
        console.log("connection Failed" + err)
    } else {
        console.log("connection successful")
    }
})

app.get('/display', (req, res) => {
    const value = "select * from value"
    connection.query(value, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/insert', (req, res) => {

    const user = req.body.user
    const email = req.body.email
    const age = req.body.age
    const date = req.body.date
    const location = req.body.location
    const language = req.body.language
    const gender = req.body.gender
    const sqlinsert = 'insert into value(name, email, age, date, location, language, gender)values(?,?,?,?,?,?,?)'
    connection.query(sqlinsert, [user, email, age, date, location, language, gender], (err, res) => {
        console.log(err)

    })
});


app.listen(3001, (err) => {
    if (err) {
        console.log('Something went Wrong')
    } else {
        console.log('Connection Successful')
    }
})