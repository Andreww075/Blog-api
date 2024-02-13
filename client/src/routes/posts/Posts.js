import { useEffect, useState } from 'react'
import Aside from '../../components/Aside'
import bookImg from '../../assets/pixabay-books.jpg'
import heartImg from '../../assets/heart.png'
import eyeImg from '../../assets/eye.png'

const Posts = ({ hiddenMenu, darkModeClass }) => {
  const [ posts, setPosts ] = useState('');
  const [ validation, setValidation ] = useState(true);

  const myUrl = window.location.href;
  const url = myUrl.split('3000');
  const newUrl = url[1];

  useEffect(() => {
    if ( validation ) {
      fetch(newUrl)
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setValidation(false);
        })
        .catch(err => console.error(err))
    }
  }, [])

  const consolePosts = () => {
    console.log(posts);
  }

  return (
    <div onClick={hiddenMenu} className={ darkModeClass }>
      
      <div className="flex flex-col items-center w-9/12">
        <div className="flex py-2 mb-8 border-y border-blue-950 w-full">
          <form data-aos="fade-up" action='/api/posts' method='GET'>
            <label className='font-black'>
              Category:
              <select name='category' className='bg-transparent font-light'>
                <option className='text-neutral-700'>Category</option>
                <option className='text-neutral-700'>Paranormal</option>
                <option className='text-neutral-700'>Special</option>
              </select>
            </label>

            <button className='border border-blue-950 rounded ml-5 px-5'>Find</button>
          </form>
        </div>

        {
          posts.length > 0 ? (
            posts.map(post => {
              return (
                <div loading='lazy' className="flex w-full py-3 border-b border-blue-950">
                  <div className="border-l border-blue-950 pl-8">
                    <img data-aos="fade-up" src={ bookImg } alt={ post.title } className='w-full h-96 rounded-lg' />
                    <h3 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-4xl acme-regular mt-6'>{ post.title }</h3>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='border-b-2 border-blue-950 w-3/6'>{ post.date }</p>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='py-3'><span className='font-black'>Category: </span>{ post.category }</p>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-xl pb-2 gowun-batang-regular'>{ post.header }</p>
                    <form data-aos="fade-up" data-aos-anchor-placement="center-bottom" action="/api/posts/post" method="get">
                      <input type="hidden" name="postTitle" value={ post.title } />
                      <button type='submit' className='w-full underline hover:font-black'>Read More...</button>
                    </form>
                  </div>
                </div>
              )
            })
          ) : (<div className='loader'></div>)
        }
      </div>

      <Aside />
    </div>
  )
}

export default Posts;