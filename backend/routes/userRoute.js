import express from 'express'
import { getProfile, login, userRegister } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', login)
userRouter.get('/profile', getProfile)

export default userRouter