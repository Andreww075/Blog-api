import { useEffect, useState } from 'react';

const Signin = () => {
  const [ data, setData ] = useState('');

  useEffect(() => {
    fetch('/api/users/signin')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-12 shadow-md shadow-neutral-400 rounded-b-3xl cursor-default">
      {
        data.length > 0 ? (
          <div className='shadow shadow-neutral-500 rounded-md w-10/12 text-xl py-2 px-4 mb-2 flex justify-between items-center tracking-tighter'>
            <p>{data}</p>
            <button onClick={() => setData('')}>X</button>
          </div>
        ) : (<div></div>)
      }
      <div className="w-3/6 px-3 py-5 shadow-md shadow-gray-800 rounded-lg">
        <div>
          <h3 className="text-center text-5xl border-b-4 border-b-stone-800 pb-4">Sign In</h3>
        </div>
        <form action="/api/users/signin" method="POST" className="w-full flex flex-col py-2">
          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Email:
              <input 
                type="email" 
                name="email" 
                placeholder="example" 
                className="w-7/12 rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none transition-all hover:scale-105 px-3" 
                autoFocus 
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Password:
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="rounded w-7/12 border-2 border-transparent border-b-black bg-transparent text-base outline-none transition-all hover:scale-105 px-3"
              />
            </label>
          </span>

          <span className="flex justify-center items-center">
            <button type="submit" className="text-2xl bg-neutral-500 rounded-md mt-3 py-1 w-3/6 transition-all hover:bg-neutral-400 hover:text-neutral-800">Log In</button>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Signin;