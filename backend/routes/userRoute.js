import express from 'express'
import { editProfile, getProfile, login, userRegister } from '../controllers/userController.js'
import upload from '../middleware/multer.js'

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', login)
userRouter.get('/profile', getProfile)
userRouter.put('/edit-profile', upload.single('image'), editProfile)

export default userRouter