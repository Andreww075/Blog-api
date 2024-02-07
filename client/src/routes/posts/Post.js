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

const Post = () => {
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
    <div className="cursor-default alice-regular tracking-tighter flex justify-between px-5 pt-24 pb-10 shadow-md shadow-neutral-400 rounded-b-3xl">
      <div className="flex flex-col items-center w-9/12">
        {
          post !== '' ? (
            <div className="w-full">
              <div className="flex py-2 mb-8 border-y border-neutral-400 w-full">
                <p className="mr-6"><span>Category: </span>{post.category}</p>
                <p><span>Date: </span>{post.date}</p>
              </div>

              <div className="flex w-full py-3 border-b border-neutral-400">
                <div className="w-2/12 flex flex-col items-center">
                  <img src={eyeImg} alt='heartImg' className='w-6/12' />
                  <p>{ post.views }</p>
                </div>

                <div className="border-l border-neutral-400 pl-8 w-full">
                  <div className="w-full">
                    <img src={ bookImg } alt={ post.title } className='w-full rounded-lg' />
                    <h3 className='text-4xl acme-regular py-4 border-b border-neutral-500 mx-20 text-center mb-10'>{ post.title }</h3>
                    <p className='text-xl gowun-batang-regular text-neutral-800 mb-4'>{ post.header }</p>
                    <p className='text-xl gowun-batang-regular text-neutral-800'>{ post.firstPart }</p>
                    <p className='text-xl gowun-batang-regular text-neutral-800 bg-neutral-300 py-10 px-10 my-4'>{ post.secondPart }</p>
                    <p className='text-xl gowun-batang-regular text-neutral-800'>{ post.thirdPart }</p>
                    <p className='text-xl gowun-batang-regular text-neutral-800 bg-neutral-300 py-10 px-10 my-4'>{ post.fourthPart }</p>
                    <p className='text-xl pb-2 gowun-batang-regular text-neutral-800'>{ post.fifthPart }</p>
                    <p className='text-xl gowun-batang-regular text-neutral-800 bg-neutral-300 py-10 px-10 my-4'>{ post.sixthPart }</p>
                    <div className='flex justify-center'>
                      <Link to={links[0].href} className="text-neutral-600 underline mt-28">{links[0].name}</Link>
                    </div>
                  </div>
                  
                  <div className="text-2xl mx-6">
                    <div className="flex items-center border-b border-neutral-500 mt-5 px-2">
                      <p>Go at </p>
                      <a href={links[1].href} className='ml-2 text-3xl'>{ links[1].name }</a>
                    </div>
                    <div className="p-4 flex items-center my-3 rounded-lg border-2 border-dotted border-neutral-800">
                      <img src='' alt='My' className='border border-black rounded-full ' />
                      <div className="ml-5">
                        <h4 className="border-b border-neutral-500">Hi, I'm Nicolás...</h4>
                        <p className="text-lg">And I'm a young developer, with 18 years old I began to learning web development and now I can do interesting things.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-center text-4xl border-b-2 border-neutral-600 mb-5">Comments: </h3>

                  {
                    user !== '' ? (
                      <>
                        <div>
                          <>
                            {
                              comments.length > 0 ? (
                                comments.map( comment => {
                                  return (
                                    <div className='rounded-lg shadow-md mb-5 p-2 shadow-neutral-700 bg-gray-300'>
                                      <div className="flex justify-between">
                                        <div>
                                          <h5 className='ml-3 border-b border-neutral-600 px-5 text-2xl text-zinc-800'>{ comment.username }</h5>
                                          <p className='ml-3 border-b border-neutral-600 px-5 text-xl text-zinc-700'> --> { comment.content }</p>
                                          <p className='ml-3 border-b border-neutral-600 px-5 text-2xl text-zinc-800'>{ comment.date }</p>
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
                                                    <button type="submit">
                                                      <img src={editImg} alt='edit' className='rounded shadow shadow-neutral-600 w-7 mb-3 p-1' />
                                                    </button>
                                                  </form>

                                                  <form action="/api/posts/post/delete?_method=DELETE" method='POST'>
                                                    <input type="hidden" name="_method" value='DELETE' />
                                                    <input type='hidden' name='id' value={comment._id} />
                                                    <input type="hidden" name="href" value={newUrl} />
                                                    <button type="submit">
                                                      <img src={trashImg} alt='trash' className='rounded shadow shadow-neutral-600 w-7 mb-3 p-1' />
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
                                <h4 className='text-3xl text-center text-neutral-700'>No Comments</h4>
                              )
                            }
                          </>
                          
                          <h4 onClick={consoles}>Show data</h4>
                        </div>

                        <h3 className='text-center text-4xl mt-5'>Add a Comment</h3>
                        <form action="/api/posts/post" method="post" className='flex flex-col items-center border-t-2 border-neutral-600 pt-5'>
                          <input type="hidden" name="title" value={ post.title } />
                          <label className='flex flex-col items-center w-11/12'>
                            Write a comment: 
                            <textarea name='comment' placeholder="Comment" className="w-full bg-transparent border-b border-neutral-700 outline-none"></textarea>
                          </label>
                          
                          <button type='submit' className="text-2xl bg-neutral-500 rounded-md mt-10 py-1 w-3/6 transition-all hover:bg-neutral-400 hover:text-neutral-800">Add</button>
                        </form>
                      </>
                    ) : (
                      <div className='flex flex-col items-center'>
                        <p className='text-3xl text-center text-neutral-700'>Sorry, but you need to be registered!</p>
                        <img src='' alt='im' />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          ) : (
            <div>Not Found...</div>
          )
        }

        

      </div>

      <Aside />
    </div>
  )
}

export default Post;