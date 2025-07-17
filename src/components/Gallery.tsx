import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/6812549/pexels-photo-6812549.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400",
      treatment: "Teeth Whitening"
    },
    {
      before: "https://images.pexels.com/photos/6812025/pexels-photo-6812025.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/6812033/pexels-photo-6812033.jpeg?auto=compress&cs=tinysrgb&w=400",
      treatment: "Dental Implants"
    },
    {
      before: "https://images.pexels.com/photos/6812549/pexels-photo-6812549.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400",
      treatment: "Porcelain Veneers"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the amazing transformations we've achieved for our patients. These results 
            showcase the quality and expertise of our dental care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-center text-lg font-semibold text-gray-800">Before</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={beforeAfterImages[currentIndex].before}
                    alt="Before treatment"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-center text-lg font-semibold text-gray-800">After</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={beforeAfterImages[currentIndex].after}
                    alt="After treatment"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {beforeAfterImages[currentIndex].treatment}
              </h4>
              <p className="text-gray-600">
                Professional treatment delivering exceptional results for our patient.
              </p>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button 
                onClick={prevImage}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              
              <div className="flex space-x-2">
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-sky-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextImage}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to transform your smile? Book a consultation to discuss your options.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('appointment');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;