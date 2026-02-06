import memojiImage from '@/assets/images/shruticodes.png';
import Image from 'next/image';
import  ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg'
export const HeroSection = () =>
{
  return(
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div  className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.04]"
        style={{
        backgroundImage:`url(${grainImage.src})`
        }}>
      </div>
      <div className="size-[750px] hero-ring"> </div>
      <div className="size-[950px] hero-ring"> </div>
      <div className="size-[1150px] hero-ring"> </div>
      <div className="size-[1350px] hero-ring"> </div>
      <div className="size-[1550px] hero-ring"> </div>
      
        <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-pink-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-pink-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-pink-300" />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-15}>
        <SparkleIcon className="size-8 text-pink-300/40" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <SparkleIcon className="size-5 text-pink-300/40" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>
        <SparkleIcon className="size-10 text-pink-300/40" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <SparkleIcon className="size-10 text-pink-300/40" />
      </HeroOrbit>
      <HeroOrbit size={880} rotation={95}>
        <StarIcon className="size-28 text-pink-300" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-0}>
        <StarIcon className="size-3 text-pink-300" />
      </HeroOrbit>
    </div>
      <div className='container -mt-17 -mb-1'>
      <div className ="flex flex-col items-center -mt-20">
          <Image
            src={memojiImage}
            className='size-[300px] rounded-full object-cover '
            alt="Person"
          />
        <div className='-mt-12 mb-1  animate-tilt origin-center '>
          <div className='bg-gray-950 border -mt-4 border-gray-800 px-3.5 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 -ml-1 -mr-2 size-3 rounded-xl'></div>
            <div className='text-sl font-medium'>
              I think Bugs are future pull requests.
            </div>
          </div>
        </div>
      </div>
        
          <div className='max-w-lg mx-auto'>
        <h1 className='font-sans text-3xl md-text-7xl bold text-center mt-5 tracking-wider'>
            Building websites and 
          <p></p>  Exploring LLMs</h1>    
        <p className='mt-4 text-center text-white/60 md:text-lg'>
        I’m Shruti! an Aspiring Software & AI/ML Engineer,also who is proficient and excellent with words, while I convey tech to a non-tech person.
          </p>
          </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8'>
        
         <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl  hover:scale-105 transition'>
          <span className='semi-bold'>Glance My Work </span>
          <ArrowDown className="size-4"/>
            </button>
            
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
           <span> 🤝 </span>
           <span className='semi-bold'>Let's Collaborate </span>
            </button>
    
          </div>
       </div>
      </div>
     
    
  )
};
