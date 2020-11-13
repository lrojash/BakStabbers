const { Schema } = require('mongoose')

module.exports = new Schema (
    {
        post: {
            type: String,
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref: 'useres'
        }
    }, { timestamps: true })