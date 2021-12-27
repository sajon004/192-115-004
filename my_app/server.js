const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

dotenv.config({path:'config.env'})
const port  = process.env.port||8080

//log_requests
app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send("Library Management System");
})

app.listen(port,()=>{console.log(`Server is running on http://localhost:${port}`)});