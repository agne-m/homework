const express = require("express")
const router = express.Router()
const {emailValid, passwordsValid, userValid} = require("../midleware/middle")

const {
    register, 
    login, 
    addPost,
    findPost,
    deletePost
} = require("../controllers/mainController")


router.post("/register", emailValid, passwordsValid, userValid, register)
router.post("/login", login)
router.post("/addPost", addPost)
router.post("/find", findPost)
router.get("/delete/:id", deletePost)


module.exports = router