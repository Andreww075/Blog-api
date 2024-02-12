import { useState, useEffect } from 'react'

const Signup = ({ hiddenMenu, darkModeClass }) => {
  const [ errors, setErrors ] = useState([])
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repeatPassword, setRepeatPassword ] = useState('');

  const [ data, setData ] = useState('');

  useEffect(() => {
    fetch('/api/users/signup/newUser')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const handleSubmit = e => {
    const counterErrors = [];

    if ( username === '' ) counterErrors.push('Please, insert your username.')
    if ( email === '' ) counterErrors.push('Please, insert your email.')
    if ( password === '' ) counterErrors.push('Please, insert your password')
    if ( password !== repeatPassword ) counterErrors.push('Passwords do not match.')
    if ( password.length < 5 ) counterErrors.push('Password must be at least 5 characters');
    if ( username === '' || email === '' || password === '' || repeatPassword === '' ) e.preventDefault();
    
    if ( counterErrors.length > 0 ) {
      setErrors(counterErrors);
      console.log(errors);
    }
  }

  return (
    <div onClick={hiddenMenu} className={darkModeClass}>
      {
        errors.length > 0 ? (
          errors.map( (error, index) => {
            return (
              <div data-aos="fade-up" className='shadow shadow-neutral-800 rounded-md w-10/12 text-xl py-2 px-4 mb-2 flex justify-between items-center tracking-tighter'>
                <p>{error}</p>
                <button onClick={() => {
                  const newErrors = errors.filter( element => element !== error );
                  console.log(newErrors);
                  setErrors(newErrors)
                }}>X</button>
              </div>
            )
          })
        ) : data.length > 0 ? (
          <div data-aos="fade-up" className='shadow shadow-neutral-500 rounded-md w-10/12 text-xl py-2 px-4 mb-2 flex justify-between items-center tracking-tighter'>
            <p>{data}</p>
            <button onClick={() => setData('')}>X</button>
          </div>
        ) : (
          <div></div>
        )
        }
      <div data-aos="fade-up" className="w-3/6 px-3 py-5 shadow-md shadow-gray-950 rounded-lg">
        <div>
          <h3 className="text-center text-5xl font-black border-b-4 border-b-blue-950 pb-4 transition-all hover:overline">Sign Up</h3>
        </div>
        <form action="/api/users/signup/newUser" method="POST" className="w-full flex flex-col py-2">
          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Username:
              <input type="text" 
                name="username" 
                placeholder="Nicolás" 
                className="rounded border-2 border-transparent border-b-blue-950 bg-transparent text-base outline-none transition-all hover:scale-105 px-3" 
                onChange={e => setUsername( e.target.value )}
                autoFocus 
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Email:
              <input type="email" 
                name="email"
                placeholder="Example@example.example" 
                className="rounded border-2 border-transparent border-b-blue-950 bg-transparent text-base outline-none transition-all hover:scale-105 px-3"
                onChange={e => setEmail( e.target.value )} 
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
                className="rounded border-2 border-transparent border-b-blue-950 bg-transparent text-base outline-none transition-all hover:scale-105 px-3" 
                onChange={e => setPassword( e.target.value )}
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Repeat Your Password:
              <input 
                type="password" 
                name="repeatPassword" 
                placeholder="Password" 
                className="rounded border-2 border-transparent border-b-blue-950 bg-transparent text-base outline-none transition-all hover:scale-105 px-3"
                onChange={e => setRepeatPassword( e.target.value )} 
              />
            </label>
          </span>

          <span className="flex justify-center items-center">
            <button 
              type="submit" 
              className="text-2xl bg-blue-950 rounded-md mt-3 py-1 w-3/6 transition-all hover:opacity-60"
              onClick={handleSubmit}
            >
              Register
            </button>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Signup;