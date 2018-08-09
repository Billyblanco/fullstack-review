const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , authController = require('./controllers/authController')
    , postsController = require('./controllers/postController')
require('dotenv').config()

const app = express()

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
}))

massive(process.env.CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log('DATABASE CONNECTED')
})
app.use(bodyParser.json())

app.get('/auth/callback', authController.auth)
app.get('/api/currentUser', (req, res) => {
  res.send(req.session.user)
})

app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})

app.get('/api/posts', postsController.read)
app.post('/api/posts', postsController.create)




const PORT = process.env.PORT || 4007
app.listen(PORT, () => {
  console.log('BILBO BAGGINS DRAGONS', PORT)
}) 