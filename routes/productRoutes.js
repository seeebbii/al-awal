const express=require('express');
const { getProductDetails } = require('../controller/productController');

const router=express.Router();

 router.post('/',getProductDetails)

module.exports=router;


