"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-20 bg-[#0a0a0a] mb-20">
      <div className="flex space-x-8">
        <Link
          href="/"
          className={`flex items-center text-white transition-colors duration-300 ${
            router.pathname === "/" ? "text-teal-500" : "hover:text-teal-500"
          }`}
        >
          <FaHome className="mr-1" />
          Home
        </Link>
        <Link
          href="/projects"
          className={`flex items-center text-white transition-colors duration-300 ${
            router.pathname === "/projects" ? "text-teal-500" : "hover:text-teal-500"
          }`}
        >
          <FaProjectDiagram className="mr-1" />
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
