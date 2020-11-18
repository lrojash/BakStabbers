const AppRouter = require('./db/routes/AppRouter')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const connection = require('./db/connection')
const path = require('path')
const { default: contentSecurityPolicy } = require('helmet/dist/middlewares/content-security-policy')


const PORT = process.env.PORT || 5001
const app = express()

//
app.use(logger('dev'))
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable('X-Powered-By')
app.get('*', (req, res) => app.use('/api', AppRouter))
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')))

app.listen(PORT, async () => {
    try {
        await connection
        console.log('Database Connected')
        console.log(`App listening on port: ${PORT}`)
    } catch (error) {
        throw new Error('Connection Error')
    }
})