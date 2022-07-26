

   const express =require("express");
   const router = express.Router();
   const Products =require("../model/ProductModel");

   router.post("",async function(req,res){
   try {
    const data =await Products.create(req.body)
     return res.status(201).send(data)
   } catch (error) {
    return res.status(501).send(error.message)
   }
   })
   router.get("",async function(req,res){
     try {
        const product = await Products.find().lean().exec()
        return res.status(201).send(product)
     } catch (error) {
        return res.status(501).send(error.message)
     }
   })
   router.delete("/:id",async function(req,res){
      try {
          const product =await Products.findByIdAndDelete(req.params.id).lean().exec()
             return res.status(201).send(product)
        } catch (error) {
           return res.status(201).send(error.message)
      }
   })
   router.patch("/:id",async function(req,res){
      try {
          const product =await Products.findByIdAndUpdate(req.params.id,req.body)
             return res.status(201).send(product)
        } catch (error) {
           return res.status(201).send(error.message)
      }
   })

 module.exports =router