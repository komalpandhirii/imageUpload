module.exports = {
        createproduct (req) {
        
        let data = {}

        data["productName"] = req.body.productName,
        data["productDescription"]= req.body.productDescription,
        data["productPrice"] = req.body.productPrice,
        data["productImg"] = req.files.productImg,
        data["status"] = req.body.status

        return data;
        
    }
}