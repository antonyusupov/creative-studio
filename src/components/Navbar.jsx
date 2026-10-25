import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "Portfolio", "Services", "About"];
  const mobileLinks = [...navLinks, "Contact"];

  return (
    <header className="w-full border-b border-white/10 bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="text-2xl font-bold tracking-widest">
          NOIR<span className="text-neutral-500">.</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full border border-white/30 px-6 py-3 text-sm transition-colors hover:bg-white hover:text-black md:block"
        >
          Let's Talk
        </Link>
        <button
          type="button"
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isMenuOpen && (
        <ul className="flex flex-col gap-6 md:hidden">
          {mobileLinks.map((link) => (
            <li key={link}>
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-neutral-400 hover:text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
