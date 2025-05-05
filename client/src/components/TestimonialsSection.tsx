import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Grâce aux stratégies partagées à Engage Paris, nous avons réduit notre abandon de formation longue durée de 23%. L'équilibre entre automation et accompagnement humain a transformé notre approche.",
      author: "Sophie M.",
      position: "Head of Customer Success",
      company: ""
    },
    {
      quote: "En tant que CSM junior, j'ai enfin trouvé ma communauté. Les ateliers sur la fatigue digitale m'ont donné des outils concrets pour maintenir la motivation client sur 18 mois. Un vrai déclic pour ma carrière !",
      author: "Thomas B.",
      position: "Customer Success Manager",
      company: ""
    },
    {
      quote: "Dans un métier encore en structuration en France, Engage Paris m'a permis de documenter nos processus CSM et de développer notre stratégie One-to-Many. J'ai construit un réseau précieux qui m'accompagne toute l'année.",
      author: "Julie L.",
      position: "VP Customer Experience",
      company: ""
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-montserrat mb-4">
            Ils ont transformé leur pratique CSM avec Engage Paris
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez comment des CSM comme vous ont résolu leurs problématiques de rétention et d'engagement client
          </p>
        </div>
        
        {/* Ornement graphique */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-blue-50 p-6 rounded-lg border-t-4 border-primary shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <div className="flex-grow">
                <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#registration" className="inline-block group transition-all duration-300 hover:-translate-y-1">
            <div className="bg-primary/10 px-8 py-4 rounded-lg border border-primary/20 hover:bg-primary/20 shadow-sm transition-all duration-300">
              <span className="text-primary font-semibold group-hover:mr-2 transition-all">
                Rejoignez la famille CSM francophone
              </span>
              <span className="inline-block transition-transform group-hover:translate-x-2 text-primary">
                →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
