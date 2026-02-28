export const SectionHeader = ({
  title,
  eyebrow,
  description,
} : {
    title: string;
eyebrow: string;
description: React.ReactNode;
  }) =>
{
  return (
    <>
      <div className="flex justify-center"> 
    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r 
     from-pink-300 to-purple-400 text-3xl 
     text-transparent bg-clip-text text-center"> 
      {eyebrow}
    </p> 
  </div> 

  <h2 className="font-serif text-3xl md:text-3xl text-center mt-6"> 
   {title}
  </h2> 
   
 
      <p className="font-sans text-center md:text-lg lg:text-xl
       text-pink-300/60 mt-4 max-w-xl mx-auto leading-relaxed">
  {description}
  <br/>  <br/>
</p>
      
    </>
  )
}

