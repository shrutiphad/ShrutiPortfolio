"use client";
import sleepcareImage from "@/assets/images/sleepcare.jpeg";
import promptlyImage from "@/assets/images/promptly.jpeg";
import stayescapeImage from "@/assets/images/stayescape.jpeg";
import investoImage from "@/assets/images/investo.jpeg";
import signInterpreterImage from "@/assets/images/sign.jpeg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2026",
    title: "SleepCare",
    results: [
      
        { title: "Integrated ESP32 with SpO2, BPM, respiration, and presence sensors." },
        { title: "Streamed real-time vitals using WebSocket pipelines." },
        { title: "Visualized ECG/EEG waveforms on a MERN dashboard." },
      
    ],
     link: "https://github.com/shrutiphad/SleepCare-IoT",
    image: sleepcareImage,
  },

  {
    company: "Personal Project",
    year: "2025",
    title: "Promptly",
    results: [
        { title: "Built AI chatbot with authentication and persistent chat history." },
        { title: "Integrated LLM APIs with React and Express backend." },
        { title: "Optimized state and request pipelines for low latency." },
      
    ],
    link: "https://github.com/shrutiphad/SleepCare-IoT",
    image: promptlyImage,
  },

  {
    company: "Personal Project",
    year: "2024",
    title: "StayEscape",
    results: [
      { title: "Developed accommodation platform with role-based authentication and authorization." },
      { title: "Enabled image uploads via Cloudinary with owner-protected reviews." },
      { title: "Built REST APIs with MongoDB models for listings, users, and reviews." },
    ],
    link: "https://github.com/shrutiphad/StayEscape",
    image: stayescapeImage,
  },

  {
    company: "Personal Project",
    year: "2024",
    title: "Investo-Dashboard",
    results: [
      { title: "Built React UI using modular component architecture." },
      { title: "Designed scalable layouts and reusable components." },
      { title: "Improved UX with clean state-driven design." },
    ],
    link: "https://github.com/shrutiphad/Investo-DashBoard",
    image: investoImage,
  },

  {
    company: "Personal Project",
    year: "2025",
    title: "Real-Time-SignVision-AI",
    results: [
      { title: "Implemented real-time hand tracking with MediaPipe for gesture extraction." },
      { title: "Trained CNN models to classify ASL alphabets from live webcam input." },
      { title: "Integrated text-to-speech for converting predictions into audio output." },
    ],
    link: "https://github.com/shrutiphad/Real-Time-SignVision-AI",

    image: signInterpreterImage,
  },
  
];

// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="pb-16 lg:py-24">
//       <div className="container">
//         <div className="flex justify-center">
//           <p className="uppercase font-semibold tracking-widest bg-gradient-to-r
//            from-pink-300 to-purple-400
//            text-transparent bg-clip-text text-center">
//             Real-world Results
//             </p>
//             </div>
//         <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
//           My Work So Far</h2>
        
//         <p className="text-center md:text-lg lg:text-5xl
//          text-white/60 mt-4 max-w-md mx-auto"
//         >See how I build simple ideas into meaningful digital experiences.</p>

//         <div className="flex flex-col md:mt-20  mt-10 gap-20"> 
          
//           {portfolioProjects.map(project => (
//             <div key={project.title} className=" bg-gray-800 rounded-3xl 
//             relative z-0 overflow-hidden after:-z-10 after:content-[''] 
//             after:absolute after:inset-0 after:bg-purple-900 after:ring-8 after:ring-white/60
//             after:rounded-8xl after:outline-white/60 md:pt-12 lg:pt-16 lg:px-20 md:px-10
//             pt-8 px-8 after:pointer-events-none"> 
//               <div className="absolute inset-0 -z-10 opacity-5" style={{
//                 background:`url(${grainImage.src})`,
//               }} ></div>

//               <div className="lg:grid lg:grid-cols-2 gap-16"> 
//                 <div className="lg:pb-16">
//                 <div className="bg-gradient-to-r from-pink-300 to-purple-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
//                   <span>{project.company}</span>
//                   <span> &bull; </span>
//                 <span>{project.year}</span>
//                </div>
              
//               <h3 className="font-serif text-2xl mt-2  md:mt-5 md:text-4xl">{project.title}
//               </h3>
//               <hr className="border-t-2 border-white/5 mt-4 md:mt-5"></hr>
//               <ul className="flex flex-col gap-4 mt-4 md:mt-5">
//                 {project.results.map((result) => (
//                   <li className="flex gap-2 text-sm md:text-base text-white/50">
//                     <CheckCircleIcon className="size-5 md:size-6"/>
//                     <span>
//                       {result.title}
//                     </span>
//                     </li>
//                 ))}
//               </ul>
//               <a href={project.link}>
//                 <button className="bg-white text-gray-950 h-12 w-full
//                  md:w-auto px-6 rounded-xl font-semibold inline-flex
//                   items-center justify-center gap-2 mt-8">
//                       <span>Live Site</span>
//                       <ArrowUpRightIcon
//                       className ="size-4"/>
//                     </button>
//                   </a>
//                 </div>
//                 <div className="relative">
//               <Image src={project.image}
//                 alt={project.title}
//                 width={500} 
//                 height={300}
//                 className="mt-8 -mb-4 md:mb-0 
//                 lg:mt-0 lg:absolute lg:h-full
//                 lg:w-auto lg:max-w-none" />
//               </div>
//               </div>
//             </div>
//           ))}
//        </div>
//       </div>
//       </section>
//   );
// };



export const ProjectsSection = () => { 
  return ( 
    <section id="projects" className="pb-16 lg:py-24"> 
      <div className="container"> 
        <div className="flex justify-center"> 
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r 
           from-pink-300 to-purple-400 
           text-transparent bg-clip-text text-center"> 
            Real-world Results 
          </p> 
        </div> 

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6"> 
          My Work So Far
        </h2> 
         
        <p className="text-center md:text-lg lg:text-5xl 
         text-pink-300/60 mt-4 max-w-md mx-auto"> 
          See my journey with 1.5+ years of experience in Web Development 
        </p> 
 
        <div className="flex flex-col md:mt-20 mt-10 gap-20">  
           
          {portfolioProjects.map((project, i) => ( 
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: 0.4 }}
              className="relative bg-gray-800 rounded-3xl  
                z-0 overflow-hidden 

                before:absolute before:inset-0 before:-z-10 
                before:rounded-[28px] 
                before:bg-gradient-to-r 
                before:from-pink-500/40 
                before:via-purple-500 
                before:to-pink-500/50 
                before:blur-xl 
                before:opacity-70 

                ring-1 ring-pink-400/40 
                shadow-[0_0_40px_rgba(236,72,153,0.35)] 

                md:pt-12 lg:pt-16 lg:px-20 md:px-10 
                pt-8 px-8
              "
            >  
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ background: `url(${grainImage.src})` }}
              ></div> 
 
              <div className="lg:grid lg:grid-cols-2 gap-16">  
                <div className="lg:pb-16"> 
                  <div className="bg-gradient-to-r from-pink-300 to-purple-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"> 
                    <span>{project.company}</span> 
                    <span>&bull;</span> 
                    <span>{project.year}</span> 
                  </div> 
               
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title} 
                  </h3> 

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" /> 

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5"> 
                    {project.results.map((result, idx) => ( 
                      <li key={idx} className="flex gap-2 text-sm md:text-base text-white/50"> 
                        <CheckCircleIcon className="size-5 md:size-6"/> 
                        <span>{result.title}</span> 
                      </li> 
                    ))} 
                  </ul> 

                  <a href={project.link}> 
                    <button className="bg-white text-gray-950 h-12 w-full 
                      md:w-auto px-6 rounded-xl font-semibold inline-flex 
                      items-center justify-center gap-2 mt-8
                      hover:scale-105 transition">
                      <span>Live Site</span> 
                      <ArrowUpRightIcon className="size-4"/> 
                    </button> 
                  </a> 
                </div> 

                <div className="relative"> 
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={500}  
                    height={300} 
                    className="mt-8 -mb-4 md:mb-0  
                      lg:mt-0 lg:absolute lg:h-full 
                      lg:w-auto lg:max-w-none rounded-xl" 
                  /> 
                </div> 
              </div> 
            </motion.div> 
          ))} 

        </div> 
      </div> 
    </section> 
  ); 
};