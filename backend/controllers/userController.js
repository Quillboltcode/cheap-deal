import validator from 'validator'
import userModel from '../models/userModel.js'

// api register
const userRegister = async (req, res) => {
    try {
        const { name, email, phone, password, address, dob, gender } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Missing Field!" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Email Invalid" })
        }

        const isUser = await userModel.findOne({ email })

        if (isUser) {
            return res.status(400).json({ success: false, message: "User Already Exist" })
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long." })
        }

        const userData = {
            name: name,
            email: email,
            password: password,
        }

        const newUser = userModel(userData)

        await newUser.save()

        return res.status(200).json({
            success: true,
            message: "Register Successfully",
            newUser
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api login
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Missing Field" })
        }

        const isUser = await userModel.findOne({ email })

        if (!isUser) {
            return res.status(400).json({ success: false, message: "User Not Found" })
        }

        if (password != isUser.password) {
            return res.status(400).json({ success: false, message: "Wrong Password!" })
        }

        return res.status(200).json({
            success: true,
            message: "Register Successfully",
            isUser,
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// api get profile user
const getProfile = async (req, res) => {
    try {
        const { userId } = req.body

        const user = await userModel.findOne({ userId })

        return res.status(200).json({ success: true, user })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

export { userRegister, login, getProfile }