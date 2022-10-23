const sendRes = require("../modules/universalRes")
const {uid} = require("uid")
const bcrypt = require("bcrypt")
const userSchema = require("../schemas/userSchema")
const postSchema = require("../schemas/postSchema")

module.exports = {
    register: async (req, res) => {
        const {email, passOne: password, photo} = req.body

        const hash = await bcrypt.hash(password, 10)

        new userSchema({
            email,
            password: hash,
            secret: uid(),
            photo
        }).save().then(() => {
            sendRes(res, false, "all good", null)
        })
    },
    login: async (req, res) => {
        const {email, password} = req.body
        console.log(email, password)

        const userExists = await userSchema.findOne({email})

        if(userExists) {

            const compare = await bcrypt.compare(password, userExists.password)

            if(compare) return sendRes(res, false, "all good", {secret: userExists.secret})
        }

        return sendRes(res, true, "bad credentials", null)
    },
    getPhoto: async (req, res) => {
        const {secret} = req.params

        const user = await userSchema.findOne({secret})

        return sendRes(res, false, "all good", {photo: user.photo})
    },
    addPost: async (req, res) => {
        console.log(req.body)

        const newPost = new postSchema(req.body)
        await newPost.save()

        res.send({success: true})
    },
    findPost: async (req, res) => {
        const {username} = req.body
        let posts = []

        if(username.length > 0) {
            posts = await postSchema.find({username})
        } else {
            posts = await postSchema.find()
        }

        res.send({success: true, posts})
    },
    deletePost: async (req, res) => {
        const {id} = req.params

        await postSchema.findOneAndDelete({_id: id})

        res.send({success: true})
    },
    update: async (req, res) => {

        const postId = "asdadsfsd56sd"
        const newTitle = "cia yra naujas title"

        const post = await postSchema.findOneAndUpdate(
            {_id: postId},
            {$set: {title: newTitle}},
            {new : true}
        )

    }
}

