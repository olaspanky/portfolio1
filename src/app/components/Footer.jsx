import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:olakareemomobolarinwa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-300 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="https://github.com/olaspanky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-300 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/omobolarinwa-olakareem-aa6322260"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://flowcv.com/resume/581lm5a5l6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-300 transition-colors duration-300"
            aria-label="Resume"
          >
            <FaFilePdf className="text-2xl" />
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} Olakareem Omobolarinwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
