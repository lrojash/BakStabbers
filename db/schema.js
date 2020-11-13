const { model } = require('mongoose')
const UserModel = require('./models/User')
const PostLogModel = require('./models/PostLog')
const PostModel = require('./models/Post')

const User = model('users', UserModel)
const PostLog = model('post_logs', PostLogModel)
const Comment = model('comments', CommentModel)

module.exports = {
    User,
    PostLog,
    Comment
}