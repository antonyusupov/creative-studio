import FeaturedWork from "../components/FeaturedWork";
import { useState } from "react";
import { projects } from "../data/projects";

const Portfolio = () => {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(projects.map((item) => item.type))];
  return (
    <main className="bg-neutral-950 text-white">
      <section className="min-h-[70vh] px-6 flex items-center">
        <div className="mx-auto w-full max-w-7xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Portfolio — 001 / Selected Stories
          </p>

          <h1 className="text-4xl lg:text-7xl font-bold uppercase">
            our{" "}
            <span className="italic font-bold uppercase block tracking-wide mt-2">
              work
            </span>
          </h1>
          <hr className="p-1 bg-red-900 rounded-4xl border-0 w-3xs mt-5" />
          <p className="text-neutral-500 mt-3">
            Every frame tells a story. Every story deserves to be seen.
          </p>
        </div>
      </section>
      <div className=" mx-auto flex max-w-7xl flex-wrap gap-3 px-6 pb-12 justify-center items-center lg:items-start md:justify-start">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${
              category === item
                ? "bg-red-900 text-white"
                : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
            }`}
          >
            {item}{" "}
            {item === "All"
              ? projects.length
              : projects.filter((project) => project.type === item).length}
          </button>
        ))}
      </div>
      <p>Selected category: {category}</p>

      <FeaturedWork category={category} />
    </main>
  );
};

export default Portfolio;
