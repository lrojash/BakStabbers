const { Schema } = require('mongoose')

module.exports = new Schema (
    {
        user_id: {
           type: Schema.Types.ObjectId,
           ref: 'users' 
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'comments'
        }]
    }
)