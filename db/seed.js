const faker = require('faker')
const connection = require('./connection')
const { Types } = require('mongoose')
const { User, PostLog, Comment } = require('./schema')

const users = new Array(5).fill().map(() => ({
    _id: Types.ObjectId(),
    // profileImg: faker.Avatar.image(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    password_digest: faker.random.word(),
    dob: faker.date.past(19, '2010-01-01')
}))
const comments = new Array(500).fill().map(() => ({
    _id: Types.ObjectId(),
    comment: faker.lorem.sentences(),
    user_id: users[Math.floor(Math.random() * users.length)]._id
  }))
  const postLogs = new Array(100).fill().map(() => ({
    _id: Types.ObjectId(),
    comments: comments
      .slice(
        Math.floor(Math.random() * comments.length),
        Math.floor(Math.random() * comments.length)
      )
      .map((c) => c._id),
    user_id: users[Math.floor(Math.random() * users.length)]._id
  }))


const seed = async () => {
    await (await connection).Connection
    await User.insertMany(users)
    await PostLog.insertMany(postLogs)
    await Comment.insertMany(comments)
    await connection.disconnect
    process.exit()
}
seed()