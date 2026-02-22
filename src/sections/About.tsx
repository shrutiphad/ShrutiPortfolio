import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
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

const orbitPositions = [
  "top-[10%] left-[8%]",
  "top-[15%] right-[10%]",
  "top-[35%] left-[3%]",
  "top-[35%] right-[2%]",
  "top-[58%] left-[12%]",
  "top-[58%] right-[10%]",
  "bottom-[14%] left-[20%]",
  "bottom-[14%] right-[22%]",
  "top-[24%] left-[28%]",
  "top-[24%] right-[30%]",
  "bottom-[25%] left-[34%]",
  "bottom-[25%] right-[36%]",
  "top-[72%] left-[48%]",
];

export const AboutSection = () => {
  return (
    <section id="about" className="pb-24">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="CREATIVE-CONFIDENT-COMPETENT"
      />

      <div className="container mt-12 grid gap-6 md:grid-cols-2">
        <Card className="p-8">
          <div className="flex items-center gap-3 text-pink-300">
            <StarIcon className="size-5" />
            <h3 className="text-2xl font-semibold">System Design</h3>
          </div>
          <p className="mt-4 text-white/70">Currently learning and leveling up in Docker + architecture fundamentals.</p>
          <Image src={dockerImage} alt="Docker" className="mt-6 w-full rounded-2xl" />
        </Card>

        <Card className="relative overflow-hidden bg-gradient-to-br from-pink-600/30 via-pink-500/20 to-purple-500/30 p-8 md:row-span-2 min-h-[480px]">
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-pink-200">
              <StarIcon className="size-5" />
              <h3 className="text-2xl font-semibold">Tech Stack</h3>
            </div>
            <p className="mt-4 max-w-sm text-pink-100/90">
              One pink power-card with everything I use to build and ship products.
            </p>
          </div>

          {toolItems.map((item, index) => (
            <div
              key={item.title}
              className={`absolute ${orbitPositions[index]} flex items-center gap-2 rounded-full border border-pink-200/30 bg-pink-950/55 px-3 py-2 text-sm text-pink-100 backdrop-blur-sm animate-float`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <TechIcon component={item.iconType} />
              <span>{item.title}</span>
            </div>
          ))}
        </Card>

        <Card className="p-8">
          <div className="flex items-center gap-3 text-pink-300">
            <StarIcon className="size-5" />
            <h3 className="text-2xl font-semibold">Beyond the Code</h3>
          </div>
          <p className="mt-4 text-white/70">Articulate with pitching, hosting, and debating.</p>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7321824192943857664/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex"
          >
            <button
              className="group flex items-center gap-2 rounded-xl bg-[#0A66C2] px-6 py-3 font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-[#004182] active:scale-95"
            >
              <span>LinkedIn</span>
            </button>
          </a>
        </Card>
      </div>
    </section>
  );
};
