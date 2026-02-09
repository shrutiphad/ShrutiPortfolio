import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import dockerImage from "@/assets/images/docker img.png";
import Image from "next/image";
import CssIcon from "@/assets/icons/css3.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import LinuxIcon from "@/assets/icons/linux.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import NextIcon from "@/assets/icons/nextdotjs.svg";
import NodeIcon from "@/assets/icons/nodedotjs.svg";
import PostgresIcon from "@/assets/icons/postgresql.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import PythonIcon from "@/assets/icons/python.svg";
import { TechIcon } from "@/components/TechIcon";


const toolItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: NextIcon },
  { title: "Node.js", iconType: NodeIcon },
  { title: "Express", iconType: ExpressIcon },
  { title: "MongoDB", iconType: MongoIcon },
  { title: "PostgreSQL", iconType: PostgresIcon },
  { title: "HTML", iconType: HtmlIcon },
  { title: "CSS", iconType: CssIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Linux", iconType: LinuxIcon },
];


export const AboutSection = () => {
  return (
  <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="CREATIVE-CONFIDENT-COMPETENT"
      />
      <div>

        <Card>
          <div>
            <StarIcon />
            <h3>System Design</h3>
            <p>Currently learning and leveling up in</p>
            </div>
            <Image src={dockerImage} alt ="docker" />
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My ToolBox</h3>
            <p>Currently learning and leveling up in</p>
            </div>
          <div>
            {toolItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
                </div>
            ))}
           </div>
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>Beyond the Code</h3>
            <p>Articulate with : Pitching, Hosting & Debating</p>
            <a
  href="https://www.linkedin.com/feed/update/urn:li:activity:7321824192943857664/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="group flex items-center gap-2 px-6 py-3 rounded-xl 
    bg-[#0A66C2] text-white font-semibold tracking-wide
    hover:bg-[#004182] transition-all duration-300
    hover:scale-105 active:scale-95 shadow-lg"
  >
    <span>LinkedIn</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 group-hover:translate-x-1 transition"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.553V9h3.566v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
    </svg>
  </button>
</a>
</div>
          
        </Card>

      </div>
    </div>
  )  
};
