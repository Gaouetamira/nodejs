const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

//EJS configuration
app.set('view engine','ejs');
app.set('views', __dirname +'/views')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/contact', (req, res) => {
  res.send('contact page')
})

app.get('/about', (req, res) => {
  res.send('about page here')
})


app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
})