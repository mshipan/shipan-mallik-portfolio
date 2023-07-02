import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id, projectName, projectBanner } = project;
  return (
    <div>
      <div className="border-8 border-gray-300 overflow-hidden">
        <img
          src={projectBanner}
          alt="Project Banner"
          className=" transition duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <Link to={`/projects/${_id}`} title="View Details">
        <h1 className="font-poppins text-sm my-3 underline hover:no-underline duration-500">
          {projectName}
        </h1>
      </Link>
    </div>
  );
};

export default ProjectCard;
