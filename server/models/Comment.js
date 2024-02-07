const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const date = new Date().toLocaleDateString();
const myDate = String(date)

const CommentSchema = new Schema({
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  username: { type: String },
  user: { type: String },
  post: { type: String },
  date: { type: String, default: myDate }
})

CommentSchema.set('toJson', {
  transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Comment = model('Comment', CommentSchema);

module.exports = Comment;