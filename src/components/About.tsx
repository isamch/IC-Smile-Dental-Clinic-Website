import React from 'react';
import { Users, Clock, MapPin, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Patients' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Trophy, value: '25+', label: 'Awards Won' },
    { icon: MapPin, value: '3', label: 'Locations' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About IC Smile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been transforming smiles and lives with our comprehensive 
            dental services and patient-centered approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At IC Smile, we believe everyone deserves a confident, healthy smile. Our mission is to 
              provide exceptional dental care in a comfortable, welcoming environment using the latest 
              technology and techniques.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experienced professionals is dedicated to delivering personalized treatment 
              plans that meet your unique needs and goals. We take pride in building long-lasting 
              relationships with our patients and their families.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                <p className="text-gray-600">State-of-the-art dental technology</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                <p className="text-gray-600">Comprehensive treatment options</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                <p className="text-gray-600">Comfortable, anxiety-free experience</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                <p className="text-gray-600">Flexible scheduling and payment options</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6812571/pexels-photo-6812571.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Modern dental office" 
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors">
              <stat.icon className="h-12 w-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;