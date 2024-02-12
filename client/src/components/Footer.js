import githubSvg from '../assets/github.svg'
import twitterSvg from '../assets/twitter.svg'
import instagramSvg from '../assets/instagram.svg'

const Footer = ({ hiddenMenu, darkMode }) => {
  let githubUrl = 'https://github.com/Andreww075?tab=repositories';
  let twitterUrl = 'https://twitter.com/TheFront_Andres';
  let instagramUrl = 'https://www.instagram.com/g__andres__075/';

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" onClick={hiddenMenu} className={ darkMode === 0 ? ("flex flex-col justify-center items-center tracking-tighter bg-transparent text-blue-200 alice-regular py-5 cursor-default") : darkMode === 1 ? ("flex flex-col justify-center items-center bg-transparent tracking-tighter py-5 cursor-default") : ("flex flex-col justify-center items-center tracking-tighter dark:bg-transparent py-5 cursor-default") }>
      <p>Made by Andrés || Nvandres075@gmail.com</p>
      <div className='mt-5 flex justify-center items-center'>
        <span className='cursor-pointer shadow shadow-neutral-900 bg-blue-200 rounded-full flex transition-all hover:scale-105 active:scale-95 active:opacity-50 mx-2 w-8'>
          <a href={githubUrl} target='_blank' className='w-full rounded-full'>
            <img 
              src={githubSvg} 
              alt=''
              className='w-full rounded-full'            
            />
          </a>
        </span>

        <span className='cursor-pointer shadow shadow-neutral-900 bg-blue-200 rounded-full flex transition-all hover:scale-105 active:scale-95 active:opacity-50 mx-2 w-8'>
          <a href={twitterUrl} target='_blank' className='w-full rounded-full'>
            <img 
              src={twitterSvg} 
              alt=''
              className='w-full rounded-full'            
            />
          </a>
        </span>

        <span className='cursor-pointer shadow shadow-neutral-900 bg-blue-200 rounded-full flex transition-all hover:scale-105 active:scale-95 active:opacity-50 mx-2 w-8'>
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