import { useParams, useNavigate } from "react-router-dom";
import { myProjects } from "../constants";
import ProjectShowcase from "../components/ProjectShowcase";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = myProjects.find((p) => p.id === Number(projectId));

  const handleClose = () => {
    navigate("/#projects");
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="heading-2 mb-4">Project not found</h1>
          <button
            onClick={() => navigate("/#projects")}
            className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return <ProjectShowcase project={project} onClose={handleClose} />;
};

export default ProjectDetailPage;
