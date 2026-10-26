const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: "Commercial",
      category: "Brand Storytelling",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 2,
      title: "Photography",
      category: "Editorial Campaign",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    },
  ];

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
          {projects.map((item) => (
            <div key={item.id} className="group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold transition-colors group-hover:text-red-500">
                {item.title}
              </h3>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
