import User from "../Models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";



const auth= async (req,res,next)=>{
    // console.log(req.body);
    // req is data we are getting from client side
// res is data we are sending to client side
try{
    const {username,email,password}=req.body;
    const hashPassword= bcryptjs.hashSync(password,10);
    const newUser= new User({username,email,password:hashPassword});
    await newUser.save()
    res.status(200).json({message:"successfully created user"})
    
}catch(error){
    next(error)
}

}
 export default auth;
