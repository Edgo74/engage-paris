import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import engageLogoA from '../assets/engage-logo-a.png';
import adeleDugrePhoto from '../assets/adele_dugre.png';
import helenaNaverbrantPhoto from '../assets/helena_naverbrant.png';
import sebastienBrunPhoto from '../assets/sebastien_brun.png';

// Définir les données des conférenciers
const speakersData = [
  {
    id: 1,
    name: 'Adèle Dugré',
    company: 'Dust',
    image: adeleDugrePhoto,
    title: "Comment faire de l'IA votre meilleur allié pour renforcer l'impact du Customer Success dans votre organisation ?",
    sessionType: 'Session Pratique - LEADER',
    schedule: '24/06/2025 | 14:00 - 15:15 | Garnier'
  },
  {
    id: 2,
    name: 'Sebastien Brun',
    company: 'SAP',
    image: sebastienBrunPhoto,
    title: "Customer Success payant : quand vos clients demandent l'addition et reviennent !",
    sessionType: 'Conférence - STRATÉGIE',
    schedule: '24/06/2025 | 11:45 - 12:15 | Auditorium'
  },
  {
    id: 3,
    name: 'Helena Näverbrant',
    company: 'Planhat',
    image: helenaNaverbrantPhoto,
    title: "Real world CS strategies to crush NRR! (en anglais)",
    sessionType: 'Conférence - STRATÉGIE',
    schedule: '24/06/2025 | 10:10 - 10:30 | Auditorium'
  }
];

const SpeakersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Fonction pour passer au conférencier suivant
  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % speakersData.length);
  };
  
  // Fonction pour revenir au conférencier précédent
  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + speakersData.length) % speakersData.length);
  };
  
  // Configuration du défilement automatique
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goToNext();
    }, 5000); // Change toutes les 5 secondes
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  // Pause du défilement automatique lors d'une interaction
  const handleNavigation = (direction: 'prev' | 'next') => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    if (direction === 'prev') {
      goToPrev();
    } else {
      goToNext();
    }
    
    // Reprendre le défilement automatique après l'interaction
    timerRef.current = setInterval(() => {
      goToNext();
    }, 5000);
  };
  
  const currentSpeaker = speakersData[currentIndex];
  
  return (
    <section className="py-16 bg-white" id="speakers">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="flex-shrink-0 mr-4">
              <img src={engageLogoA} alt="Engage Logo" className="w-12 h-12 rounded-full" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-montserrat">
              Des conférenciers inspirants
            </h2>
          </div>
          
          <div className="flex space-x-2">
            <span className="text-sm text-gray-500">
              {currentIndex + 1}/{speakersData.length}
            </span>
          </div>
        </div>
        
        <div className="relative">
          {/* Navigation - flèche gauche */}
          <button 
            onClick={() => handleNavigation('prev')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-md text-primary hover:bg-gray-100 focus:outline-none"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          {/* Carousel item */}
          <div 
            key={currentSpeaker.id}
            className="bg-primary text-white p-6 rounded-xl flex flex-col md:flex-row items-center transition-opacity duration-300"
          >
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <div 
                className="w-32 h-32 rounded-full mx-auto bg-cover bg-center border-4 border-white"
                style={{ backgroundImage: `url('${currentSpeaker.image}')` }}
              ></div>
              <h3 className="text-xl font-semibold mt-3 text-center">{currentSpeaker.name}</h3>
              <p className="text-center text-blue-100">{currentSpeaker.company}</p>
            </div>
            
            <div className="w-full md:w-3/4 md:pl-6">
              <div className="bg-white text-primary p-5 rounded-lg shadow-lg">
                <h4 className="font-bold mb-2">{currentSpeaker.title}</h4>
                <p className="text-sm mb-3">{currentSpeaker.sessionType}</p>
                <p className="text-sm">{currentSpeaker.schedule}</p>
              </div>
              
              {/* Bouton supprimé comme demandé */}
            </div>
          </div>
          
          {/* Navigation - flèche droite */}
          <button 
            onClick={() => handleNavigation('next')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-md text-primary hover:bg-gray-100 focus:outline-none"
            aria-label="Suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Indicateurs de pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {speakersData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (timerRef.current) {
                  clearInterval(timerRef.current);
                }
                setCurrentIndex(index);
                timerRef.current = setInterval(() => {
                  goToNext();
                }, 5000);
              }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
              }`}
              aria-label={`Voir le conférencier ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
