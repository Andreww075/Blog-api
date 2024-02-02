import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './routes/Home'
import Signup from './routes/Signup'
import Signin from './routes/Signin'
import About from './routes/About'
// import Loading from './components/Loading'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/api/users/signup' element={<Signup />}/>
          <Route path='/api/users/signin' element={<Signin />}/>
          <Route path='/api/users/signup/newUser' element={<Signup />}/>
        </Routes>
      <p>{ !data ? 'Loading...' : data }</p>
    </Router>
  );
}

export default App;
