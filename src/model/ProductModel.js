   


   const mongoose = require("mongoose")
   const ProductSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    operation:{
        type:String,
        required:true
    }

   })
   module.exports = mongoose.model("product",ProductSchema)