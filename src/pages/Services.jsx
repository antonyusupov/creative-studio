import { services } from "../data/services";

const Services = () => {
  return (
    <main className="bg-neutral-950 text-white">
      <div className="mx-auto px-6 py-3 max-w-7xl animate-fade-up mb-3">
        <p className="uppercase text-neutral-400 mb-3 text-sm ">
          noir creative studio / services concepts
        </p>
        <h1 className="text-white text-4xl lg:text-7xl mb-3">
          What We <span className="text-red-900">Do.</span>
        </h1>
        <p className="text-neutral-300 mb-3">
          Visual storytelling. Creative direction. Digital presence.
        </p>
        <hr className="text-neutral-400" />
      </div>
      <section className="mx-auto  px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              className="bg-neutral-900 rounded-lg p-8 hover:bg-neutral-800 hover:-translate-y-1 transition-all duration-300"
              key={item.id}
            >
              <span className="text-red-800">0{item.id}</span>
              <h3 className="text-2xl mb-3 mt-3">{item.title}</h3>
              <p className="text-neutral-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
