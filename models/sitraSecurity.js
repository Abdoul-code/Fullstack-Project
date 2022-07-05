const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OfficerSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        requird:true
    },
    status:{
        type:String,
        required:true
    },
    contact:Number,
    Email:String
})

module.exports = mongoose.model("Officer", OfficerSchema)