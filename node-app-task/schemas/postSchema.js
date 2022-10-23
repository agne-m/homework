const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

const exportUser = mongoose.model("type11Posts", postSchema)

module.exports = exportUser