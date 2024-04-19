const express = require('express');
const app = express();
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user')
const productsRoute = require('./routes/product')
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/' , homeRoute);
app.use('/user' , userRoute);
app.use('/product' , productsRoute);


app.listen(8000, () => {
    console.log('Server Started http://localhost:8000/');
})
app.get('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });