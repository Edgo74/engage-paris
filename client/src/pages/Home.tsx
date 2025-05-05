import React from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import AISection from '@/components/AISection';
import CSLeadersSection from '@/components/CSLeadersSection';
import EventOverviewSection from '@/components/EventOverviewSection';
import SpeakersSection from '@/components/SpeakersSection';
import CommunitySection from '@/components/CommunitySection';
import RegistrationForm from '@/components/RegistrationForm';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-lightBlue">
      <Navbar />
      <HeroBanner />
      <AISection />
      <CSLeadersSection />
      <EventOverviewSection />
      <SpeakersSection />
      <CommunitySection />
      <TestimonialsSection />
      <RegistrationForm />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Home;
