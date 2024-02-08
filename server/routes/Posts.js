const express = require('express');
const Post = require('../models/Post');
const Comment = require('../models/Comment')

const posts = express.Router();
posts.use(express.json());

posts.get('/', async (req, res) => {
  const { category } = req.query;

  if ( category !== 'Category' ) {
    const posts = await Post.find({ category: category });
    const data = posts.sort((a, b) => b.internDate - a.internDate);
    res.send(data);
  } else {
    const posts = await Post.find({});
    const data = posts.sort((a, b) => b.internDate - a.internDate);
    res.send(data);
  }
})

posts.post('/addPosts', async (req, res) => {
  const { title, imgUrl, header, firstPart, secondPart, thirdPart, fourthPart, fifthPart, sixthPart, category } = req.body;

  const posted = await Post.findOne({ title: title });

  if ( posted ) res.redirect('/api/posts/addPosts')
  else {
    const newPost = new Post({
      title: title, 
      imgUrl: imgUrl,
      category: category,
      header: header,
      firstPart: firstPart,
      secondPart: secondPart,
      thirdPart: thirdPart,
      fourthPart: fourthPart,
      fifthPart: fifthPart,
      sixthPart: sixthPart
    })

    await newPost.save();
    res.redirect('/api/posts');
  }
})

posts.get('/post', async (req, res) => {
  console.log(req.user)
  if ( req.user != undefined ) {
    const { postTitle } = req.query;
    const post = await Post.findOne({ title: postTitle });
    let id = post.id;
    const comments = await Comment.find({ post: id });

    const idUser = req.user._id;
    const personalComments = await Comment.find({ user: idUser })
    const data = [ post, comments, personalComments ];

    if ( post ) {
      res.send(data);
    }
    else res.status(404).end()
  } else {
    const { postTitle } = req.query;
    const post = await Post.findOne({ title: postTitle });
    let id = post.id;

    const comments = await Comment.find({ post: id });
    const data = [ post, comments ];

    if ( post ) {
      res.send(data);
    }
    else res.status(404).end()
  }
})

posts.post('/post', async (req, res) => {
  const { comment, title } = req.body;
  if ( comment === '' ) res.redirect(req.get('referer'))
  else if( req.user === undefined ) res.redirect(req.get('referer'))
  else {
    const newComment = new Comment({ content: comment })
    newComment.user = req.user.id;
    newComment.username = req.user.username;

    const post = await Post.findOne({ title: title });
    newComment.post = post._id;

    await newComment.save();
    req.flash('success_msg', 'Comment added');
    res.redirect(req.get('referer'))
  }
})

posts.delete('/post/delete', async (req, res) => {
  const { id, href } = req.body;
  await Comment.findByIdAndDelete({ _id: id });
  res.redirect(href);
})

posts.get('/post/edit', (req, res) => {
  const { content, href, id } = req.query;
  const data = [ content, href, id ];
  res.send(data);
})

posts.put('/post/edit', async (req, res) => {
  const { href, content, id } = req.body;
  await Comment.findByIdAndUpdate(id, { content: content });
  req.flash('success_msg', 'Comment Updated Successfully')
  res.redirect(href);
})


module.exports = posts;