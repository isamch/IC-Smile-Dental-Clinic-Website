import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">IC Smile</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">IC Smile</h3>
                <p className="text-sm text-gray-400">Dental Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating beautiful, healthy smiles with advanced dental care and 
              compassionate service. Your trusted partner in oral health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-sky-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-sky-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-sky-500 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-sky-500 transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="text-gray-400 hover:text-sky-500 transition-colors">
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">General Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">Dental Implants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">Teeth Whitening</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-500 mt-1" />
                <div>
                  <p className="text-gray-400">123 Dental Avenue</p>
                  <p className="text-gray-400">Suite 200</p>
                  <p className="text-gray-400">Healthcare City, HC 12345</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-500" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-sky-500 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-500" />
                <a href="mailto:info@icsmilepro.com" className="text-gray-400 hover:text-sky-500 transition-colors">
                  info@icsmilepro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 IC Smile. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;