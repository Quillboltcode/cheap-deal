import express from 'express'
import { addSubmit, editProfile, getProfile, getSubmit, login, userRegister } from '../controllers/userController.js'
import upload from '../middleware/multer.js'

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', login)
userRouter.get('/profile', getProfile)
userRouter.put('/edit-profile', upload.single('image'), editProfile)
userRouter.post('/add-submit', upload.single('image'), addSubmit)
userRouter.get('/get-submit', getSubmit)

export default userRouter