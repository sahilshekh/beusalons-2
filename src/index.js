   const express = require("express")
   const app =express()

   app.use(express.json())
  const ProductController = require("./controller/ProductController")
  app.use("/product",ProductController)

   const connect =require("./config/db")

   app.listen(5500,async ()=>{
       try {
          await connect()
          console.log("listning on port 5500")
       } catch (error) {
          console.log("error",error.message)
       }
   })
