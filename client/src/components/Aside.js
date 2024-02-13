import { useState, useEffect } from "react"
import bookImg from '../assets/pixabay-books.jpg'

const Aside = () => {
  const [ post, setPost ] = useState('')

  useEffect(() => {
    fetch('/request')
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="aside w-2/12 border-y border-blue-950 flex flex-col items-center">
      <p className="mb-10">Recent post:</p>
      {
        post === '' ? (
          <p className="loader"></p>
        ) : (
          <div>
            <h5 className='mb-3 border-b-2 font-black text-3xl w-full text-center border-blue-950 transition-all hover:scale-105 hover:opacity-90'>{ post.title }</h5>
            <p className="mt-2 w-11/12">{ post.date }</p>
            <p className='w-11/12'><span className="font-black">Category: </span>{ post.category }</p>
            <p className="w-11/12 text-lg gowun-batang-regular mt-5">{ post.header }</p>
            <form action="/api/posts/post" method="GET" className="mt-3">
              <input type="hidden" name="postTitle" value={ post.title } />
              <button type='submit' className='w-full underline transition-all hover:font-black'>Read More...</button>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default Aside;