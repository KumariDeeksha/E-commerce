const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('./src/db/mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/errorhandler');


app.use(cors());
app.options('*', cors())

app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);


const categoriesRoutes = require('./src/routes/categories');
const productsRoutes = require('./src/routes/products');
const usersRoutes = require('./src/routes/users');
const ordersRoutes = require('./src/routes/orders');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);


app.listen(7000, ()=>{

    console.log('server is running http://localhost:7000');
})



