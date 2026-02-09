import StarIcon from "@/assets/icons/star.svg"
import { ST } from "next/dist/shared/lib/utils";

const words = [
  "Interactive",
  "Responsive",
  "Secure",
  "Usable",
  "Scalable",
  "Reliable",
  "User-Friendly",
  "Maintainable",
]
export const TapeSection = () =>
{
  return (
    <div className="py-16 lg:py-24 overflow-x-clip " >
     <div className="bg-gradient-to-r from-pink-300/70 to-purple-400/70 -rotate-3 -mx-1  ">
     <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-none gap-4 py-3">
      {words.map((words) => (
        <div key={words} className="inline-flex gap-4 items-center">
          <span className="text-gray-900 uppercase font-extrabold text-sm">
            {words}</span>
          <StarIcon className="size-6 text-gray-900 -rotate-12" />
        </div>
         ))}
       </div>
      </div>  
     </div>
    </div>
    
  )
};
