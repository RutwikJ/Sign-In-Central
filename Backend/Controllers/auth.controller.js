import User from "../Models/user.model.js";
import bcryptjs from 'bcryptjs';
const auth= async (req,res)=>{
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
    res.status(500).json(error.message)
}

}
 export default auth;
