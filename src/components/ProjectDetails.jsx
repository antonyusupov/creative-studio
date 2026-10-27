import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  const result = (
    <div className="min-h-screen w-full bg-black px-6 py-24 text-white">
      <div className=" max-w-7xl mx-auto">
        <Link
          to="/portfolio"
          className="inline-block mb-8 p-3 text-neutral-400 hover:text-white transition-colors duration-500"
        >
          ← Back to Portfolio
        </Link>
        <h2 className="text-4xl md:text-7xl font-semibold tracking-tight">
          {project.title}
        </h2>
        <p className="mt-3">{project.category}</p>
        <img
          className="mt-12 aspect-[4/5] md:aspect-video w-full rounded-2xl object-cover"
          src={project.image}
          alt={project.title.toLowerCase()}
        />
      </div>
    </div>
  );

  return result;
}

export default ProjectDetails;
