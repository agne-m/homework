const mongoose = require("mongoose")
const Schema = mongoose.Schema

const url = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F03%2F41%2Ff5%2F0341f51a7fa3b56784e7e9b960d4e083.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F753508581386446639%2F&tbnid=ZzI2VsY8STzfZM&vet=12ahUKEwiwzIif6fD6AhVk-SoKHbX5AOAQMygCegUIARC-AQ..i&docid=KL0tzKXcr_0OUM&w=736&h=726&q=smiley%20emoji&client=opera&ved=2ahUKEwiwzIif6fD6AhVk-SoKHbX5AOAQMygCegUIARC-AQ"

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // photo: {
    //     type: String,
    //     default: url
    // },
    secret: {
        type: String,
        required: true
    }
})

const exportUser = mongoose.model("user", userSchema)

module.exports = exportUser