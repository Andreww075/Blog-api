const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const Post = require('./models/Post')

// initializations
const app = express();
require('./database.js');
require('./config/passport')

// settings
app.set('PORT', process.env.PORT || 3001);

// middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'my_secret_app',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())
app.use(express.json());

// global variables
app.use((req, res, next) => {
  //res.locals.success_msg = req.flash('success_msg');
  //res.locals.errors_msg = req.flash('errors_msg');
  res.locals.user = req.user || null;

  next();
})

// routes

const users = require('./routes/Users');
app.use('/api/users', users);

const posts = require('./routes/Posts');
app.use('/api/posts', posts);



app.get('/request', async (req, res) => {
  const posts = await Post.find({});
  const sortedPosts = posts.sort((a, b) => b.internDate - a.internDate);
  res.send(sortedPosts[0]);
})

app.get('/api', (req, res) => {
  res.send(req.user);
})


app.use(express.static(path.resolve(__dirname, '../client/src')))

// listening
app.listen(app.get('PORT'), () => {
  console.log('Server on port', app.get('PORT'))
})