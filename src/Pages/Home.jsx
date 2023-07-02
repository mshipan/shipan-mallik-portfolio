import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="bg-homeBg w-full h-screen bg-no-repeat flex flex-col items-center justify-center overflow-x-hidden"
    >
      <p className="text-2xl md:text-3xl font-oswald font-light">Welcome.</p>
      <h1 className="text-3xl md:text-7xl font-oswald font-normal mb-5">
        I&apos;m <span className="font-bold text-white">Shipan Mallik</span>
      </h1>
      <p className="text-lg md:text-3xl font-oswald font-normal text-white bg-blue-500 underline mb-3 p-1">
        A MERN Stack Developer
      </p>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          "Skilled with HTML5, CSS3", // initially rendered starting point
          1000,
          "Skilled with JavaScript, React",
          1000,
          "Skilled with Node.js, Express.js",
          1000,
          "MongoDB and Firebase",
          500,
        ]}
        speed={50}
        className="text-xl font-oswald font-normal text-white"
        repeat={Infinity}
      />
    </motion.div>
  );
};

export default Home;
