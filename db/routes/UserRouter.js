const Router = require('express').Router()
const UserController = require('../../db/controllers/UserController')
const {
    getToken,
    createToken,
    verifyToken
} = require('../../middleware/JwtHandler')

Router.get('/:user_id', UserController.GetProfile)
Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInUser, createToken)
Router.put('/:user_id/update', UserController.ModPassword)
Router.put('/:user_id/update_username', UserController.ModUsername)
Router.delete('/:user_id/delete', UserController.DeleteUser)
Router.get(
    '/refresh/session',
    getToken,
    verifyToken,
    UserController.RefreshSession
)

module.exports = Router