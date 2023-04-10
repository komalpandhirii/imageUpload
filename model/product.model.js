const knex = require('../connection/connection');
// const file_upload = require('express-fileupload');
const formattedData = require('../formatter/product.formatter');

const getproductModel = async (req) =>{
   return await knex.select('*')
  .from('product')
}

const addProductModel = async (formData) =>{
       const productModel =  knex('product')
        .insert({
            productName : formData.productName,
            productDescription : formData.productDescription,
            productPrice : formData.productPrice,
            productImg : formData.productImg.name,
            status : formData.status
           })

  return await productModel;
}


module.exports = {getproductModel, addProductModel };