import React, { useEffect } from "react";

const RegistrationForm: React.FC = () => {
  useEffect(() => {
    // Charger le script Tally quand le composant est monté
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Ajuster l'iframe après chargement pour une meilleure expérience utilisateur
    const adjustIframeStyle = () => {
      const iframes = document.querySelectorAll('.tally-form-embed iframe');
      iframes.forEach(iframe => {
        if (iframe instanceof HTMLIFrameElement) {
          iframe.style.height = '620px';
          iframe.style.overflow = 'hidden';
          iframe.style.borderRadius = '12px';
        }
      });
    };

    // Attendre que l'iframe soit chargé
    setTimeout(adjustIframeStyle, 1000);

    // Nettoyage du script quand le composant est démonté
    return () => {
      try {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      } catch (error) {
        console.error('Erreur lors du nettoyage du script:', error);
      }
    };
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50"
      id="registration"
    >
      <div className="container mx-auto px-4">
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="text-8xl font-extrabold text-primary">2026</div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 text-center font-montserrat relative z-10">
            <span className="inline-block bg-gradient-to-r from-primary to-blue-700 text-transparent bg-clip-text">
              Le futur du Customer Success se construit{" "}
            </span>{" "}
            avec vous.
          </h2>
          <p className="text-gray-700 mb-2 text-center max-w-3xl mx-auto text-base md:text-lg">
            Inscrivez-vous dès maintenant pour accéder au contenu exclusif
            réservé
            <br className="hidden md:block" />{" "}
            <span className="font-semibold">
              aux professionnels du Customer Success
            </span>
            .
          </p>
          <p className="text-blue-600 font-semibold mb-8 text-center animate-pulse">
            Participez au tirage au sort pour gagner un accès streaming gratuit
            2025 ! 🎲
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8 bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-blue-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-primary">
              Réservez votre place dès maintenant et propulsez votre carrière CSM !
            </h3>
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              GRATUIT
            </span>
          </div>
          
          {/* Intégration du formulaire Tally */}
          <div className="tally-form-embed relative overflow-hidden rounded-lg">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 z-10"></div>
            <iframe
              src="https://tally.so/embed/mVdPpa?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulaire d'inscription Engage Paris"
              className="bg-white p-2 shadow-inner"
              loading="lazy"
              id="tally-form-engage"
            ></iframe>

          </div>

          <p className="text-sm text-gray-600 text-center mt-6">
            On respecte votre vie privée : vos données sont utilisées uniquement
            pour Engage Paris. Zéro spam, zéro partage à des tiers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
