const faker = require('faker')
const connection = require('./connection')
const { Types } = require('mongoose')
const { User, Post, Reply } = require('./schema')

const users = new Array(50).fill().map(() => ({
  _id: Types.ObjectId(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password_digest: faker.random.word(),
  dob: faker.date.between('1900-01-01', '2002-01-01')
}))

const replies = new Array(500).fill().map(() => ({
  _id: Types.ObjectId(),
  reply: faker.lorem.sentences(),
  user_id: users[Math.floor(Math.random() * users.length)]._id
}))

const posts = new Array(100).fill().map(() => ({
  _id: Types.ObjectId(),
  stab: faker.lorem.paragraph(),
  replies: replies
    .slice(
      Math.floor(Math.random() * replies.length),
      Math.floor(Math.random() * replies.length)
    )
    .map((c) => c._id),
  user_id: users[Math.floor(Math.random() * users.length)]._id
}))

const seed = async () => {
  await connection.connect
  await User.insertMany(users)
  await Post.insertMany(posts)
  await Reply.insertMany(replies)
  await connection.disconnect
  process.exit()
}

seed()