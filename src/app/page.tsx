"use client";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { DiHtml5, DiCss3, DiSass, DiJavascript1, DiReact, DiNodejsSmall, DiAws } from 'react-icons/di';
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss, SiSanity, SiShadcnui } from 'react-icons/si';
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import Image from 'next/image';
import me from '../../public/me.png';
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const contentRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = {
    about: useRef<HTMLDivElement | null>(null),
    stack: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const scrollPosition = contentRef.current.scrollTop;

      // Get positions of all sections
      const aboutPos = sectionRefs.about.current?.offsetTop || 0;
      const stackPos = sectionRefs.stack.current?.offsetTop || 0;
      const experiencePos = sectionRefs.experience.current?.offsetTop || 0;
      const projectsPos = sectionRefs.projects.current?.offsetTop || 0;

      // Determine which section is currently in view
      if (scrollPosition < stackPos - 100) {
        setActiveSection('about');
      } else if (scrollPosition < experiencePos - 100) {
        setActiveSection('stack');
      } else if (scrollPosition < projectsPos - 100) {
        setActiveSection('experience');
      } 
    };

    const contentContainer = contentRef.current;
    if (contentContainer) {
      contentContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentContainer) {
        contentContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const sectionElement = sectionRefs[section].current;
    if (sectionElement && contentRef.current) {
      contentRef.current.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Head>
        <title>Olakareem Omobolarinwa - Portfolio</title>
        <meta name="description" content="Front-end Web Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col lg:flex-row text-white min-h-screen'>
        {/* Left Grid - Static */}
        <div className='lg:sticky top-0 lg:h-screen lg:w-5/12 flex flex-col gap-9 lg:px-9 px-3 py-10 font-font1 text-center lg:text-left'>
          <h1 className='text-4xl font-extrabold'>Olakareem Omobolarinwa</h1>
          <h2 className='text-2xl font-semibold text-teal-300'>Front-end Web Developer</h2>
          <div className='flex justify-center items-center'>
          <Image src={me} alt='Olakareem Omobolarinwa' className='rounded-full' width={200} height={200} />

          </div>
          <p className='text-lg'>I build Web and Mobile Products that guarantee awesome user experiences, scalability, and speed.</p>

          <nav className="sidebar hidden lg:flex flex-col gap-5 ml-5 mt-6">
            <button
              onClick={() => handleNavClick("about")}
              className={`text-left transition-transform duration-300 ease-in-out ${
                activeSection === "about"
                  ? "text-xl font-bold text-teal-300 scale-110 transform"
                  : "text-base font-normal text-white scale-100"
              }`}
            >
              About Me
            </button>

            <button
              onClick={() => handleNavClick("stack")}
              className={`text-left transition-transform duration-300 ease-in-out ${
                activeSection === "stack"
                  ? "text-xl font-bold text-teal-300 scale-110 transform"
                  : "text-base font-normal text-white scale-100"
              }`}
            >
              Tech Stack
            </button>

            <button
              onClick={() => handleNavClick("experience")}
              className={`text-left transition-transform duration-300 ease-in-out ${
                activeSection === "experience"
                  ? "text-xl font-bold text-teal-300 scale-110 transform"
                  : "text-base font-normal text-white scale-100"
              }`}
            >
              Experience
            </button>

          
          </nav>
        </div>

        {/* Right Grid - Scrollable */}
        <div
          ref={contentRef}
          className='lg:w-7/12 h-full flex flex-col gap-3 lg:gap-20 lg:px-20 px-3 py-10 lg:h-screen lg:overflow-y-auto font-font2'
        >
          <section ref={sectionRefs.about} className='leading-normal flex flex-col gap-3 h-auto my-9'>
            <h2 className='text-2xl font-semibold'>About Me</h2>
            <p>
            I am a results-driven Software Engineer with 5+ years of professional experience, specializing in JavaScript and its frameworks. I am passionate about building high-quality, scalable web applications that deliver exceptional user experiences. I thrive on tackling impactful challenges and continuously refining my skills to stay ahead of industry trends.

I have a proven track record of developing efficient, scalable solutions, with a focus on performance optimization and user satisfaction. With strong problem-solving abilities and a collaborative mindset, I excel at transforming complex requirements into clean, maintainable code. I'm eager to bring my expertise in modern web technologies and my commitment to innovation to contribute to your organization's success
            </p>
            <p>
              My Skillset has improved immensely these past years and I am dedicated to keep improving my stacks while also building useful products. My experience over the years has made
              me appreciate the web more and as technology improves and the world gets more digitalized, I am dedicated to be at the forefront of these changes and innovations.
            </p>
            <p>
              Whenever I am not writing codes, I am definitely creating art in some other form, So trust me when I say the Destiny of the web is in Good Hands.
            </p>
          </section>

          <section ref={sectionRefs.stack} className=" h-auto mt-9">
            <div className="mx-auto">
              <h2 className="text-2xl font-semibold mb-8">My Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* HTML */}
                <div className="flex flex-col items-center justify-center">
                  <DiHtml5 className="text-5xl mb-2 text-blue-500" />
                  <p className="text-center text-teal-300">HTML</p>
                </div>
                {/* CSS */}
                <div className="flex flex-col items-center justify-center">
                  <DiCss3 className="text-5xl mb-2 text-blue-500" />
                  <p className="text-center text-teal-300">CSS</p>
                </div>
                {/* SCSS */}
                <div className="flex flex-col items-center justify-center">
                  <DiSass className="text-5xl mb-2 text-pink-500" />
                  <p className="text-center text-teal-300">SCSS</p>
                </div>
                {/* Tailwind */}
                <div className="flex flex-col items-center justify-center">
                  <RiTailwindCssLine className="text-5xl mb-2 text-blue-900" />
                  <p className="text-center text-teal-300">Tailwind</p>
                </div>
                {/* SiShadcnui */}
                <div className="flex flex-col items-center justify-center">
                  <SiShadcnui className="text-5xl mb-2 text-black" />
                  <p className="text-center text-teal-300">Shadcnui</p>
                </div>
                {/* JavaScript */}
                <div className="flex flex-col items-center justify-center">
                  <DiJavascript1 className="text-5xl mb-2 text-yellow-500" />
                  <p className="text-center text-teal-300">JavaScript</p>
                </div>
                {/* React */}
                <div className="flex flex-col items-center justify-center">
                  <DiReact className="text-5xl mb-2 text-blue-400" />
                  <p className="text-center text-teal-300">React</p>
                </div>
                {/* Next.js */}
                <div className="flex flex-col items-center justify-center">
                  <RiNextjsFill className="text-5xl mb-2 text-black" />
                  <p className="text-center text-teal-300">Next.js</p>
                </div>
                {/* MongoDB */}
                <div className="flex flex-col items-center justify-center">
                  <SiMongodb className="text-5xl mb-2 text-green-600" />
                  <p className="text-center text-teal-300">MongoDB</p>
                </div>
                {/* Sanity */}
                <div className="flex flex-col items-center justify-center">
                  <SiSanity className="text-5xl mb-2 text-purple-600" />
                  <p className="text-center text-teal-300">Sanity</p>
                </div>
                {/* Express */}
                <div className="flex flex-col items-center justify-center">
                  <DiNodejsSmall className="text-5xl mb-2 text-green-500" />
                  <p className="text-center text-teal-300">Express</p>
                </div>
                {/* Tailwind CSS */}
                <div className="flex flex-col items-center justify-center">
                  <SiTailwindcss className="text-5xl mb-2 text-blue-400" />
                  <p className="text-center text-teal-300">Tailwind CSS</p>
                </div>
                {/* AWS */}
                <div className="flex flex-col items-center justify-center">
                  <DiAws className="text-5xl mb-2 text-yellow-500" />
                  <p className="text-center text-teal-300">AWS</p>
                </div>
              </div>
            </div>
          </section>

          <section ref={sectionRefs.experience} className='flex flex-col py-16 gap-3 h-auto mb-9'>
            <h2 className='text-2xl font-semibold'>Experience</h2>
            <p className='my-5'>I have worked on numerous freelance projects and contract jobs. Below are a few of my full-time roles:</p>
            {/* Cards */}
            <div className='rounded-xl hover:bg-white hover:bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2'>
              <div className='flex flex-col md:flex-row gap-1'>
                <div className='md:w-[30%]'>
                  2024-Present
                </div>
                <div className='md:w-[70%] flex flex-col gap-3'>
                  <h1 className='text-2xl font-semibold'>Software Developer</h1>
                  <h1 className='text-lg font-semibold'>PBR Life Sciences</h1>
                  <p>Executed pixel-perfect implementations of designs for customer applications <br/>Worked closely with the backend engineer to consume APIs using REST
                  <br/>Optimized web pages for faster startup time and responsiveness <br/>Managed the company WordPress site and increased traffic by over 50%
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>React</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>TailwindCss</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>GraphQL</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>gsap</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-xl hover:bg-white hover:bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 mt-6'>
              <div className='flex flex-col md:flex-row gap-1'>
                <div className='md:w-[30%]'>
                  2023-Present
                </div>
                <div className='md:w-[70%] flex flex-col gap-3'>
                  <h1 className='text-2xl font-semibold'>Frontend Engineer</h1>
                  <h1 className='text-lg font-semibold'>Linux Professional Institute Hub</h1>
                  <p>Executed pixel-perfect implementations of designs for customer applications <br/>Worked closely with the backend engineer to consume APIs using REST
                  <br/>Optimized web pages for faster startup time and responsiveness <br/>Managed the company WordPress site and increased traffic by over 50%
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>React</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>TailwindCss</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>GraphQL</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>gsap</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-xl hover:bg-white hover:bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 mt-6'>
              <div className='flex flex-col md:flex-row gap-1'>
                <div className='md:w-[30%]'>
                  2023-Present
                </div>
                <div className='md:w-[70%] flex flex-col gap-3'>
                  <h1 className='text-2xl font-semibold'>Frontend Engineer</h1>
                  <h1 className='text-lg font-semibold'>AOT Logistics</h1>
                  <p>
                    Developed and implemented responsive and interactive web applications for AOT Logistics, ensuring a seamless user
                    experience across devices and platforms.
                    <br/>Collaborated with the UI/UX designers to translate design mockups and wireframes into fully functional web interfaces, adhering
                    to best practices and design guidelines.
                    <br/>Worked closely with the backend team to integrate frontend functionalities with server-side APIs, ensuring smooth data flow
                    and communication between the frontend and backend systems.
                    <br/>Conducted regular code reviews and participated in team discussions to ensure code quality, consistency, and adherence to
                    coding standards.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>React</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>TailwindCss</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>GraphQL</button>
                    <button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>gsap</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section ref={sectionRefs.projects} className='flex flex-col py-16 gap-3 h-auto'>
          <div>
              <Footer/>
            </div>
          </section>


          
         
        </div>
      </div>
    </>
  );
};

export default Home;