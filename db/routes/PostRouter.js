const Router = require('express').Router()
const PostController = require('../controllers/PostController')
const Post = require('../models/Post')

Router.get('/posts/', PostController.GetPosts)
Router.get('/:post_id', PostController.GetPostById)
Router.post('/:user_id', PostController.CreatePost)
Router.put('/update/:post_id', PostController.UpdatePost)
Router.delete('/delete/:post_id', PostController.DeletePost)

module.exports = Router