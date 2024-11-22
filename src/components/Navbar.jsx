import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-3">
      <div className="hflex flex-shrink-0 items-center">
        <img className="h-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
        <a href="https://www.linkedin.com/in/harshad-shaik-a701a1237/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/harshad27-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/harshad_sshaik/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </nav>
  )
};

export default Navbar;