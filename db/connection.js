const mongoose = require('mongoose')
mongoose.connection(
  process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL
    : '<Your local db connection>'
)



const connection = mongoose.connect('mongodb://localhost:27017/bakStabber', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})


mongoose.set('debug', true)

module.exports = connection 
