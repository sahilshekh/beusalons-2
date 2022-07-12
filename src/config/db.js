
const mongoose = require("mongoose")
module.exports =()=>{
  return mongoose.connect("mongodb+srv://sahil055:sahil055@cluster0.6gvku.mongodb.net/test")
}