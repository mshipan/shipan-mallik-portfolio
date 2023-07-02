import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-8 mb-10">
      <Link
        to="https://www.facebook.com/mallik.shipan"
        target="_blank"
        className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white"
      >
        <FaFacebookF />
      </Link>
      <Link
        to="https://twitter.com/mshipan657"
        target="_blank"
        className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white"
      >
        <FaTwitter />
      </Link>
      <Link
        to="https://www.instagram.com/mallik.shipan/"
        target="_blank"
        className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white"
      >
        <FaInstagram />
      </Link>
      <Link
        to="https://www.linkedin.com/in/shipan-mallik-410a13263/"
        target="_blank"
        className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white"
      >
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default SocialMedia;
