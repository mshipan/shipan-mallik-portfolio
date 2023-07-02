import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const SingleProjectDetails = () => {
  const project = useLoaderData();
  const {
    projectName,
    projectImages,
    frontendTechnology,
    backendTechnology,
    auth,
    database,
    others,
    projectGithub,
    liveLink,
    projectDescriptions,
  } = project;
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className=" w-full h-screen overflow-x-hidden"
    >
      <div className=" my-3 md:my-10 p-3 md:p-0">
        <h1 className="text-2xl md:text-3xl font-oswald uppercase font-semibold md:mb-6">
          Project Details
        </h1>
      </div>
      <div className="md:mt-20 p-3 md:pr-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="font-oswald mb-5 max-w-sm md:max-w-full">
              Project Name: {projectName}
            </h1>
            <div className="w-3/4 bg-gray-300 p-1">
              <Carousel className="text-center" autoPlay infiniteLoop>
                {projectImages.map((pImage, index) => (
                  <div key={index}>
                    <img src={pImage} alt="" />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="flex w-3/4 gap-5 justify-center mt-7">
              <Link to={projectGithub} target="_blank">
                <button className="px-5 py-2 bg-blue-500 hover:bg-white border border-blue-500 text-white hover:text-blue-500 duration-500">
                  Github
                </button>
              </Link>
              <Link to={liveLink} target="_blank">
                <button className="px-5 py-2 bg-wite hover:bg-blue-500 border border-blue-500 text-blue-500 hover:text-white duration-500">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>
          <div className="my-5 md:my-0">
            <h1 className="font-oswald mb-5">Project Details: </h1>
            <div className="w-2/3 md:w-full ">
              <table className="table">
                <tbody>
                  <tr className="border border-gray-300">
                    <td className="border border-gray-300">FrontEnd</td>
                    <td>{frontendTechnology}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="border border-gray-300">BackEnd</td>
                    <td>{backendTechnology}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="border border-gray-300">Auth</td>
                    <td>{auth}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="border border-gray-300">Database</td>
                    <td>{database}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="border border-gray-300">Others</td>
                    <td>{others}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-10 p-3 md:p-0">
        <h1 className="font-oswald mb-5">Project Details: </h1>
        <div className="w-2/3 md:w-full text-justify md:text-left">
          {projectDescriptions.map((pD, index) => (
            <div key={index}>
              <li className="list-disc">{pD}</li>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProjectDetails;
