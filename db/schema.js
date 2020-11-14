const { model } = require('mongoose')

const UserSchema = require('./models/User')
const PostSchema = require('./models/Post')
const ReplySchema = require('./models/Reply')


const User = model('users', UserSchema)
const Reply = model('replies', ReplySchema)
const Post = model('posts', PostSchema)

module.exports = {
    User,
    Reply,
    Post,
}