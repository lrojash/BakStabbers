const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const ReplyRouter = require('./ReplyRouter')

Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/reply', ReplyRouter)

module.exports = Router