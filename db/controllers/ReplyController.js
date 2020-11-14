const { Post, Reply } = require('../schema')

const CreateReply = async (req, res) => {
    try {
        const reply = new Reply({ ...req.body, user_id: req.params.user_id })
        reply.save()
        await Post.update(
            {
                _id: req.params.post_id
            },
            {
                $push: {
                    replies: reply
                }
            }
        )
        res.send(reply)
    } catch (error) {
        throw error
    }
}
const RemoveReply = async (req, res) => {
    try {
        await Reply.deleteOne(
            {
                _id: req.params.reply_id
            }
        )
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.post_id,
            {
                $pull: {
                    comments: {
                        _id: req.params.reply_id
                    }
                }
            },
            {
                upsert: true, new: true
            }
        )
        res.send(updatedPost)
    } catch (error) {
        throw error
    }
}

const EditReply = async (req, res) => {
    try {
        await Reply.findByIdAndUpdate(
            req.params.reply_id,
            { ...req.body },
            { upsert: true, new: true },
            (err, d) => (err ? err : res.send(d))
        )
    } catch (error) {
        throw error
    }
}
module.exports = {
    CreateReply,
    RemoveReply,
    EditReply
}