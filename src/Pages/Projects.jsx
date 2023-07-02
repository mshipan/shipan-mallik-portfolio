import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectComponent/ProjectCard";
const Projects = () => {
  const myProjects = useLoaderData();
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="w-full h-screen px-3 py-10 overflow-x-hidden"
    >
      <h1 className="text-2xl md:text-3xl font-oswald uppercase font-semibold mb-6">
        My Projects
      </h1>
      <p className="text-base text-justify md:text-left font-poppins mb-3 p-1">
        As a MERN stack developers I creates some dynamic web applications using
        MongoDB, Express.js, React.js, and Node.js.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 px-10">
        {myProjects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
