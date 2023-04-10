const express = require('express');
const product = require('../controller/product.controller');

const router = express.Router();

router.get('/getproduct',product.getproduct);
router.post('/addproduct',product.addproduct);
router.post('/multipleImages',product.multiImages);

module.exports = router;