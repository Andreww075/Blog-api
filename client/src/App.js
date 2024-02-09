import React, { useState, useEffect } from 'react'
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
import AOS from 'aos'
import './styles/App.css';


function App() {
  const [ showMenu, setShowMenu ] = useState(1);
  const [ showNightMode, setShowNightMode ] = useState(false);
  const [ darkMode, setDarkMode ] = useState(1); // 0 === dark || 1 === light || 2 === system

  const handleMenu = () => {
    if ( showMenu === 0 ) setShowMenu(1)
    else setShowMenu(0)
  }

  const hiddenMenu = () => {
    setShowMenu(1)
  }

  //////

  const handleNightMode = () => {
    setShowNightMode(!showNightMode)
  }

  const hiddenNightMode = () => {
    setShowNightMode( false )
  }

  ///////

  const dark = () => {
    setDarkMode(0)
    console.log(darkMode)
  }

  const light = () => {
    setDarkMode(1)
    console.log(darkMode)
  }

  const system = () => {
    setDarkMode(2)
    console.log(darkMode)
  }

  ///////

  const hiddenModals = () => {
    hiddenMenu();
    hiddenNightMode();
  }

  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <Router>
        <Header counter={showMenu} showOptions={handleMenu} handleNightMode={handleNightMode} showNightMode={showNightMode} dark={dark} light={light} system={system} />
          <Routes>
            <Route path='/' element={<Home hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
            <Route path='/About' element={<About hiddenMenu={hiddenModals} darkMode={darkMode} />}/>

            <Route path='/api/users/signup' element={<Signup hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
            <Route path='/api/users/signin' element={<Signin hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
            <Route path='/api/users/signup/newUser' element={<Signup hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
            <Route path='/api/users/logout' element={<LogOut />}/>

            <Route path='/api/posts' element={<Posts hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
            <Route path='/api/posts/addPosts' element={<AddPosts hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
            <Route path='/api/posts/post' element={<Post hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
            <Route path='/api/posts/post/edit' element={<EditComment hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
          </Routes>
        <Footer hiddenMenu={hiddenModals} darkMode={darkMode} />
      </Router>
    </>
  );
}

export default App;
