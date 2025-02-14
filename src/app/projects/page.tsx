import Link from "next/link";
import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiTypescript, SiExpress } from "react-icons/si";
import { BsCloudUpload } from "react-icons/bs";
import { FaNodeJs, FaStripe, FaReact } from "react-icons/fa";

// Import your images
import jbc from "../../../public/assets/jbc.png";
import mir from "../../../public/assets/mir.png";
import psolar from "../../../public/assets/psolar.png";
import spawn from "../../../public/assets/spawn.png";
import tlight from "../../../public/assets/tlight.png";
import versus from "../../../public/assets/versus.png";
import Sonus from "../../../public/assets/Sonus.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: any;
  liveLink: string;
  techStack: { name: string; icon: JSX.Element }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce platform with payment integration.",
    image: mir,
    liveLink: "https://pbrmir.com",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Stripe", icon: <FaStripe /> },
    ],
  },
  {
    id: 2,
    title: "Spawn Website",
    description: "A modern declutter website to showcase my work and skills.",
    image: spawn,
    liveLink: "https://spawn-nine.vercel.app/",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    id: 3,
    title: "Prosolar Website",
    description: "A task management app with drag-and-drop functionality.",
    image: psolar,
    liveLink: "https://prosolarng.com/",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    id: 4,
    title: "JBC Club Website",
    description: "A task management app with drag-and-drop functionality.",
    image: jbc,
    liveLink: "https://summit.jbcibadan.org/",
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Cloudinary", icon: <BsCloudUpload /> },
    ],
  },
  {
    id: 5,
    title: "Versus",
    description: "A task management app with drag-and-drop functionality.",
    image: versus,
    liveLink: "https://trafficpulse.pbrinsight.com.ng/",
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 6,
    title: "Sonus",
    description: "A task management app with drag-and-drop functionality.",
    image: Sonus,
    liveLink: "https://sonus.pbrinsight.com/",
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 7,
    title: "Task Management App",
    description: "A task management app with drag-and-drop functionality.",
    image: tlight,
    liveLink: "https://sonus.pbrinsight.com/",
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] font-font1">
      <div className="container mx-auto px-4">
        <div className="text-4xl font-bold text-center text-white mb-12">
          My Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center px-3 py-1 bg-teal-500/10 text-teal-300 text-sm rounded-full"
                    >
                      {tech.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
