import React, { useEffect } from "react";

// Import sponsor logos
import meltingspotLogo from "../assets/sponsors/meltingspot.png";
import successchainLogo from "../assets/sponsors/successchain.png";
import planhatLogo from "../assets/sponsors/planhat.png";
import dustLogo from "../assets/sponsors/dust.png";
import kareschoolLogo from "../assets/sponsors/kareschool.png";
import rocketschoolLogo from "../assets/sponsors/rocketschool.png";
import gainsightLogo from "../assets/sponsors/gainsight.png";

const SponsorCarousel: React.FC = () => {
  const sponsorLogos = [
    { src: gainsightLogo, alt: "Gainsight" },
    { src: successchainLogo, alt: "SuccessChain" },
    { src: planhatLogo, alt: "Planhat" },
    { src: dustLogo, alt: "Dust" },
    { src: meltingspotLogo, alt: "MeltingSpot" },
    { src: kareschoolLogo, alt: "Kare School" },
    { src: rocketschoolLogo, alt: "Rocket School" },
  ];

  // Double the logos for seamless loop
  const allLogos = [...sponsorLogos, ...sponsorLogos];

  useEffect(() => {
    const root = document.documentElement;
    const updateSpeed = () => {
      if (window.innerWidth >= 768) {
        root.style.setProperty("--carousel-animation-duration", "15s");
      } else {
        root.style.setProperty("--carousel-animation-duration", "10s");
      }
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  // Inject CSS styles for smooth continuous scroll
  useEffect(() => {
    let styleElement = document.getElementById("sponsor-carousel-styles");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "sponsor-carousel-styles";
      document.head.appendChild(styleElement);
    }

    styleElement.innerHTML = `
      :root {
        --carousel-animation-duration: 15s;
      }

      @keyframes scroll-loop {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .carousel-track {
        display: flex;
        width: fit-content;
        animation: scroll-loop var(--carousel-animation-duration) linear infinite;
        will-change: transform;
      }

      @media (max-width: 767px) {
        :root {
          --carousel-animation-duration: 10s;
        }
      }
    `;

    return () => {
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <div className="bg-white py-6 md:py-8 shadow-md overflow-hidden">
      <div className="carousel-track">
        {allLogos.map((logo, index) => (
          <div
            key={`logo-${index}`}
            className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-24 sm:h-28 md:h-32 lg:h-36 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorCarousel;
