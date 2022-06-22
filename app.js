const express = require('express')
const { join } = require('path')
const { get } = require('http');

const app = express()

app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

//Database

require('./db') // Default index.js file loading ahorro lexico 

//Model

const Product = require('./models/Product.model')

// Add the route handlers here:

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/product', (req, res) => {
    Product
        .find()
        .select({ title: 1, price: 1, description: 1 })
        .sort({ price: 1 })
        .then(products => {
            res.render('product', { products })
        }).catch(err => console.log(err))
});


app.listen(3000, console.log('SERVER RUNNING ON PORT 3000'))