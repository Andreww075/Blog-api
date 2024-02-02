//import react from 'react';
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
  }
]

const Header = () => {
  return (
    <div className="flex justify-around items-center py-2 shadow-md shadow-gray-800 cursor-default bg-neutral-500">
      <div className="flex items-center">
        <img src="" alt="img" className="mr-2"></img>
        <div>
          <h4 className="text-end tracking-tighter text-md translate-y-2">The...</h4>
          <h3 className="text-end tracking-tighter text-3xl translate_y_-2">Andres</h3>
        </div>
      </div>
      <div>
        <Link to={links[2].href}>{links[2].name}</Link>
        <Link to={links[3].href}>{links[3].name}</Link>
        <Link to={links[0].href}>{links[0].name}</Link>
        <Link to={links[1].href}>{links[1].name}</Link>
      </div>
    </div>
  )
}

export default Header;