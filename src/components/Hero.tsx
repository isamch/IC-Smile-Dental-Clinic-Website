import React from 'react';
import { ArrowRight, Shield, Award, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Your Perfect
                <span className="text-sky-500 block">Smile Awaits</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class dental care with our state-of-the-art technology and 
                compassionate team. We're committed to creating beautiful, healthy smiles that last a lifetime.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('appointment')}
                className="bg-sky-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-sky-500 text-sky-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                Our Services
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-emerald-500" />
                <div>
                  <p className="font-semibold text-gray-800">Safe & Sterile</p>
                  <p className="text-sm text-gray-600">Latest Safety Protocols</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-800">Award Winning</p>
                  <p className="text-sm text-gray-600">Excellence in Care</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-rose-500" />
                <div>
                  <p className="font-semibold text-gray-800">Gentle Care</p>
                  <p className="text-sm text-gray-600">Comfort First</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/6812536/pexels-photo-6812536.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional dental consultation" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-sky-200 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-emerald-200 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;