const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CommentSchema = new Schema({
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  username: { type: String },
  user: { type: String },
  post: { type: String },
  date: { type: Date, default: Date.now }
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