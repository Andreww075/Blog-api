const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
  if ( req.isAuthenticated() ) return next();
  req.flash('error_msg', 'Not authorized');
  res.redirect('/');
}

module.exports = helpers;