const { User, Post, Follower } = require('../schema')

const GetProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).select('_id name')
        const posts = await Post.find({ user_id: req.params.user_id })
        res.send({ user, posts })
    } catch (error) {
        throw error
    }
}
const GetFollowers = async (req, res) => {
    try {
        const user = await User.findByID(req.params.user_id).select('_id name')
        const followers = await Follower.find({ user_id: req.params.user_id }) 
        res.send({ user, followers })
    } catch(error) {
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
            dob:body.dob,
            password_digest
        })
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
                name: user.name
            }
            res.locals.payload = payload
            return next()
        }
        res.status(401).send({ msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetProfile,
    GetFollowers,
    CreateUser,
    SignInUser
}