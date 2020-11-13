const faker = require('faker')
const connection = require('./connection')
const { Types } = require('mongoose')
const { User, PostLog, Post } = require('./schema')

const users = new Array(5).fill().map(() => ({
    _id: Types.ObjectId(),
    profileImg: faker.Avatar.image(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    password_digest: faker.random.word(),
    dateOfBirth: faker.date.past(19, '2010-01-01')
}))
const posts = new Array(10).fill().map(() => ({
    _id: Types.ObjectId(),
    post: faker.lorem.sentence(),
    user_id: users[Math.floor(Math.random() * users.length)]._id 
}))

const seed = async () => {
    await (await connection).Connection
    await User.insertMany(users)
    await Post.insertMany(posts)
    await connection.disconnect 
    process.exit()
}
seed()