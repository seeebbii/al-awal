const ProductCategory=require('../models/categoryModel')


//add multiple categories
const Category=require('../models/categoryModel')

//get product categories

const getProductCategory=async (req,res)=>{
  try {
    const catData=await Category.find()
    if(!catData){
      res.status(400).json({message:"No product categories found"})
      return;
    }
    
    res.status(200).json(catData)

  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

module.exports={
    getProductCategory,
}
