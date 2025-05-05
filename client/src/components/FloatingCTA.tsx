import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le CTA flottant après avoir défilé 60% de la hauteur de la fenêtre
      const scrollThreshold = window.innerHeight * 0.6;
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-700 to-blue-900 z-50 transition-transform duration-300 shadow-xl ${isVisible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="container mx-auto py-3 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-3 sm:mb-0 text-white">
            <p className="text-sm sm:text-base font-semibold">
              🎚️{" "}
              <span className="hidden md:inline">
                Rejoignez la famille CSM française | {" "}
              </span>{" "}
              Inscrivez-vous{" "}
            </p>
            <p className="text-xs text-blue-200 hidden sm:block"></p>
          </div>

          <a
            href="#registration"
            className="group transition-all duration-300 transform hover:scale-105"
          >
            <Button className="bg-white text-primary hover:bg-blue-100 font-bold rounded-full text-sm px-6 py-3 shadow-lg">
              J'accède à l'événement
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </a>
        </div>
      </div>

      {/* Bouton de fermeture */}
      <button
        className="absolute top-1 right-1 text-white/70 hover:text-white p-1"
        onClick={() => setIsVisible(false)}
        aria-label="Fermer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default FloatingCTA;
