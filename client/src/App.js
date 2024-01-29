import React, { useState, useEffect } from 'react'
import './styles/App.css';

function App() {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <p className='text-center border border-black'>{ !data ? 'Loading...' : data }</p>
  );
}

export default App;
