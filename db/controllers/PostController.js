const { post } = require('../models/User')
const { Post, User, Reply } = require('../schema')

const GetPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        throw error
    }
}

const GetPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id).populate([
            {
                model: 'users',
                path: 'user_id',
                select: '_id name'
            },
            {
                path: 'replies',
                populate: {
                    path: 'user_id',
                    model: 'users',
                    select: '_id name'
                }
            }
        ])
        res.send(post)
    } catch (error) {
        throw error
    }
}

const CreatePost = async (req, res) => {
    try {
        const newPost = new Post({ ...req.body, user_id: req.params.user_id })
        newPost.save()
        res.send(newPost)
    } catch (error) {
        throw error
    }
}

const DeletePost = async (req, res) => {
    try {
        await Reply.deleteMany({ _id: { $in: post.replies } })
        await Post.findByIdAndDelete(req.params.post_id)
        res.send({ msg: 'Post Deleted' })
    } catch (error) {
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate(
            req.params.post_id,
            {
                ...req.body
            },
            {
                new: true,
                userFindAndModify: false
            },
            (err, (d) => (err ? err : res.send(d)))
        )
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPosts,
    GetPostById,
    CreatePost,
    DeletePost,
    UpdatePost
}