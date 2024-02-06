import { useEffect, useState } from 'react'

const EditComment = () => {
  const [ data, setData ] = useState('');

  const myUrl = window.location.href;
  const url = myUrl.split('3000');
  const newUrl = url[1];

  useEffect(() => {
    fetch(newUrl)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="cursor-default alice-regular tracking-tighter flex justify-center px-5 pt-28 pb-10 shadow-md shadow-neutral-400 rounded-b-3xl">
      <div className='rounded-md shadow-md shadow-gray-800 px-3 py-5 w-8/12'>
        <h4 className='text-center text-4xl'>Edit your comment:</h4>
        <form action='/api/posts/post/edit?_method=PUT' method='POST' className='flex flex-col items-center w-full' >
          <input type="hidden" name="_method" value='PUT' />
          <input type="hidden" name="href" value={ data[1] } />
          <input type="hidden" name="id" value={ data[2] } />
          <label className='flex flex-col items-center w-full'>
            Message:
            <textarea type='text' name='content' defaultValue={ data[0] } className='w-10/12 bg-transparent border-b border-neutral-700 outline-none'></textarea>
          </label>

          <button type='submit' className="text-2xl bg-neutral-500 rounded-md mt-10 py-1 w-3/6 transition-all hover:bg-neutral-400 hover:text-neutral-800">Edit</button>
        </form>
      </div>
    </div>
  )
}

export default EditComment;