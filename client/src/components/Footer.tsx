import React from 'react';
import Logo from './Logo';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-start">
              <div className="mr-3">
                <Logo size="small" color="light" />
              </div>
              <div>
                <div className="font-montserrat font-bold text-lg">ENGAGE PARIS</div>
                <p className="text-sm">Le rendez-vous incontournable du Customer Success</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 text-center md:text-right">
            <div className="space-x-4">
              <Link href="#" className="hover:underline">Politique de confidentialité</Link>
              <Link href="#" className="hover:underline">Mentions légales</Link>
            </div>
            <p className="text-sm">© 2025 Engage Paris. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
