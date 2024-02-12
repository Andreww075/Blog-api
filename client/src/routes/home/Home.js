import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookImg from '../../assets/pixabay-books.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const links = [
  {
    name: 'Register',
    href: '/api/users/signup'
  },
  {
    name: 'About',
    href: '/about'
  }
]


const Home = ({ hiddenMenu, darkMode, darkModeClass }) => {
  const [ user, setUser ] = useState('');
  const [ post, setPost ] = useState('');

  useEffect(() => {
    AOS.init();
  })

  useEffect(() => {
    fetch('/request')
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err))
  }, [])
  
  return (
    <div onClick={hiddenMenu} className={darkModeClass}>
      {
        typeof user == 'object' ? (
          <div data-aos="fade-up" className="w-10/12 shadow shadow-gray-800 rounded-md py-3 text-2xl font-black underline">
            <h5 className="text-center">Hi, {user.username}, Welcome at this Blog!!!</h5>
          </div>
        ) : (
          <div data-aos="fade-up" className="w-10/12 shadow shadow-gray-900 rounded-md py-3 text-2xl font-black underline">
            <h5 className="text-center transition-all hover:scale-105">Hi, Do you want 
              <Link to={links[0].href} className='mx-1 transition-all hover:text-blue-700'>{links[0].name}</Link>
            at this Blog?</h5>
          </div>
        )
      }

      <form action="/api/posts" method="GET" className="my-5 text-lg" data-aos="fade-up">
        <label className="flex items-center">
          Look, this is my last 
          <input type="hidden" name="category" value='Category' />
          <button type='submit' className="mx-1 text-lg transition-all hover:text-blue-700">Post</button>
          !
        </label>
      </form>

      {
        post === '' ? (
          <p className="loader"></p>
        ) : (
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={ darkMode === 0 ? ('text-xl rounded-md shadow shadow-neutral-900 w-10/12 flex flex-col justify-center items-center py-5') : darkMode === 1 ? ('text-xl rounded-md shadow shadow-neutral-700 w-10/12 flex flex-col justify-center items-center py-5') : ('text-xl rounded-md shadow shadow-neutral-700 w-10/12 flex flex-col justify-center items-center py-5') }>
            <h5 className='mb-3 border-b-2 font-black text-3xl w-10/12 text-center border-blue-950 transition-all hover:scale-105 hover:opacity-90'>{ post.title }</h5>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="w-10/12 h-96 rounded-lg">
              <img src={bookImg} alt='my' className="w-full h-96 rounded-lg transition-all hover:opacity-90" />
            </div>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="mt-2 w-11/12 border-b-4 border-double border-blue-950 text-end pr-3">{ post.date }</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-11/12 pl-3'><span className="font-black">Category: </span>{ post.category }</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="w-11/12 text-lg gowun-batang-regular mt-5">{ post.header }</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="w-11/12 text-lg gowun-batang-regular">{ post.firstPart }</p>
            <form data-aos="fade-up" data-aos-anchor-placement="center-bottom" action="/api/posts/post" method="GET" className="mt-3">
              <input type="hidden" name="postTitle" value={ post.title } />
              <button type='submit' className='w-full underline transition-all hover:font-black'>Read More...</button>
            </form>
          </div>
        )
      }
      
      <div data-aos="fade-up" className='w-10/12 flex justify-center items-center'>
        <a href={links[1].href} className='mt-10 w-full text-center text-2xl transition-all hover:scale-105 hover:font-black hover:underline'>Do you want know about the author?</a>
      </div>
    </div>
  )
}

export default Home;