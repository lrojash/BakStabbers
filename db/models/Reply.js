const { Schema } = require('mongoose')

module.exports = new Schema (
    {
        reply: {
            type: String,
        },
        user_id: {
            type: Schema.Types.ObjecId,
            ref: 'users'
        }

    }, { timestamps: true }
)