const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        password_digest: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]

    },
    { timestamps: true }
)