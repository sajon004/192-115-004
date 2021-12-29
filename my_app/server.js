const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const port  = process.env.port||7593

//log_requests
app.use(morgan('tiny'));

//request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//routers
app.use('/',require('./server/routes/router'))

app.listen(port,()=>{console.log(`Server is running on http://localhost:${port}`)});