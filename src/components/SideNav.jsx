import { Link } from "react-router-dom";
import myPhoto from "../assets/my-photo.jpg";
import fileDownload from "react-file-download";

import SocialMedia from "./SocialMedia";
const SideNav = () => {
  const handleDownload = () => {
    const fileUrl = "../../public/Resume_of_Shipan_Mallik.pdf";
    const fileName = "Resume_of_Shipan_Mallik.pdf";
    fileDownload(fileUrl, fileName);
  };
  return (
    <div className=" md:py-16">
      <div className="flex flex-col items-center gap-5 md:mb-10 mb-4">
        <img
          src={myPhoto}
          alt="My Photo"
          className="w-56 h-56 rounded-full hidden md:block"
        />
        <h1 className="font-oswald font-thin text-3xl">Shipan Mallik</h1>

        <button
          onClick={handleDownload}
          className="animate-bounce border-b border-black font-oswald"
        >
          Download My Resume.
        </button>
      </div>
      <div className="mb-10">
        <ul className="text-2xl font-oswald font-semibold flex flex-col items-center gap-6">
          <li>
            <Link to="/" className="underline hover:no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="underline hover:no-underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="underline hover:no-underline">
              Service
            </Link>
          </li>
          <li>
            <Link to="/projects" className="underline hover:no-underline">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/education" className="underline hover:no-underline">
              Education
            </Link>
          </li>
          <li>
            <Link to="/contact" className="underline hover:no-underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center gap-8 mb-10">
        <SocialMedia></SocialMedia>
      </div>
      <div className="flex justify-center">
        <h1>
          © 2023 Portfolio Made by{" "}
          <Link to="#" className=" underline hover:no-underline">
            Shipan_Mallik.
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default SideNav;
