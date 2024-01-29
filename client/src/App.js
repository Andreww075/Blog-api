import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './routes/Home'
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
        </Routes>
      <Home />
      <p>{ !data ? 'Loading...' : data }</p>
    </Router>
  );
}

export default App;
