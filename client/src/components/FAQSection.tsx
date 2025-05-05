import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question:
        "Quel ROI puis-je attendre de ma participation à Engage Paris 2025 ?",
      answer:
        "Engage Paris est conçu pour vous aider à passer à l’action rapidement grâce à des retours d’expérience concrets, des frameworks testés et des discussions entre pairs. De nombreux participants nous ont partagé qu’ils avaient mis en œuvre certaines stratégies présentées dès les semaines suivant l’événement. Le contenu est pensé pour un impact direct sur vos pratiques CS.",
    },
    {
      question:
        "Comment fonctionne le tirage au sort pour gagner un accès streaming 2025 ?",
      answer:
        "En vous inscrivant via notre formulaire, vous serez automatiquement éligible pour un tirage au sort vous permettant de gagner un accès gratuit au streaming de l’édition 2025. La date du tirage et les modalités précises vous seront communiqués après inscription.",
    },
    {
      question:
        "Quel niveau d'expérience est requis pour participer et en tirer profit ?",
      answer:
        "L'événement est structuré pour offrir de la valeur à tous les niveaux d'expertise CS. Les débutants profiteront des sessions fondamentales sur les métriques et processus CS, tandis que les experts apprécieront les cas d'études avancés et l'intégration de l'IA. Nous proposons un parcours personnalisé selon votre niveau et vos objectifs, communiqué une semaine avant l'événement.",
    },
    {
      question:
        "Comment Engage Paris se différencie des autres conférences CS ?",
      answer:
        "Engage Paris se différencie par son focus exclusif sur le Customer Success et par la qualité opérationnelle de ses contenus. Loin des keynotes génériques, nos intervenants partagent des cas vécus, des outils concrets, et restent disponibles pour échanger après leurs sessions. L’événement est à taille humaine, ce qui favorise les interactions directes avec les speakers et les autres participants.",
    },
    {
      question:
        "Quel niveau de networking puis-je espérer durant l'événement ?",
      answer:
        "Le format de l’événement facilite les connexions : application de mise en relation, déjeuners thématiques, sessions en petits groupes… De nombreux participants nous ont dit avoir gardé contact avec leurs pairs après l’événement, pour continuer à échanger sur leurs enjeux et bonnes pratiques.",
    },
    {
      question: "Puis-je venir avec un collègue de mon équipe ?",
      answer:
        "Bien sûr, tant que chaque personne fait une demande d'accès. Engage Paris est conçu pour favoriser l'alignement entre décisionnaires et opérationnels CS.",
    },
    {
      question: "Mes données sont-elles en sécurité ?",
      answer:
        "Oui. Elles sont traitées de manière confidentielle et ne sont jamais revendues ni partagées à des tiers.",
    },
  ];

  return (
    <section className="py-16 bg-lightBlue">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center font-montserrat">
          Les réponses aux vraies problématiques des CSM
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-4 border-b border-gray-300 pb-4"
              >
                <AccordionTrigger className="flex justify-between items-center w-full text-left font-semibold text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
