const { User, Post } = require('../schema')

const GetProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).select('_id name')
        const posts = await Post.find({ user_id: req.params.user_id})
        res.send({ user, posts })
    } catch(error) {
        throw error
    }
}

module.exports = {
    GetProfile
}