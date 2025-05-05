import React from "react";
import engageLogoA from "../assets/engage-logo-a.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BrainCircuit, TrendingUp, LineChart, Bot } from "lucide-react";

const AISection: React.FC = () => {
  return (
    <section
      className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 text-primary"
      id="presentation"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-10 sm:space-x-4 space-y-3 sm:space-y-0">
          <div className="w-12 h-12 flex-shrink-0">
            <img src={engageLogoA} alt="Engage Logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat px-2">
            Anticipez, engagez, réussissez grâce à l&apos;IA
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-10">
            <p className="text-lg md:text-xl mb-4 text-blue-800">
              Avec <span className="font-semibold">Engage Paris</span>, l&apos;IA
              n&apos;est pas une option, c&apos;est votre{" "}
              <span className="font-bold">premier levier de succès</span>
            </p>
            <p className="text-base md:text-lg text-blue-800 font-medium">
              L&apos;IA offre{" "}
              <span className="font-bold">
                une nouvelle dimension
              </span>{" "}
              aux enjeux{" "}
              <span className="font-bold">Customer Success</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-3">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <BrainCircuit size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Data-driven Segmentation</h3>
              </div>
              <p className="text-gray-700">Segmentez votre clientèle avec précision grâce à l&apos;IA et maximisez l&apos;impact de vos actions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-3">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <Bot size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold">Automatisation intelligente</h3>
              </div>
              <p className="text-gray-700">Automatisez les tâches répétitives et concentrez-vous sur la création de valeur pour vos clients</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-3">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <LineChart size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Prédiction du churn</h3>
              </div>
              <p className="text-gray-700">Anticipez les désabonnements avant qu&apos;ils ne surviennent et développez des stratégies de rétention efficaces</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-3">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <TrendingUp size={24} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-bold">Analyse prédictive</h3>
              </div>
              <p className="text-gray-700">Analysez les comportements clients pour optimiser votre approche et anticiper leurs besoins futurs</p>
            </div>
          </div>
        </div>
        
        {/* Bouton centré */}
        <div className="flex justify-center mt-12">
          <a href="#registration">
            <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold">
              J&apos;accède à l&apos;événement
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AISection;