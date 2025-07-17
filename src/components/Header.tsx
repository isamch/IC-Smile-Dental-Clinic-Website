import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top contact bar */}
      <div className="bg-sky-500 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@icsmilepro.com</span>
            </div>
          </div>
          <span>Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">IC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">SmilePro</h1>
              <p className="text-xs text-gray-600">Dental Excellence</p>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-sky-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-sky-500 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-sky-500 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-500 transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('appointment')}
              className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-500 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-sky-500 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-500 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-sky-500 transition-colors text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-sky-500 transition-colors text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-500 transition-colors text-left">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('appointment')}
                className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors text-center"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;