import githubSvg from '../assets/github.svg'
import twitterSvg from '../assets/twitter.svg'
import instagramSvg from '../assets/instagram.svg'

const Footer = () => {
  let githubUrl = 'https://github.com/Andreww075?tab=repositories';
  let twitterUrl = 'https://twitter.com/TheFront_Andres';
  let instagramUrl = 'https://www.instagram.com/g__andres__075/';

  return (
    <div className="flex flex-col justify-center items-center tracking-tighter py-5 cursor-default">
      <p>Made by Andrés || Nvandres075@gmail.com</p>
      <div className='mt-5 flex justify-center items-center'>
        <span className='cursor-pointer shadow shadow-neutral-900 bg-zinc-300 rounded-full flex transition-all hover:scale-105 active:scale-95 active:opacity-50 mx-2 w-8'>
          <a href={githubUrl} target='_blank' className='w-full rounded-full'>
            <img 
              src={githubSvg} 
              alt=''
              className='w-full rounded-full'            
            />
          </a>
        </span>

        <span className='cursor-pointer shadow shadow-neutral-900 bg-zinc-300 rounded-full flex transition-all hover:scale-105 active:scale-95 active:opacity-50 mx-2 w-8'>
          <a href={twitterUrl} target='_blank' className='w-full rounded-full'>
            <img 
              src={twitterSvg} 
              alt=''
              className='w-full rounded-full'            
            />
          </a>
        </span>

        <span className='cursor-pointer shadow shadow-neutral-900 bg-zinc-300 rounded-full flex transition-all hover:scale-105 active:scale-95 active:opacity-50 mx-2 w-8'>
          <a href={instagramUrl} target='_blank' className='w-full rounded-full'>
            <img 
              src={instagramSvg} 
              alt=''
              className='w-full rounded-full'            
            />
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer;