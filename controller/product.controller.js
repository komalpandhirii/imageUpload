const productServices = require('../services/product.service');
const productFormat = require('../formatter/product.formatter');
const productModel = require('../model/product.model');
const expressFileupload = require('express-fileupload');
const knex = require('../connection/connection');

const getproduct = async (req,res) =>{
    const fetchedProduct = await productModel.getproductModel();
    res.send(fetchedProduct)
}

const addproduct = async (req,res) =>{
    let formData = productFormat.createproduct(req)
    const finalProduct =  await productServices(formData)
    res.send(finalProduct);
}

const multiImages = async (req,res) =>{
    if(req.files){
        let file = req.files.multiImg;
        console.log(file);
        for (let i = 0; i < file.length; i++) {
            file[i].mv(newPath+file[i].name, (err)=>{
                if(err){
                    res.send(err)
                }
            })

            await knex('productImage').insert({
                prodImgId : req.body.prodImgId,
                multiImg :req.body.multiImg
            })
            .from('productImage')
            .join('product', 'productImage.prodImgId', 'product.productId')
            .where('productImage.prodImgId', '=', 'product.productId')
        }
        res.send('file uploded')
    }
    else{
        res.send('not uploded')
    }
}

module.exports = {getproduct, addproduct , multiImages};

