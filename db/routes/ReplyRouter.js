const Router = require('express').Router()
const ReplyController = require('../controllers/ReplyController')


Router.post(
    '/:post_id/user/:user_id', ReplyController.CreateReply
)

Router.delete(
    '/:post_id/remove/:reply_id', ReplyController.RemoveReply
)
Router.put(
    '/:reply_id', ReplyController.EditReply
)

module.exports = Router