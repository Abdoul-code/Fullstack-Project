const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))
app.use("/security",require("./routes/securityRouter.js"))
//connect to DB
mongoose.connect('mongodb://localhost:27017/securitydb',
()=>console.log("connect to Sitra-Force-Security DB"))




app.listen(9000,()=>{
    console.log("The server is running on port 9000")
})