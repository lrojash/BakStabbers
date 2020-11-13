const { model } = require('mongoose')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')
const ReplyModel = require('./models/Reply')

const User = model('users', UserModel)
const Post = model('post_logs', PostModel)
const Reply = model('Comment', ReplyModel)

module.exports = {
    User,
    Post, 
    Reply
}