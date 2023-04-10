const services = require('../model/product.model');

const fileupload = async (formData) =>{
    console.log(formData);
    const path = require('path')
    let filename = Date.now()+'_'+formData.productImg.name
    let newPath = path.join(process.cwd(),'Images',filename)
    formData.productImg.mv(newPath)

    const addproud = await services.addProductModel(formData);

    return addproud;
}

module.exports = fileupload;