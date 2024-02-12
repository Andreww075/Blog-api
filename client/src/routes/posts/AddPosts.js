import { useEffect } from 'react';

const AddPosts = ({ hiddenMenu }) => {
  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(() => console.log('Bad Request'))
  })

  return (
    <div onClick={hiddenMenu} className="pt-32 flex flex-col items-center justify-center py-5 shadow-md shadow-neutral-400 rounded-b-3xl cursor-default">
      <div className="w-5/6 px-3 py-5 shadow-md shadow-gray-800 rounded-lg">
        <div>
          <h3 className="text-center text-5xl border-b-4 border-b-stone-800 pb-4">Add Post</h3>
        </div>
        <form action="/api/posts/addPosts?category=Category" method="POST" className="w-full flex flex-col py-2">
          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Title:
              <input type="text" 
                name="title" 
                placeholder="Title" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
                autoFocus 
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Img(url):
              <input type="text" 
                name="imgUrl" 
                placeholder="URL" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
                autoFocus 
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Header:
              <textarea 
                name="header"
                placeholder="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3"
                
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              First Part:
              <textarea 
                name="firstPart" 
                placeholder="First Text" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Second Part:
              <textarea 
                name="secondPart" 
                placeholder="Second Text" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Third Part:
              <textarea 
                name="thirdPart" 
                placeholder="Third Text" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Fourth Part:
              <textarea 
                name="fourthPart" 
                placeholder="Fourth Text" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Fifth Part:
              <textarea 
                name="fifthPart" 
                placeholder="Fifth Text" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Sixth Part:
              <textarea 
                name="sixthPart" 
                placeholder="Sixth Text" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
              />
            </label>
          </span>

          <span className="w-full py-3">
            <label className="flex flex-col items-center text-lg tracking-tighter">
              Category:
              <input type="text" 
                name="category" 
                placeholder="Category" 
                className="w-full rounded border-2 border-transparent border-b-black bg-transparent text-base outline-none px-3" 
                
                autoFocus 
              />
            </label>
          </span>

          <span className="flex justify-center items-center">
            <button type="submit" className="text-2xl bg-neutral-500 rounded-md mt-3 py-1 w-3/6 transition-all hover:bg-neutral-400 hover:text-neutral-800">Add</button>
          </span>
        </form>
      </div>
    </div>
  )
}

export default AddPosts;