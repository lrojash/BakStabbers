const { Schema } = require('mongoose')


module.exports = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        // what users posts
        stab: {
            type: String,
        },
        reply: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reply'
            }
        ]
    }, { timestamps: true }
)