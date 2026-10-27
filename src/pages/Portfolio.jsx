import FeaturedWork from "../components/FeaturedWork";
import { useState } from "react";

const Portfolio = () => {
  const [category, setCategory] = useState("All");
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
      <div>
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Film")}>Film</button>
        <button onClick={() => setCategory("Photography")}>Photography</button>
        <p>Selected category: {category}</p>
      </div>

      <FeaturedWork category={category} />
    </main>
  );
};

export default Portfolio;
