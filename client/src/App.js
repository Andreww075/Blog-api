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
  const [ darkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('darkMode'))); // 0 === dark || 1 === light || 2 === system

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
    let number = 0;
    setDarkMode(number)
    localStorage.setItem( 'darkMode', JSON.stringify(number) );
  }

  const light = () => {
    let number = 1;
    setDarkMode(number)
    localStorage.setItem( 'darkMode', JSON.stringify(number) );
  }

  const system = () => {
    let number = 2;
    setDarkMode(number)
    localStorage.setItem( 'darkMode', JSON.stringify(number) );
  }

  let darkModeClass = darkMode === 0 ? ("cursor-default alice-regular flex flex-col items-center justify-center pb-20 shadow-md shadow-neutral-800 dark-mode-bg text-blue-200 rounded-b-3xl tracking-tighter pt-24") : darkMode === 1 ? ("cursor-default alice-regular flex flex-col items-center justify-center pb-10 shadow-md shadow-neutral-400 rounded-b-3xl tracking-tighter pt-24") : ("cursor-default alice-regular flex flex-col items-center justify-center pb-20 shadow-md shadow-neutral-400 dark:shadow-neutral-800 dark:dark-mode-bg dark:text-blue-200 rounded-b-3xl tracking-tighter pt-24");

  let darkModePosts = darkMode === 0 ? ("alice-regular tracking-tighter flex justify-between px-5 pt-24 pb-10 shadow-md shadow-neutral-800 text-blue-200 rounded-b-3xl") : darkMode === 1 ? ("alice-regular tracking-tighter flex justify-between px-5 pt-24 pb-10 shadow-md shadow-neutral-400 rounded-b-3xl") : ("alice-regular tracking-tighter flex justify-between px-5 pt-24 pb-10 shadow-md shadow-neutral-400 dark:shadow-neutral-800 dark:text-blue-200 rounded-b-3xl");

  ///////

  const hiddenModals = () => {
    hiddenMenu();
    hiddenNightMode();
  }

  useEffect(() => {
    AOS.init();
  })

  return (
    <div className={ darkMode === 0 ? ('dark-mode-bg') : darkMode ? ('light-mode-bg') : ('light-mode-bg') }>
      <Router>
        <Header counter={showMenu} showOptions={handleMenu} handleNightMode={handleNightMode} showNightMode={showNightMode} dark={dark} light={light} system={system} darkMode={darkMode} />
          <Routes>
            <Route path='/' element={<Home hiddenMenu={hiddenModals} darkMode={darkMode} darkModeClass={darkModeClass} />}/>
            <Route path='/About' element={<About hiddenMenu={hiddenModals} darkMode={darkMode} darkModeClass={darkModeClass} />}/>

            <Route path='/api/users/signup' element={<Signup hiddenMenu={hiddenModals} darkMode={darkMode} darkModeClass={darkModeClass} />}/>
            <Route path='/api/users/signin' element={<Signin hiddenMenu={hiddenModals} darkMode={darkMode} darkModeClass={darkModeClass} />}/>
            <Route path='/api/users/signup/newUser' element={<Signup hiddenMenu={hiddenModals} darkMode={darkMode} darkModeClass={darkModeClass} />}/>
            <Route path='/api/users/logout' element={<LogOut />}/>

            <Route path='/api/posts' element={<Posts hiddenMenu={hiddenModals} darkMode={darkMode} darkModeClass={darkModePosts} />}/>
            <Route path='/api/posts/addPosts' element={<AddPosts hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
            <Route path='/api/posts/post' element={<Post hiddenMenu={hiddenModals} darkMode={darkMode} darkModeClass={darkModePosts} />}/>
            <Route path='/api/posts/post/edit' element={<EditComment hiddenMenu={hiddenModals} darkMode={darkMode} />}/>
          </Routes>
        <Footer hiddenMenu={hiddenModals} darkMode={darkMode} />
      </Router>
    </div>
  );
}

export default App;
