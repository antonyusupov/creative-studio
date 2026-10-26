import { Link } from "react-router-dom";
import FeaturedWork from "../components/FeaturedWork";

const Home = () => {
  return (
    <main>
      <section className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-neutral-950">
        <div
          className="animate-cinematic-zoom absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className=" relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <span
            className="animate-fade-up inline-block uppercase"
            style={{ animationDelay: "0.2s" }}
          >
            independent creative studio
          </span>
          <h1
            style={{ animationDelay: "0.4s" }}
            className="animate-fade-up max-w-5xl text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl lg:text-8xl"
          >
            we create stories
          </h1>
          <p
            style={{ animationDelay: "0.6s" }}
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            Photography, film, and digital experiences that leave an impression.
          </p>
          <div
            style={{ animationDelay: "0.8s" }}
            className="animate-fade-up mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/portfolio"
              className="rounded-full bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-neutral-300"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="rounded-full border px-8 py-4 transition-colors hover:bg-white hover:text-black"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
      <FeaturedWork />
    </main>
  );
};

export default Home;
