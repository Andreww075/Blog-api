import CodeImg from '../../assets/Code.png'
import { Link } from 'react-router-dom'

const links = [
  {
    href: '/api/posts'
  },
  {
    href: '/'
  }
]

const About = ({ hiddenMenu }) => {
  return (
    <div onClick={hiddenMenu} className="alice-regular tracking-tighter flex flex-col items-center justify-between pt-40 pb-10 shadow-md shadow-neutral-400 rounded-b-3xl">
      <div className="flex justify-around items-center">
        <div className="w-5/12 border-x-2 border-dashed border-black px-4">
          <p>Have you even thought that you have been wasting your time? Because I do, however, now I have something to be better with. If you feel this away, learn about my short experience in the world of programming.</p>
          <p className="mt-3">I have several inspirations, obviously none as strong as the desire to share a little about myself to the most curious; well, this is a blog, my blog, so you know what's coming: you have to register to be able to find some comments, but it's not that restrictive, you can still see my posts.</p>
          <p className="mt-3">(Please register to find out what interests you).</p>
        </div>
        <div className="w-5/12 bg-neutral-400 rounded-lg">
          <img 
            src={CodeImg} 
            alt="The best" 
            className='rounded-lg origin-bottom -rotate-6 relative z-0'
          />
        </div>
      </div>
      
      <Link to={links[0].href} className='bg-blue-950 text-blue-200 text-center font-black mt-28 w-9/12 border border-dashed border-black text-2xl py-1 rounded-md tracking-tighter transition-all hover:opacity-50'>
        Look at my posts
      </Link>

      <div className='flex justify-around items-center bg-neutral-800 text-neutral-400 mt-14 w-full py-12'>
        <div className='w-5/12 flex flex-col items-center border-r-4 border-dashed border-neutral-400 py-24'>
          <div className='text-lg'>
            <h5 className='text-end'>Hi, I'm</h5>
            <h3 className='text-7xl'>Nicolás</h3>
            <h5 className='text-center text-xl'>and this is my blog!</h5>
          </div>
        </div>

        <div className='w-5/12 '>
          <h5 className='text-center text-2xl border-double border-b-4 border-neutral-500 pb-2'>If you're interested:</h5>
          <div className='pt-2 mb-10'>
            <h6 className='font-black border-b-2 border-neutral-400'>Age: </h6>
            <p className='text-end'>I'm in my wonderful 19</p>
          </div>

          <div className=' mb-10'>
            <h6 className='font-black border-b-2 border-neutral-400'>Studies: </h6>
            <p className='text-end'>Well, I completed the school, but i don't have any title. However, I studied by my own methods and now I can do that works!!!</p>
          </div>

          <div>
            <h6 className='font-black border-b-2 border-neutral-400'>Am I a attractive man?: </h6>
            <p className='text-end'> Well, the attractive is relative... But yes!!!</p>
          </div>
        </div>
      </div>

      <div className='mt-8 flex flex-col items-center'>
        <p className='text-xl'>Why did I post a photo of my code at the top?... I don't know.</p>
        <Link to={links[1].href} className='text-center mt-2 font-black text-xl text-blue-200 bg-blue-950 w-full py-1 rounded-md tracking-tighter transition-all hover:opacity-50'>
          Return at Home Page
        </Link>
      </div>
    </div>
  )
}

export default About;