import mongoose from 'mongoose'
import mangoose from 'mongoose'

const userSchema = new mangoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    cartData: {
        type: Object,
        default:{}
    }
},{timestamps:true, minimize:false})


const User = mongoose.model("User",userSchema)

export default User