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

//middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

//Routes
const categoriesRoutes = require('./src/routes/categories');
const productsRoutes = require('./src/routes/products');
const usersRoutes = require('./src/routes/users');
const ordersRoutes = require('./src/routes/orders');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);



//Server
app.listen(7000, ()=>{

    console.log('server is running http://localhost:7000');
})



// const express=require('express')
// const app=express();
// const mongoose=require('mongoose')
// require('./src/db/mongoose');
// //const bodyparser=require('body-parser');
// require('dotenv/config');
// const cors=require('cors')
// const morgan=require('morgan')
// app.use(cors());
// app.options('*',cors())

// const api=process.env.API_URL;
// const authJwt=require('./src/middleware/jwt')
// const errorhandler=require('./src/middleware/errorhandler')

// //middleware
// app.use(express.json());
// //app.use(bodyparser.json());
// app.use(morgan('tiny'));
// app.use(authJwt());
// app.use(errorhandler);



// const productRouter=require('./src/routes/products')
// const categoryRouter=require('./src/routes/categories')
// const usersRouter=require('./src/routes/users')
// const orderRouter=require('./src/routes/orders')



// app.use(`${api}/products`,productRouter);
// app.use(`${api}/categories`,categoryRouter)
// app.use(`${api}/users`,usersRouter)
// app.use(`${api}/orders`,orderRouter)



// app.listen(7000,()=>{
// console.log('listening on port:7000');
// })


