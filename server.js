// import express and cors
const express = require('express');  // commonJS module
const cors = require('cors');

const app = express();

var corOptions = {
    origin: 'https://localhost:8081'
};

// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//* router
const router = require('./routes/productRouter.js')
app.use('/api/products', router)

// testing api
app.get('/', (req, res)=>{
    res.json({message: 'Lone wolf is hunting...'})
})

// port

 const PORT = process.env.PORT || 8080

// server

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})



