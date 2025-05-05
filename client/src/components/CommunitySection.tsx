import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import engageLogoA from '../assets/engage-logo-a.png';
import communityImg from '../assets/engage-community.jpg';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-16 bg-lightBlue" id="opportunity">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 text-center">
          <div className="flex-shrink-0 mr-0 sm:mr-4 mb-3 sm:mb-0">
            <img src={engageLogoA} alt="Engage Logo" className="w-12 h-12 rounded-full inline-block" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-montserrat">
            Un événement qui valorise le partage entre pairs
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-bold text-primary mb-4">
              Notre passion au service d&apos;un objectif commun : l&apos;expérience client
            </h3>
            
            <p className="text-gray-700 mb-4">
              Rejoignez la communauté qui redéfinit le Customer Success de demain : vision stratégique, impact sur le NRR, IA &amp; automation, culture client durable.
            </p>
            
            <p className="text-gray-700 mb-6">
              Un véritable espace de partage, de mentorat et de solutions concrètes pour optimiser l&apos;activation, la rétention et l&apos;expansion client dans votre organisation.
            </p>
            
            <a href="#registration">
              <Button variant="default" className="bg-primary text-white px-6 py-3 rounded-full font-semibold mb-6">
                J&apos;accède à l&apos;événement
              </Button>
            </a>
            
            <div className="flex flex-wrap gap-4 items-center text-sm text-primary">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                Networking ciblé
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                Contenus activables
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                Leadership amplifié
              </span>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[300px] rounded-lg shadow-lg overflow-hidden">
              <img 
                src={communityImg}
                alt="Networking entre professionnels du Customer Success" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;