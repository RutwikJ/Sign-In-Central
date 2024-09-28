import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js";
const app = express();
const port = 5000;
dotenv.config();
app.use(express.json())
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user",userRouter);

app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || 'Interval server Error'
  res.status(statusCode).json({
    success:false,
    message,
    statusCode
  })
})


app.listen(port, () => {
  console.log(`server is running on port ${port} !!!!`);
});
