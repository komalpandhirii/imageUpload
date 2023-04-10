const express = require('express');
const config = require('./connection/connection.js');
const productRouter = require('./router/product.router');
const file_upload = require('express-fileupload');
 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(file_upload({
    useTempFiles:true
}));

app.use(bodyParser.json());

const PORT = process.env.PORT || 6000

app.listen(PORT,() =>{
    console.log('Server running on PORT '+PORT);
})

app.use('/product',productRouter);