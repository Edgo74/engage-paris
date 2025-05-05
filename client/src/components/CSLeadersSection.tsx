import React from 'react';
import { Button } from '@/components/ui/button';
import { CloudLightning, TrendingUp, MessageSquare } from 'lucide-react';
import engageEventPhoto from '../assets/engage-event-photo.jpg';

const CSLeadersSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center font-montserrat">
          L'événement pour les leaders du CS
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Colonne de texte */}
          <div className="w-full md:w-1/2 p-4 md:p-6">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                  <CloudLightning className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Leaders & Insights</h3>
                  <p className="text-gray-700">Assistez aux keynotes de leaders CS et découvrez les outils qui transforment activation, rétention et expansion client.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Upskill CS</h3>
                  <p className="text-gray-700">Montez en compétence via des ateliers pratiques et renforcez votre impact sur le NRR de votre entreprise.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Connexion Stratégique</h3>
                  <p className="text-gray-700">Échangez entre pairs et repartez avec des best practices activables pour votre stratégie Customer Success.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 p-4">
            <img 
              src={engageEventPhoto} 
              alt="Engage Paris Event" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        
        {/* Bouton centré */}
        <div className="flex justify-center mt-12">
          <a href="#registration">
            <Button variant="default" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold">
              J'accède à l'événement
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CSLeadersSection;
