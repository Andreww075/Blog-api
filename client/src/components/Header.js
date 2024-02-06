import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const links = [
  {
    name: 'SignIn',
    href: '/api/users/signin'
  },
  {
    name: 'SignUp',
    href: '/api/users/signup'
  },
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'LogOut',
    href: '/api/users/logout'
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
    name: 'Post',
    href: '/api/posts/post'
  }
]

const Header = () => {
  const [ user, setUser ] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err))
  }, [])

  const consoleUser = () => {
    console.log(  user );
  }

  return (
    <div className="flex justify-around items-center py-2 shadow-md shadow-gray-800 cursor-default bg-neutral-500 fixed w-full z-50">
      <div className="flex items-center">
        <img src="" alt="img" className="mr-2"></img>
        <div>
          <h4 className="text-end tracking-tighter text-md translate-y-2">The...</h4>
          <h3 className="text-end tracking-tighter text-3xl translate_y_-2">Andres</h3>
        </div>
      </div>
      <div>
        <Link to={links[2].href} className='mx-1'>{links[2].name}</Link>
        <Link to={links[3].href} className='mx-1'>{links[3].name}</Link>
        <Link to={links[0].href} className='mx-1'>{links[0].name}</Link>
        <Link to={links[1].href} className='mx-1'>{links[1].name}</Link>
        <Link to={links[4].href} className='mx-1'>{links[4].name}</Link>
        <Link to={links[5].href} className='mx-1'>{links[5].name}</Link>
        <Link to={links[6].href} className='mx-1'>{links[6].name}</Link>
        <Link to={links[7].href} className='mx-1'>{links[7].name}</Link>
      </div>

      <p onClick={consoleUser}>{ typeof user == 'object' ? 'Yes User' : 'Not User' }</p>
    </div>
  )
}

export default Header;