const { Schema } = require('mongoose')

module.exports = new Schema (
    {
        comments: {
            type: String,
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref: 'useres'
        }
    }, { timestamps: true })