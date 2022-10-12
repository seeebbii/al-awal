const  mongoose=require("mongoose");

const productDetailSchema=mongoose.Schema({
    category:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "productcategory",
    },

    productName:{
        type:String,
        required:true
    },
    mainImage:[
      {
        type:String,
        required:true
      }
    ],
    genericDetails:[
        {
            type:Object,
            required:true,
        }
    ]
    ,
    topologies:[
        {
            type:Object,
        }
    ],
    liveExamples:[
       { type:Object,
        required:true,}
    ]

},{
    timestamps:true
})

const ProductDetails=mongoose.model('productdetails',productDetailSchema)

module.exports=ProductDetails