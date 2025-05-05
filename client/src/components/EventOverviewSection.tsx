import React from 'react';
import { Button } from '@/components/ui/button';
import { Handshake } from 'lucide-react';

const EventOverviewSection: React.FC = () => {
  return (
    <section className="py-8 bg-[#f6f9fe]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-montserrat">
            Engage Paris en bref
          </h2>
        </div>
        
        {/* 4 cartes verticales pour la version desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Carte 1 */}
          <div className="bg-white p-5 rounded-lg shadow-sm h-full flex flex-col items-center text-center">
            <div className="mb-4">
              <span className="text-4xl" role="img" aria-label="experts">👥</span>
            </div>
            <p className="text-gray-700">+300 experts du Customer Success rassemblés pour une journée de partage de bonnes pratiques et d'innovations.</p>
          </div>
          
          {/* Carte 2 */}
          <div className="bg-white p-5 rounded-lg shadow-sm h-full flex flex-col items-center text-center">
            <div className="mb-4">
              <span className="text-4xl" role="img" aria-label="stratégies">🚀</span>
            </div>
            <p className="text-gray-700">Des stratégies pratiques qui maximisent votre valeur ajoutée dans la fidélisation client.</p>
          </div>
          
          {/* Carte 3 */}
          <div className="bg-white p-5 rounded-lg shadow-sm h-full flex flex-col items-center text-center">
            <div className="mb-4">
              <span className="text-4xl" role="img" aria-label="networking">🤝</span>
            </div>
            <p className="text-gray-700">Échangez avec des experts du CS lors de networking ciblées sur la rétention et l'expansion.</p>
          </div>

          {/* Carte 4 */}
          <div className="bg-white p-5 rounded-lg shadow-sm h-full flex flex-col items-center text-center">
            <div className="mb-4">
              <span className="text-4xl" role="img" aria-label="expertise">💡</span>
            </div>
            <p className="text-gray-700">Bénéficiez de l'expertise de leaders CS partageant des cas d'usage concrets et des stratégies d'activation client.</p>
          </div>
        </div>
        
        {/* Call to action renforcé */}
        <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-3 font-montserrat">
            <span className="text-blue-600">Participons ensemble</span> au succès du CS en France 
          </h3>
          <p className="text-gray-700 mb-5 text-sm md:text-base max-w-md mx-auto">
            "Un CSM qui n'est pas soutenu, c'est un client perdu." Rejoignez la communauté qui structure le métier de CSM en France.
          </p>
          <a href="#registration" className="inline-block">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
              <Handshake className="w-4 h-4 mr-2" /> Rejoindre la communauté CSM
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventOverviewSection;
