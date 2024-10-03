import express from 'express'

import { signInAuth, signUpAuth } from '../Controllers/auth.controller.js';



const router= express.Router()


router.post('/signup',signUpAuth) 

router.post('/signin',signInAuth)

export default router;