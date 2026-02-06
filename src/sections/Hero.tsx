import memojiImage from '@/assets/images/shruticodes.png';
import Image from 'next/image';
import  ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'

export const HeroSection = () =>
{
  return(
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.04]"
        style={{
        backgroundImage:`url(${grainImage.src})`
        }}>
      </div>
      
      <div className="absolute inset-0 size-[720px] border-2 top-1/2 left-1/2 
   -translate-x-1/2 -translate-y-1/2 rounded-full border-pink-300/5 
    shadow-[inset_0_0_80px_rgba(236,72,253,0.3)]"> </div>
      
      <div className='container -mt-17 -mb-1'>
      <div className ="flex flex-col items-center -mt-20">
          <Image
            src={memojiImage}
            className='size-[200px] rounded-full object-cover'
            alt="Person"
          />
        <div className='-mt-12 mb-1 '>
          <div className='bg-gray-950 border border-gray-800 px-5 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>
              Bugs are future pull requests.
            </div>
          </div>
        </div>
      </div>
        
          <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md-text-5xl text-center mt-8 tracking-wider'>
            Building websites <p></p>and 
          <p></p>  Exploring LLMs</h1>    
        <p className='mt-4 text-center text-white/60 md:text-lg'>
        I’m Shruti! an Aspiring Software & AI/ML Engineer,also who is proficient and excellent with words, while I convey tech to a non-tech person.
          </p>
          </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-10'>
        
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
