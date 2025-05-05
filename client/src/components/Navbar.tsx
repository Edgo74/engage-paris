import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import engageParisLogo from "../assets/engage-paris-logo.png";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${scrolled ? "bg-black/60 py-1" : "bg-black/40 py-2"} backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md`}
    >
      <div
        className={`container mx-auto px-4 ${scrolled ? "py-1 md:py-2" : "py-2 md:py-4"} transition-all duration-300`}
      >
        <nav className="flex justify-between items-center">
          {/* Logo visible uniquement sur desktop */}
          <div className="hidden md:flex items-center">
            <img
              src={engageParisLogo}
              alt="Engage Paris Logo"
              className={`${scrolled ? "h-12" : "h-16"} mr-3 rounded-lg shadow-md transition-all duration-300`}
            />
          </div>
          {/* Menu de navigation centré sur mobile, à droite sur desktop */}
          <div className="flex flex-wrap justify-center w-full md:w-auto gap-1 md:gap-0 md:space-x-6 text-xs md:text-sm font-montserrat px-2 py-1 md:py-0 md:px-0 rounded-full border border-white/10 md:border-0">
            <a
              href="#event-features"
              className="hover:underline px-2 py-1 md:px-0 md:py-0 transition-colors duration-200 hover:bg-blue-500/20 rounded-full md:hover:bg-transparent md:rounded-none"
            >
              Événement
            </a>
            <a
              href="#event"
              className="hover:underline px-2 py-1 md:px-0 md:py-0 transition-colors duration-200 hover:bg-blue-500/20 rounded-full md:hover:bg-transparent md:rounded-none"
            >
              Présentation
            </a>
            <a
              href="#speakers"
              className="hover:underline px-2 py-1 md:px-0 md:py-0 transition-colors duration-200 hover:bg-blue-500/20 rounded-full md:hover:bg-transparent md:rounded-none"
            >
              Conférenciers
            </a>
            <a
              href="#opportunity"
              className="hover:underline px-2 py-1 md:px-0 md:py-0 transition-colors duration-200 hover:bg-blue-500/20 rounded-full md:hover:bg-transparent md:rounded-none"
            >
              Opportunité
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
