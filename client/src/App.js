// import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './routes/home/Home'
import Signup from './routes/users/Signup'
import Signin from './routes/users/Signin'
import About from './routes/home/About'
import LogOut from './routes/users/LogOut'
import Posts from './routes/posts/Posts'
import Footer from './components/Footer'
import AddPosts from './routes/posts/AddPosts'
import Post from './routes/posts/Post'
import EditComment from './routes/posts/EditComment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>

          <Route path='/api/users/signup' element={<Signup />}/>
          <Route path='/api/users/signin' element={<Signin />}/>
          <Route path='/api/users/signup/newUser' element={<Signup />}/>
          <Route path='/api/users/logout' element={<LogOut />}/>

          <Route path='/api/posts' element={<Posts />}/>
          <Route path='/api/posts/addPosts' element={<AddPosts />}/>
          <Route path='/api/posts/post' element={<Post />}/>
          <Route path='/api/posts/post/edit' element={<EditComment />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
