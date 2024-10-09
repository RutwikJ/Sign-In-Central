import User from "../Models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const signUpAuth= async (req,res,next)=>{
    // console.log(req.body);
    // req is data we are getting from client side
// res is data we are sending to client side

    const {username,email,password}=req.body;
    const hashPassword= bcryptjs.hashSync(password,10);
    const newUser= new User({username,email,password:hashPassword});
try{
    await newUser.save()
    res.status(200).json({message:"successfully created user"})
    
}catch(error){
    next(error)
}

}

export const signInAuth= async (req,res,next)=>{
    try {
        const {email,password}=req.body;
        const validUser= await User.findOne({email})
        if(!validUser){
            return next(errorHandler(401,'Invalid User'));
        }
        const validPassword= bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(401,'Invalid credentials'));
        }
        const jwtToken= jwt.sign({id:validUser._id}, process.env.JWT_SECRET);
        const{password:hashPassword,...rest}=validUser._doc;
        res.cookie('access_token',jwtToken,{httpOnly:true,maxAge:3600000}).status(200).json(rest);
        
                

        
    } catch (error) {
        next(error)
    }
}
 
