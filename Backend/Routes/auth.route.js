import express from 'express'
import authRouter from '../Controllers/auth.controller.js'


const router= express.Router()


router.post('/signup',authRouter) 


export default router;