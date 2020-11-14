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
    try { } catch (error) {
        throw error
    }
}