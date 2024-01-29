const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

// initializations
const app = express();
require('./database.js');

// settings
app.set('PORT', process.env.PORT || 3001);

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'my_secret_app',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())
app.use(express.json());

// global variables
app.use((req, res, next) => {
  next();
})

// routes

app.get('/', (req, res) => {
  console.log('Home Page')
});

app.get('/api', (req, res) => {
  res.send({
    message: 'This is the api page'
  })
});


app.use(express.static(path.resolve(__dirname, '../client/src')))

// listening
app.listen(app.get('PORT'), () => {
  console.log('Server on port', app.get('PORT'))
})