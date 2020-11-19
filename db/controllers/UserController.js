const { request } = require('express')
const { User, Post } = require('../../db/schema')
const jwt = require('jsonwebtoken')
const {
    checkPassword,
    generatePassword
} = require('../../middleware/PasswordHandler')

const GetProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).select('_id name')
        const posts = await Post.find({ user_id: req.params.user_id })
        const userName = await User.findById(req.params.user_id).select('userName')
        res.send({ user, posts, userName })
    } catch (error) {
        throw error
    }
}

const CreateUser = async (req, res) => {
    try {
        const body = req.body
        const password_digest = await generatePassword(body.password)
        const user = new User({
            name: body.name,
            email: body.email,
            dob: body.dob,
            userName: body.userName,
            password_digest
        })
        user.save()
        res.send(user)
    } catch (error) {
        throw error
    }
}
const ModPassword = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).select('_id name')
        const body = req.body
        const password_digest = await generatePassword(body.password)
        user.password_digest = password_digest
        user.save()
        res.send(user)
    } catch (error) {
        throw error
    }
}

const ModUsername = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id)
        const body = req.body
        user.userName = body.userName
        user.save()
        res.send(user)
    } catch (error) {
        throw error
    }
}

const SignInUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (
            user &&
            (await checkPassword(req.body.password, user.password_digest))
        ) {
            const payload = {
                _id: user._id,
                name: user.name,
                userName: user.userName
            }
            res.locals.payload = payload
            return next()
        }
        res.status(401).send({ msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}
const DeleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.user_id)
        res.send({ msg: 'Account Deleted' })
    } catch (error) {
        throw error
    }
}

const RefreshSession = async (req, res) => {
    try {
        const token = res.locals.token
        res.send({ user: jwt.decode(token), token: res.locals.token })
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetProfile,
    CreateUser,
    SignInUser,
    RefreshSession,
    ModPassword,
    ModUsername,
    DeleteUser
}