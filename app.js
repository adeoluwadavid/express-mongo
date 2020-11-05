const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const sampleRoute = require('./routes/sampleRoute')

 const db = 'mongodb+srv://netninja:test1234@cluster0.krott.mongodb.net/react_express?retryWrites=true&w=majority'
 const PORT = 5000 || process.env.PORT 
 
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(bodyParser.json())
 
 mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(result => app.listen(PORT, ()=> console.log(`The server is running at ${PORT}`)))
    .catch(err => console.log(err))


app.use('/api', sampleRoute)

