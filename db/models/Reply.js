const { Schema } = require('mongoose')


module.exports = new Schema(
    {
        reply: {
            type: String,
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    { timestamps: true }
)