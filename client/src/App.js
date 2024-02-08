import React, { useState } from 'react'
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
  const [ showMenu, setShowMenu ] = useState(1);

  const handleMenu = () => {
    if ( showMenu === 0 ) setShowMenu(1)
    else setShowMenu(0)
  }

  const hiddenMenu = () => {
    setShowMenu(1)
  }

  return (
    <Router>
      <Header counter={showMenu} showOptions={handleMenu} />
        <Routes>
          <Route path='/' element={<Home hiddenMenu={hiddenMenu} />}/>
          <Route path='/About' element={<About hiddenMenu={hiddenMenu} />}/>

          <Route path='/api/users/signup' element={<Signup hiddenMenu={hiddenMenu} />}/>
          <Route path='/api/users/signin' element={<Signin hiddenMenu={hiddenMenu} />}/>
          <Route path='/api/users/signup/newUser' element={<Signup hiddenMenu={hiddenMenu} />}/>
          <Route path='/api/users/logout' element={<LogOut />}/>

          <Route path='/api/posts' element={<Posts hiddenMenu={hiddenMenu} />}/>
          <Route path='/api/posts/addPosts' element={<AddPosts hiddenMenu={hiddenMenu} />}/>
          <Route path='/api/posts/post' element={<Post hiddenMenu={hiddenMenu} />}/>
          <Route path='/api/posts/post/edit' element={<EditComment hiddenMenu={hiddenMenu} />}/>
        </Routes>
      <Footer hiddenMenu={hiddenMenu} />
    </Router>
  );
}

export default App;
