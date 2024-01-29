const mongoose = require('mongoose');
const uri = "mongodb+srv://Andres075:1099736009n.@cluster0.hlkoqjm.mongodb.net/blog-api?retryWrites=true&w=majority";

mongoose.connect(uri/*, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
  //useFindAndModify: false,
  //useCreateIndex: true
}*/)
  .then(() => console.log('Database Connected'))
  .catch(err => console.error(err));