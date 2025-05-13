import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SponsorCarousel from "./SponsorCarousel";
import eiffelTowerImage from "@/assets/paris-eiffel-tower.png";

const HeroBanner: React.FC = () => {
  return (
    <section className="relative" id="event">
      {/* Section avec image de la Tour Eiffel en arrière-plan */}
      <div className="relative text-white pt-28 md:pt-32">
        {" "}
        {/* Padding plus important sur mobile pour compenser la navbar */}
        {/* Image de fond de la Tour Eiffel */}
        <div className="absolute inset-0 z-0 h-[850px] md:h-[800px] top-0">
          <div className="relative w-full h-full">
            {/* En mobile, positionnement spécial de l'image pour voir la Tour Eiffel */}
            <img
              src={eiffelTowerImage}
              alt="Tour Eiffel Paris"
              className="w-full h-full object-cover md:object-center object-[70%_center]"
            />
            {/* Overlay moins opaque pour mieux voir l'image de fond */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>
        </div>
        {/* Contenu positionné au-dessus de l'image */}
        <div className="relative z-10">
          {/* Registration banner with countdown - Full width with white background */}
          <div className="w-full bg-black/40 backdrop-blur-sm py-4 px-3 md:px-4 flex justify-center items-center transition-all duration-300 border-b border-white/10 relative overflow-hidden">
            <div className="absolute -right-8 sm:right-0 top-0 bottom-0 bg-blue-500/20 w-24 sm:w-32 transform rotate-12 opacity-30 z-0"></div>
            <a href="#registration" className="w-full relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center max-w-7xl mx-auto px-2 gap-4 sm:gap-8">
                <div className="flex items-center w-full sm:w-auto justify-center mb-3 sm:mb-0">
                  <div className="mr-2 sm:mr-3 flex-shrink-0 bg-blue-500 text-white p-1 sm:p-1 rounded-full animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-shrink">
                    <span className="text-white text-center text-sm sm:text-sm md:text-base font-bold">
                      🎙️{" "}
                      <span className="inline-block">
                        Accès à Engage Paris 2025 en streaming{" "}
                      </span>
                    </span>
                    <div className="text-xs xs:text-sm text-blue-100 mt-0.5 sm:hidden text-center">
                      Boostez votre impact CS
                    </div>
                    <div className="text-xs text-blue-100 mt-0.5 hidden sm:block text-center">
                      Conférences & stratégies exclusives 2025
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full sm:w-auto justify-center">
                  <span className="bg-blue-600 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-sm sm:text-sm transition-all duration-300 hover:scale-105 hover:bg-blue-700 shadow-md flex items-center group whitespace-nowrap border border-white/20">
                    Accès streaming 2025
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Main hero content */}
          <div className="container mx-auto px-4 pt-20 pb-10 md:pb-16 min-h-[500px] flex flex-col justify-center items-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat leading-tight">
                <span className="text-white drop-shadow-lg">
                  La scène française
                </span>
                <span className="block text-blue-300 mt-2 drop-shadow-lg">
                  du Customer Success
                </span>
                <span className="block text-white mt-2 drop-shadow-lg">
                  se donne rendez-vous à Paris
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Donnez à vos équipes les clés pour booster la rétention client à
                long terme.
                <br className="hidden sm:block" />
                L'événement qui structure le métier de CSM en France :
                <span className="font-semibold ml-1 ">
                  Automatisation intelligente & accompagnement client
                </span>
              </p>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 mt-6 md:mt-12">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        disabled
                        variant="outline"
                        className="px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 text-white border-white/30 font-semibold text-sm sm:text-base backdrop-blur-sm"
                      >
                        Sold out - 2025 (présentiel)
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-primary border-primary text-sm p-2 shadow-lg">
                      <p>
                        Les places 2025 sont épuisées ! Préparez-vous pour 2026.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <a
                  href="#registration"
                  className="relative group block overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-md"></div>
                  <Button
                    variant="default"
                    className="relative px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-primary hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group-hover:scale-105 border-2 border-white/20"
                  >
                    <span className="mr-2 text-yellow-300">⭐</span>
                    <span>Réservez votre place 2026</span>
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor carousel */}
      <div className="w-full bg-white shadow-md relative z-10">
        <SponsorCarousel />
      </div>

      {/* Separator line */}
      <div className="w-full border-t border-gray-200"></div>

      {/* Event Features */}
      <div
        id="event-features"
        className="w-full bg-white text-primary pt-16 pb-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-montserrat text-primary">
            Structurez et valorisez le métier de CSM en France
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Colonne de texte */}
            <div className="w-full md:w-2/5 p-4 md:p-6 space-y-10">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0a3d85"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path
                      d="M10 9H6M16 9H14M14 5H6M14 17H6M18 13H6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17 20V4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Combattre la fatigue digitale
                  </h3>
                  <p className="text-sm text-gray-700">
                    Découvrez les stratégies prouvées pour maintenir
                    l'engagement client sur la durée et lutter contre l'abandon
                    qui impacte votre NRR.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0a3d85"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path
                      d="M9 11.5h6l-3-3-3 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 8.5v7M8 15.5v1.5M16 15.5v1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    One-to-Many efficace
                  </h3>
                  <p className="text-sm text-gray-700">
                    Maîtrisez l'hybridation entre automation intelligente et
                    accompagnement client pour maximiser votre impact CSM.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0a3d85"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path
                      d="M16 18a2 2 0 100-4 2 2 0 000 4zM8 10a2 2 0 100-4 2 2 0 000 4z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16 18c0-2.5-1.5-5-4-5s-4 2.5-4 5M8 10c0 2.5 1.5 5 4 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Réseau CSM francophone
                  </h3>
                  <p className="text-sm text-gray-700">
                    Rejoignez la communauté CSM française naissante. Échangez
                    vos expériences, renforcez vos compétences et développez
                    votre carrière CS.
                  </p>
                </div>
              </div>
            </div>

            {/* Vidéo */}
            <div className="w-full md:w-3/5 p-4">
              <div className="w-full max-w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/m_MXUaRtUDY?rel=0&autoplay=0&mute=0&controls=1&showinfo=0&modestbranding=1"
                  title="Vidéo de présentation Engage Paris"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bouton centré avec incitation à l'inscription */}
          <div className="flex flex-col items-center mt-16">
            <div className="bg-blue-50 p-2 rounded-full text-sm text-primary mb-3 animate-pulse">
              <span className="font-semibold">
                🎟️ Tentez de gagner un accès streaming gratuit 2025
              </span>
            </div>
            <a href="#registration" className="group">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-white/20">
                <span className="inline-block mr-1 sm:mr-2">💭</span>
                <span className="hidden sm:inline">
                  Je m'inscris dès maintenant
                </span>
                <span className="sm:hidden">Je m'inscris</span>
                <span className="ml-1 sm:ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Button>
            </a>
            <p className="text-sm sm:text-base text-gray-600 mt-3 font-bold">
              Recevez tous les contenus exclusifs d'Engage Paris
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
