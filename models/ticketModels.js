const mongoose = require("mongoose")


let ticketSchema= new mongoose.Schema({
  userId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        trim:true,
        ref:"user"
    },

  ticket:{
    type:[],
    require:true,
    _id:0,
    __v:0
  }
},{timeStamps:true})


module.exports= mongoose.model("ticket",ticketSchema)