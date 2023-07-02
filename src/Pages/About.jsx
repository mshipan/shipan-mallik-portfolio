import { FiMapPin, FiMail } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="flex flex-row overflow-x-hidden"
    >
      <div className="basis-1/3 bg-aboutBg w-full h-screen bg-cover bg-no-repeat bg-center hidden md:block"></div>
      <div className="md:basis-2/3 p-3 md:p-10">
        <div className="mb-9">
          <h1 className="text-xl md:text-4xl font-oswald uppercase font-semibold mb-6">
            About Me
          </h1>
          <p className="font-poppins text-lg md:text-xl font-semibold mb-1">
            Hello! I&apos;am Shipan Mallik
          </p>
          <p className="text-sm md:text-base font-poppins mb-3">
            A MERN Stack Web Developer
          </p>
          <p className="text-xs md:text-sm font-poppins text-justify md:text-left w-full">
            As a talented React enthusiast with a computer science and
            engineering degree, I possess a strong foundation to excel as a
            front-end developer. With a passion for creating visually
            captivating and interactive web applications, I am eager to
            contribute, collaborate, and embark on an exciting journey as a
            React front-end developer.
          </p>
        </div>
        <div className="mb-9">
          <h1 className="text-xl md:text-3xl font-oswald uppercase font-semibold mb-6">
            My Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <p className="font-poppins text-base">Html5</p>
              <progress
                className="progress w-56"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">Css3</p>
              <progress
                className="progress w-56"
                value="85"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">JavaScript</p>
              <progress
                className="progress w-56"
                value="75"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">Bootstrap</p>
              <progress
                className="progress w-56"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">Tailwind</p>
              <progress
                className="progress w-56"
                value="95"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">React</p>
              <progress
                className="progress w-56"
                value="75"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">Node.js</p>
              <progress
                className="progress w-56"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">Express.js</p>
              <progress
                className="progress w-56"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">MongoDB</p>
              <progress
                className="progress w-56"
                value="60"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="font-poppins text-base">Firebase</p>
              <progress
                className="progress w-56"
                value="50"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div className="my-20">
          <h1 className="text-xl md:text-3xl font-oswald uppercase font-semibold mb-6">
            Contact with me
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex flex-col gap-2">
              <h1 className="font-oswald text-base md:text-xl uppercase">
                Address
              </h1>
              <div className="flex items-center gap-1">
                <FiMapPin />
                <p className="font-poppins text-sm">
                  1216 Mirpur 2, Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-oswald text-base md:text-xl uppercase">
                Call Me
              </h1>
              <div className="flex items-center gap-1">
                <BiPhoneCall />
                <p className="font-poppins text-sm">+880 1622 543390</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-oswald text-base md:text-xl uppercase">
                Mail Me
              </h1>
              <div className="flex items-center gap-1">
                <FiMail />
                <p className="font-poppins text-sm">shipanmallik95@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
