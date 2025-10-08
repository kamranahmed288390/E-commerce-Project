import User from "../model/userModel.js"
import validator from "validator"
import bcrypt from "bcryptjs"
import { genToken } from "../config/token.js";


export const registration = async (req,res) => {
    try {
        const {name, email,password} = req.body;
        const existuser = await User.findOne({email})
        if(existuser){
            return res.status(400).json({message:"User already exist"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Enter valid Email"})
        }
        if(password.length < 8){
            return res.status(400).json({message:"Enter Strong Password"})

        }
        let hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({name,email,password:hashPassword})
        let token = await genToken(user.id)
        res.cookie("token",token,{
            httpOnly: true,
            secure: false,
            sameSite:"Strict",
            maxAge: 7 * 24 * 60 * 1000
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log("sinUp error")
        return res.status(500).json({message:`Register error ${error}`})
        
    }
}

export const login =  async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}