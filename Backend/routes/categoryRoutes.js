const express=require('express');
const { getProductCategory } = require('../controller/categoryController');

const router=express.Router();

 router.get('/',getProductCategory)

module.exports=router;