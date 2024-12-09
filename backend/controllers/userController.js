import validator from 'validator'
import userModel from '../models/userModel.js'
import { v2 as cloudinary } from 'cloudinary'
import submitModel from '../models/submitModel.js'

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

// api edit profile user 
const editProfile = async (req, res) => {
    try {
        const { id, name, address, gender, dob, phone } = req.body;
        const image = req?.file;

        // Validate input
        if (!id) {
            return res.status(400).json({ success: false, message: "User ID is required." });
        }
        if (!name) {
            return res.status(400).json({ success: false, message: "Name is required." });
        }

        // Find the user
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Update user fields
        user.name = name;
        if (address) user.address = address;
        if (gender) user.gender = gender;
        if (dob) user.dob = dob;
        if (phone) user.phone = phone;

        // Handle image upload
        if (image) {
            const imageUpload = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
            user.image = imageUpload.secure_url;
        }

        // Save the updated user
        await user.save();

        res.status(200).json({ success: true, message: "Profile updated successfully.", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}


// api add submit 
const addSubmit = async (req, res) => {
    try {
        const { type, text } = req.body;
        const image = req.file; // Assuming file is uploaded as `file` field

        // Validate required fields
        if (!type || !text) {
            return res.status(400).json({ success: false, message: "Type and text are required." });
        }

        let imageUrl = null;

        // Handle image upload if provided
        if (image) {
            const uploadResult = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
            imageUrl = uploadResult.secure_url;
        }

        // Create a new submission
        const newSubmit = new submitModel({ type, text, image: imageUrl });

        // Save the submission to the database
        await newSubmit.save();

        res.status(201).json({ success: true, message: "Submission created successfully.", data: newSubmit });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const getSubmit = async (req, res) => {
    try {
        const { id } = req.body;

        let submissions;

        // Check if an ID is provided
        if (id) {
            submissions = await submitModel.findById(id);

            if (!submissions) {
                return res.status(404).json({ success: false, message: "Submission not found." });
            }
        } else {
            // If no ID is provided, fetch all submissions
            submissions = await submitModel.find();

            if (!submissions || submissions.length === 0) {
                return res.status(404).json({ success: false, message: "No submissions found." });
            }
        }

        // Return the submission(s)
        res.status(200).json({ success: true, data: submissions });
    } catch (error) {
        // Handle unexpected errors
        console.error(error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
};

export { userRegister, login, getProfile, editProfile, addSubmit, getSubmit }