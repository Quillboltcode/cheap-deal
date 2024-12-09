import mongoose from 'mongoose'

const submitSchema = new mongoose.Schema({
    type: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String },
    userId: { type: String, required: true }
})

const submitModel = mongoose.models.submit || mongoose.model('submit', submitSchema)

export default submitModel

