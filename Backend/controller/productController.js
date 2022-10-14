const ProductDetails=require('../models/productDetailModel')


const getProductDetails=async (req,res)=>{
    try {
      
      const proData=await ProductDetails.find({productName:req.body.id})
      if(!proData){
        res.status(400).json({message:"No product Details found"})
        return;
      }
    
      res.status(200).json(proData)
  
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }
  }

  module.exports={
    getProductDetails,
}