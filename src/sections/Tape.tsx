import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Interactive",
  "Responsive",
  "Secure",
  "Usable",
  "Scalable",
  "Reliable",
  "User-Friendly",
  "Maintainable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip">
      <div className="bg-gradient-to-r from-pink-500/70 to-purple-600/70 -rotate-3">
        <div className="flex">
          <div className="flex gap-6 py-4 animate-tape-scroll">
            {[...words, ...words, ...words].map((word, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="uppercase font-bold text-white text-sm">
                  {word}
                </span>
                <StarIcon className="size-5 text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};