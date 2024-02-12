import { useEffect, useState } from 'react'

const EditComment = ({ hiddenMenu, darkMode }) => {
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
    <div onClick={hiddenMenu} className={ darkMode === 0 ? ("cursor-default alice-regular tracking-tighter flex justify-center px-5 pt-28 pb-10 shadow-md shadow-neutral-800 text-blue-200 rounded-b-3xl") : darkMode === 1 ? ("cursor-default alice-regular tracking-tighter flex justify-center px-5 pt-28 pb-10 shadow-md shadow-neutral-400 rounded-b-3xl") : ("cursor-default alice-regular tracking-tighter flex justify-center px-5 pt-28 pb-10 shadow-md shadow-neutral-400 rounded-b-3xl dark:shadow-neutral-800 dark:text-blue-200") }>
      <div className='rounded-md shadow-md shadow-neutral-900 px-3 py-5 w-8/12'>
        <h4 className='text-center text-4xl font-black mb-10 border-b-4 border-blue-950'>Edit your comment:</h4>
        <form action='/api/posts/post/edit?_method=PUT' method='POST' className='flex flex-col items-center w-full' >
          <input type="hidden" name="_method" value='PUT' />
          <input type="hidden" name="href" value={ data[1] } />
          <input type="hidden" name="id" value={ data[2] } />
          <label className='flex flex-col items-center w-full'>
            Message:
            <textarea type='text' name='content' defaultValue={ data[0] } className='w-10/12 bg-transparent border-b-2 border-blue-950 outline-none'></textarea>
          </label>

          <button type='submit' className="text-2xl bg-blue-950 rounded-md mt-10 py-1 w-3/6 transition-all hover:opacity-80">Edit</button>
        </form>
      </div>
    </div>
  )
}

export default EditComment;