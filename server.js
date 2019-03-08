const express = require('express')
const app = express()
const passport = require('passport')


const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index.js')
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')


app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(flash())

app.use(passport.initialize())

app.use(passport.session())



app.use(session({secret: "Wdi-Fighters"}))

app.use(logger('dev'))

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})