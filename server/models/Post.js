const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const date = new Date().toLocaleDateString();
const MyDate = String(date)

const PostSchema = new Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  category: { type: String, required: true },
  header: { type: String, required: true },
  firstPart: { type: String, default: '' },
  secondPart: { type: String, default: '' },
  thirdPart: { type: String, default: '' },
  fourthPart: { type: String, default: '' },
  fifthPart: { type: String, default: '' },
  sixthPart: { type: String, default: '' },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  date: { type: String, default: MyDate }
})

PostSchema.set('toJson', {
  transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Post = model('Post', PostSchema);

module.exports = Post;