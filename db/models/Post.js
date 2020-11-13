const { Schema } = require('mongoose')
const { stringify } = require('querystring')

module.exports = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        // what users posts
        stab: {
            type: string,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'comments'
            }
        ]
    }
)