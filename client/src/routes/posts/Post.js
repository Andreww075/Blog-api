import { useEffect, useState } from "react";
import Aside from '../../components/Aside'
import bookImg from '../../assets/pixabay-books.jpg'
import eyeImg from '../../assets/eye.png'
import heartImg from '../../assets/heart.png'
import trashImg from '../../assets/trash.svg'
import editImg from '../../assets/edit.png'
import likeImg from '../../assets/like.png'
import dislikeImg from '../../assets/dislike.png'

import { Link } from 'react-router-dom'

const links = [
  {
    name: 'Read More Posts',
    href: '/api/posts'
  },
  {
    name: 'About Me',
    href: '/about'
  }
]

const Post = ({ hiddenMenu, darkModeClass }) => {
  const [ user, setUser ] = useState('');

  const [ data, setData ] = useState('');
  const [ post, setPost ] = useState('');
  const [ comments, setComments ] = useState('');
  const [ personalComments, setPersonalComments ] = useState('');

  const myUrl = window.location.href;
  const url = myUrl.split('3000');
  const newUrl = url[1];

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err))
  })

  useEffect(() => {
    fetch(newUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data);
        setPost(data[0]);
        setComments(data[1]);
        if ( data[2] !== undefined ) setPersonalComments(data[2])
      })
      .catch((err) => {
        console.error(err)
        //window.location.replace('http://localhost:3000/api/posts')
      })
  }, [])

  const consoles = () => {
    console.log(data)
    console.log(post)
    console.log(comments)
    if ( personalComments !== '' ) {
      console.log(personalComments)
      personalComments.find( element => console.log(element) )
    }
  }
  
  return (
    <div onClick={hiddenMenu} className={ darkModeClass }>
      <div className="flex flex-col items-center w-9/12">
        {
          post !== '' ? (
            <div className="w-full">
              <div className="flex py-2 mb-8 border-y border-blue-950 w-full">
                <p className="mr-6"><span className='font-black'>Category: </span>{post.category}</p>
                <p><span className='font-black'>Date: </span>{post.date}</p>
              </div>

              <div className="flex w-full py-3 border-b border-blue-950">
                <div className="w-2/12 flex flex-col items-center">
                  <img data-aos="fade-right" src={eyeImg} alt='heartImg' className='w-6/12' />
                  <p data-aos="fade-right">{ post.views }</p>
                </div>

                <div className="border-l border-blue-950 pl-8 w-full">
                  <div className="w-full">
                    <img data-aos="fade-up" src={ bookImg } alt={ post.title } className='w-full h-96 rounded-lg' />
                    <h3 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-4xl acme-regular py-4 border-b-2 border-blue-950 mx-20 text-center mb-10'>{ post.title }</h3>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-xl gowun-batang-regular mb-4'>{ post.header }</p>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-xl gowun-batang-regular'>{ post.firstPart }</p>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-xl gowun-batang-regular text-neutral-800 font-black bg-neutral-300 py-10 px-10 my-4'>{ post.secondPart }</p>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-xl gowun-batang-regular'>{ post.thirdPart }</p>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-xl gowun-batang-regular text-neutral-800 font-black bg-neutral-300 py-10 px-10 my-4'>{ post.fourthPart }</p>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-xl pb-2 gowun-batang-regular'>{ post.fifthPart }</p>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-xl gowun-batang-regular text-neutral-800 font-black bg-neutral-300 py-10 px-10 my-4'>{ post.sixthPart }</p>
                    <form data-aos="fade-up" data-aos-anchor-placement="center-bottom" action='/api/posts' method='GET' className="mt-32">
                      <input type="hidden" name="category" value='Category' />
                      <button type='submit' className='w-full underline transition-all hover:font-black'>{links[0].name}</button>
                    </form>
                  </div>
                  
                  <div className="text-2xl mx-6">
                    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex items-center border-b-4 border-blue-950 mt-12 px-2">
                      <p>Go at </p>
                      <a href={links[1].href} className='ml-2 text-3xl'>{ links[1].name }</a>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="p-4 flex items-center my-3 rounded-lg border-2 border-dotted border-blue-950">
                      <img data-aos="fade-up-right" data-aos-anchor-placement="center-bottom" src='' alt='My' className='border border-black rounded-full ' />
                      <div data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" className="ml-5">
                        <h4 className="border-b-2 border-blue-950">Hi, I'm Nicolás...</h4>
                        <p className="text-lg">And I'm a young developer, with 18 years old I began to learning web development and now I can do interesting things.</p>
                      </div>
                    </div>
                  </div>

                  <h3 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="text-center text-4xl border-b-2 border-blue-950 mt-20 mb-5">Comments: </h3>

                  {
                    user !== '' ? (
                      <>
                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                          <>
                            {
                              comments.length > 0 ? (
                                comments.map( comment => {
                                  return (
                                    <div className='rounded-lg shadow-md mb-5 p-2 shadow-neutral-900 bg-gray-400'>
                                      <div className="flex justify-between">
                                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                          <h5 className='ml-3 border-b font-black text-neutral-800 border-blue-950 px-5 text-2xl'>{ comment.username }</h5>
                                          <p className='ml-3 border-b text-neutral-800 border-blue-950 px-5 text-xl'> --> { comment.content }</p>
                                          <p className='ml-3 border-b text-neutral-800 border-blue-950 px-5 text-2xl'>{ comment.date }</p>
                                        </div>

                                        <div className='flex flex-col items-center'>
                                          {
                                            personalComments !== '' ? (
                                              personalComments.find( element => element._id === comment._id ) ? (
                                                <div>
                                                  <form action="/api/posts/post/edit" method='GET'>
                                                    <input type="hidden" name="content" value={comment.content} />
                                                    <input type="hidden" name="href" value={newUrl} />
                                                    <input type="hidden" name="id" value={comment._id} />
                                                    <button data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" type="submit">
                                                      <img src={editImg} alt='edit' className='rounded shadow shadow-neutral-900 w-7 mb-3 p-1' />
                                                    </button>
                                                  </form>

                                                  <form action="/api/posts/post/delete?_method=DELETE" method='POST'>
                                                    <input type="hidden" name="_method" value='DELETE' />
                                                    <input type='hidden' name='id' value={comment._id} />
                                                    <input type="hidden" name="href" value={newUrl} />
                                                    <button data-aos="fade-up-left" data-aos-anchor-placement="center-bottom" type="submit">
                                                      <img src={trashImg} alt='trash' className='rounded shadow shadow-neutral-900 w-7 mb-3 p-1' />
                                                    </button>
                                                  </form>
                                                </div>
                                              ) : (<div></div>)
                                            ) : (<div></div>)
                                          }
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })
                              ) : (
                                <h4 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-3xl text-center'>No Comments</h4>
                              )
                            }
                          </>
                        </div>

                        <h3 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-center text-4xl mt-20'>Add a Comment</h3>
                        <form data-aos="fade-up" data-aos-anchor-placement="center-bottom" action="/api/posts/post" method="post" className='flex flex-col items-center border-t-2 border-blue-950 pt-5'>
                          <input type="hidden" name="title" value={ post.title } />
                          <label data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='flex flex-col items-center w-11/12'>
                            Write a comment: 
                            <textarea name='comment' placeholder="Comment" className="w-full bg-transparent border-b border-blue-950 outline-none"></textarea>
                          </label>
                          
                          <button data-aos="fade-up" data-aos-anchor-placement="center-bottom" type='submit' className="text-2xl bg-blue-950 rounded-md mt-10 py-1 w-3/6 transition-all hover:opacity-80">Add</button>
                        </form>
                      </>
                    ) : (
                      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='flex flex-col items-center'>
                        <p className='text-3xl text-center'>Sorry, but you need to be registered!</p>
                        <img src='' alt='im' />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          ) : (
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">Not Found...</div>
          )
        }
      </div>
      <Aside />
    </div>
  )
}

export default Post;