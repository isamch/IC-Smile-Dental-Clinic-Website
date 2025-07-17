import React from 'react';
import { 
  Smile, 
  Shield, 
  Sparkles, 
  Stethoscope, 
  Zap, 
  Baby,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleanings, fillings, and routine check-ups to maintain optimal oral health.',
      features: ['Regular Cleanings', 'Cavity Fillings', 'Oral Examinations', 'Fluoride Treatments']
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our cosmetic treatments designed to enhance the appearance of your teeth.',
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Bonding', 'Smile Makeovers']
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Proactive treatments to prevent dental problems before they start, keeping your smile healthy.',
      features: ['Dental Sealants', 'Gum Disease Prevention', 'Oral Cancer Screening', 'Custom Mouthguards']
    },
    {
      icon: Stethoscope,
      title: 'Restorative Dentistry',
      description: 'Restore damaged or missing teeth with our advanced restorative treatments and procedures.',
      features: ['Dental Implants', 'Crowns & Bridges', 'Root Canal Therapy', 'Dentures']
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      description: 'Immediate dental care for urgent situations. We provide prompt relief for dental emergencies.',
      features: ['24/7 Emergency Line', 'Pain Management', 'Trauma Treatment', 'Quick Appointments']
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a fun, comfortable environment that reduces anxiety.',
      features: ['Child-Friendly Atmosphere', 'Preventive Care', 'Fluoride Treatments', 'Sealants']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care tailored to your needs. From routine cleanings to 
            advanced cosmetic procedures, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="h-4 w-4 text-sky-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-sky-500 text-white py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;