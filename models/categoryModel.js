const  mongoose=require("mongoose");

const categorySchema=mongoose.Schema({
categoryName:{
    type:String,
    required:true
},
categoryImage:{
    type:String,
    required:true
}
},{
    timestamps:true,
})

const Category=mongoose.model('productcategory',categorySchema)

module.exports=Category;