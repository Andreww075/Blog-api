import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sunImg from '../assets/sun.svg'
import moonImg from '../assets/moon.png'
import monitorImg from '../assets/monitor.png'

// 3Ca&hAFg+H729j4

//

// 7nDxEVpLgyHk8-f // 000

// 4H2ZulQaTUvM213-t // TheAndres__Blog

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  { 
    name: 'Posts',
    href: '/api/posts'
  },
  {
    name: 'AddPosts',
    href: '/api/posts/addPosts'
  },
  {
    name: 'SignIn',
    href: '/api/users/signin'
  },
  {
    name: 'SignUp',
    href: '/api/users/signup'
  },
  {
    name: 'LogOut',
    href: '/api/users/logout'
  },
]

const Header = ({ counter, showOptions, handleNightMode, showNightMode, dark, light, system, darkMode }) => {
  const [ user, setUser ] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div data-aos="fade-down" className={ darkMode === 0 ? ("alice-regular flex justify-around items-center py-2 shadow shadow-gray-900 cursor-default text-blue-200 bg-blue-950 fixed w-full z-50") : darkMode === 1 ? ("alice-regular flex justify-around items-center py-2 shadow shadow-gray-700 cursor-default text-blue-200 bg-blue-950 fixed w-full z-50") : ("alice-regular flex justify-around items-center py-2 shadow shadow-gray-700 dark:shadow-gray-900 cursor-default text-blue-200 bg-blue-950 fixed w-full z-50") }>
      <div data-aos="zoom-out-right" className="flex items-center">
        <img src="" alt="img" className="mr-2" />
        <Link to={links[0].href} className='transition-all hover:scale-105 hover:text-blue-300 hover:font-black'>
          <h4 className="text-end tracking-tighter text-md translate-y-2">The...</h4>
          <h3 className="text-end tracking-tighter text-3xl translate_y_-2">Andres</h3>
        </Link>
        <Link to={links[1].href} className='ml-5 py-1 px-3 rounded-md text-xl font-black transition-all hover:bg-blue-800 hover:scale-105 hover:overline'>{links[1].name}</Link>
      </div>

      <button onClick={handleNightMode} className='rounded-md border border-transparent w-10 transition-all hover:border-blue-200 hover:scale-105 hover:underline'><img src={sunImg} alt='d' className='w-full' /></button>

      {
        showNightMode ? (
          <span data-aos="flip-right" className='absolute rounded-md shadow-md flex flex-col items-center shadow-gray-700 top-24 bg-blue-950 w-4/12 p-2'>
              <button onClick={light} className='flex justify-center rounded-md border-y border-blue-200 w-full transition-all hover:bg-blue-300'><img src={sunImg} alt='sun' /></button>
              <button onClick={dark} className='flex my-2 justify-center rounded-md border-y border-blue-200 w-full transition-all hover:bg-blue-300'><img src={moonImg} alt='sun' /></button>
              <button onClick={system} className='flex justify-center rounded-md border-y border-blue-200 w-full transition-all hover:bg-blue-300'><img src={monitorImg} alt='sun' /></button>
          </span>
        ) : (<div className='absolute'></div>)
      }

      <div data-aos="zoom-out-left" className='flex items-center'>
        {
          user.role === 'admin' ? (
            <Link to={links[3].href} className='pr-3'>{links[3].name}</Link>
          ) : (<div></div>)
        }

        <button onClick={showOptions} className='rounded-md border border-transparent w-28 transition-all hover:border-blue-200 hover:scale-105 hover:underline'>More...</button>

        {
          counter === 0 ? (
            <span data-aos="flip-right" className='absolute rounded-md shadow-md flex flex-col items-center shadow-gray-700 top-24 bg-blue-950 w-full p-2 text-blue-200 text-xl'>
              <form action='/api/posts' method='GET' className='w-full text-center rounded-md border-b-8 border-double border-blue-200 transition-all hover:bg-blue-800'>
                <input type="hidden" name="category" value='Category' />
                <button type='submit' className='font-black w-full h-full py-2 transition-all hover:overline'>{links[2].name}</button>
              </form>
              {
                typeof user == 'object' ? (
                  <Link to={links[6].href} className='mt-2 text-center rounded-md w-full py-1 transition-all hover:bg-blue-800 hover:overline'>{links[6].name}</Link>
                ) : (
                  <div className='flex flex-col items-center mt-3 w-full'>
                    <Link to={links[4].href} className='text-center rounded-md w-full py-1 transition-all hover:bg-blue-800 hover:overline'>{links[4].name}</Link>
                    <Link to={links[5].href} className='mt-1 text-center rounded-md w-full py-1 transition-all hover:bg-blue-800 hover:overline'>{links[5].name}</Link>
                  </div>
                )
              }
            </span>
          ) : (
            <div></div>
          )
        }

        
      </div>
    </div>
  )
}

export default Header;