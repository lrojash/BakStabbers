const Router = require('express').Router()
const ReplyController = require('../controllers/ReplyController')
const Reply = require('../models/Reply')

Router.post(
    '/:post_id/user/:user_id', ReplyController.CreateReply
)

Router.delete(
    '/:post_id/remove/:comment_id', ReplyController.RemoveReply
)
Router.put(
    '/:comment_id', ReplyController.EditReply
)

module.exports = Router