import { motion } from "framer-motion";
import coding from "../assets/icons/coding.png";
import custom from "../assets/icons/custom.png";
import network from "../assets/icons/network.png";
import server from "../assets/icons/server.png";
import deploy from "../assets/icons/startup.png";
import testing from "../assets/icons/testing.png";
import webDev from "../assets/icons/web-development.png";
const Service = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="flex flex-row overflow-x-hidden"
    >
      <div className="basis-1/3 bg-serviceBg w-full h-screen bg-cover bg-no-repeat bg-center hidden md:block"></div>
      <div className="md:basis-2/3 p-3 md:p-10">
        <div className=" mb-9">
          <h1 className=" text-2xl md:text-4xl font-oswald uppercase font-semibold mb-6">
            Work Process
          </h1>

          <p className="text-sm font-poppins">
            As a MERN Stack web developer, the work process typically involves
            several key steps in order to successfully create and maintain
            websites or web applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div className="max-w-xs">
              <p className="font-poppins text-lg font-semibold">
                01. Requirement Gathering
              </p>
              <p className="font-poppins text-xs">
                I starts by gathering requirements from clients or stakeholders.
              </p>
            </div>
            <div className="max-w-xs">
              <p className="font-poppins text-lg font-semibold">
                02. Planning and Design
              </p>
              <p className="font-poppins text-xs">
                Once the requirements are clear, I creates a plan and design for
                the project.
              </p>
            </div>
            <div className="max-w-xs">
              <p className="font-poppins text-lg font-semibold">
                03. Front-End Development
              </p>
              <p className="font-poppins text-xs">
                I begins coding the front-end of the website or web application
                using HTML, CSS, and JavaScript, React and so on.
              </p>
            </div>
            <div className="max-w-xs">
              <p className="font-poppins text-lg font-semibold">
                04. Back-End Development
              </p>
              <p className="font-poppins text-xs">
                If the project requires server-side functionality or database
                integration, I works on the back-end development. I use Node.js,
                Express.js to build server logic, handle data storage and
                retrieval, and implement APIs.
              </p>
            </div>
            <div className="max-w-xs">
              <p className="font-poppins text-lg font-semibold">
                05. Integration and Testing
              </p>
              <p className="font-poppins text-xs">
                I integrates the front-end and back-end components, ensuring I
                work seamlessly.
              </p>
            </div>
            <div className="max-w-xs">
              <p className="font-poppins text-lg font-semibold">
                06. Deployment
              </p>
              <p className="font-poppins text-xs">
                Once the development and testing phases are complete, I deploys
                the website or web application to a production environment.
              </p>
            </div>
            <div>
              <p className="font-poppins text-lg font-semibold">
                07. Maintenance and Updates
              </p>
              <p className="font-poppins text-xs">
                After deployment, I monitors the website or web application,
                performs regular maintenance tasks, and addresses any issues
                that arise.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-9">
          <h1 className="text-xl md:text-3xl font-oswald uppercase font-semibold mb-6">
            Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-2">
              <img src={coding} className="w-8" alt="Web development icon" />
              <p className="font-poppins text-base">
                Full-Stack Web Development
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={custom} className="w-8" alt="Web development icon" />
              <p className="font-poppins text-base">
                Custom Web App Development
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={webDev} className="w-8" alt="Web development icon" />
              <p className="font-poppins text-base">
                API Development and Integration
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={server} className="w-8" alt="Web development icon" />
              <p className="font-poppins text-base">
                Database Design and Implementation
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={network} className="w-8" alt="Web development icon" />
              <p className="font-poppins text-base">Back-End Development</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={testing} className="w-8" alt="Web development icon" />
              <p className="font-poppins text-base">
                Testing and Quality Assurance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={deploy} className="w-8" alt="Web development icon" />
              <p className="font-poppins text-base">
                Deployment and Maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
