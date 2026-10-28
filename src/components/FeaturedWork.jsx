import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const FeaturedWork = ({ limit, category = "All" }) => {
  const filteredProjects = projects.filter((item) => {
    return (
      category === "All" || item.type.toLowerCase() === category.toLowerCase()
    );
  });

  const visibleProjects = filteredProjects.slice(
    0,
    limit ?? filteredProjects.length,
  );
  return (
    <section className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="uppercase text-gray-500">01/selected projects</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Selected Work
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            A collection of stories brought to life through film, photography,
            and creative direction
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.length === 0 ? (
            <p className="md:col-span-2 text-center text-neutral-400">
              No projects found.
            </p>
          ) : (
            visibleProjects.map((item) => (
              <Link
                to={`/portfolio/${item.slug}`}
                key={item.id}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="
                  absolute inset-0
                  flex justify-center items-center
                  bg-black/50
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  "
                  >
                    <span className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-0 group-hover:delay-200 text-xl font-semibold text-white">
                      VIEW PROJECT ↗
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-semibold transition-colors group-hover:text-red-500">
                  {item.title}
                </h3>
                <p>{item.category}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
