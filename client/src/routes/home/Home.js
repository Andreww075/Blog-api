import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookImg from '../../assets/pixabay-books.jpg'

const links = [
  {
    name: 'Register',
    href: '/api/users/login'
  },
  {
    name: 'About',
    href: '/about'
  }
]

const Home = ({ hiddenMenu }) => {
  const [ user, setUser ] = useState('');
  const [ post, setPost ] = useState('');

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
    <div onClick={hiddenMenu} className="cursor-default alice-regular flex flex-col items-center justify-center pb-10 shadow-md shadow-neutral-400 rounded-b-3xl tracking-tighter pt-24">
      {
        typeof user == 'object' ? (
          <div className="w-10/12 shadow shadow-gray-800 rounded-md py-3 text-2xl border-2 border-dashed border-blue-800">
            <h5 className="text-center">Hi, {user.username}, Welcome at this Blog!!!</h5>
          </div>
        ) : (
          <div className="w-10/12 shadow shadow-gray-900 rounded-md py-3 text-2xl border-2 border-dashed border-blue-800">
            <h5 className="text-center">Hi, Do you want 
              <Link to={links[0].href} className='mx-1 transition-all hover:text-blue-700'>{links[0].name}</Link>
            at this Blog?</h5>
          </div>
        )
      }

      <form action="/api/posts" method="GET" className="my-5 text-lg">
        <label className="flex items-center">
          Look, this is my last 
          <input type="hidden" name="category" value='Category' />
          <button type='submit' className="mx-1 text-lg transition-all hover:text-blue-700">Post</button>
          !
        </label>
      </form>

      {
        post === '' ? (
          <p>Loading...</p>
        ) : (
          <div className='text-xl rounded-md shadow shadow-neutral-700 w-10/12 flex flex-col justify-center items-center py-5'>
            <h5 className='mb-3 border-b-2 text-blue-950 text-3xl w-10/12 text-center border-blue-800'>{ post.title }</h5>
            <img src={bookImg} alt='my' className="w-10/12 rounded-lg transition-all hover:opacity-90" />
            <p className="mt-2 w-11/12 border-b-4 border-double border-blue-950 text-end pr-3">{ post.date }</p>
            <p className='w-11/12 pl-3'><span className="font-black text-blue-800">Category: </span>{ post.category }</p>
            <p className="w-11/12 text-lg gowun-batang-regular mt-5">{ post.header }</p>
            <p className="w-11/12 text-lg gowun-batang-regular">{ post.firstPart }</p>
            <form action="/api/posts/post" method="GET" className="mt-3">
              <input type="hidden" name="postTitle" value={ post.title } />
              <button type='submit' className='w-full text-blue-700 underline transition-all hover:text-blue-950'>Read More...</button>
            </form>
          </div>
        )
      }
      
      <div className='w-10/12 flex justify-center items-center'>
        <a href={links[1].href} className='mt-10 w-full text-center text-2xl text-blue-800 transition-all hover:scale-105 hover:text-blue-950 hover:underline'>Do you want know about the author?</a>
      </div>
    </div>
  )
}

export default Home;