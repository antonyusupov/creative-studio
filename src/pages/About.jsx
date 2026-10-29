import React from "react";

const About = () => {
  return (
    <section className="relative min-h-[80vh] p-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12 lg:items-center mx-auto max-w-7xl">
        <div className="group relative  overflow-hidden rounded-2xl mb-5 lg:w-1/2">
          <img
            className="aspect-[4/5] md:aspect-video w-full rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
            alt="movie image"
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>
        <div className="relative z-10 mb-5 lg:w-1/2">
          <p
            className="text-neutral-500 uppercase
           text-sm mb-2"
          >
            noir creative studio / about us
          </p>
          <h1 className="text-4xl uppercase font-bold lg:text-5xl mb-2">
            we don't just <span className="text-red-800">create.</span>
          </h1>
          <h3 className="text-2xl uppercase font-bold lg:text-3xl mb-2">
            we tell stories.
          </h3>
          <p className="text-neutral-400">
            Behind every frame is an idea. Behind every idea is a story worth
            telling.
          </p>
          <hr className="text-neutral-600" />
          <div className="flex justify-between mt-5">
            <p className="text-neutral-500 uppercase">
              film / photography / creative
            </p>
            <p className="text-red-800 text-lg">↗</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
