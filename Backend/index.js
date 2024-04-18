const express = require('express');
const app = express();
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user')
const productsRoute = require('./routes/product')

app.use(express.json());

app.use('/' , homeRoute);
app.use('/user' , userRoute);
app.use('/product' , productsRoute);



app.listen(8000, () => {
    console.log('Server Started http://localhost:8000/');
})