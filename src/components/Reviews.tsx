import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Dr. Smith and the entire team at IC Smile are absolutely wonderful. They made me feel comfortable throughout my entire treatment. My smile has never looked better!",
      treatment: "Porcelain Veneers",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Chen",
      rating: 5,
      review: "I was terrified of dental work, but the team here made everything so easy and painless. The technology they use is amazing, and the results speak for themselves.",
      treatment: "Dental Implants",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      review: "Best dental experience I've ever had! The office is beautiful, the staff is incredibly friendly, and my teeth whitening results exceeded my expectations.",
      treatment: "Teeth Whitening",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Thompson",
      rating: 5,
      review: "Professional, caring, and skilled. They took the time to explain everything and made sure I was comfortable every step of the way. Highly recommend!",
      treatment: "General Dentistry",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about 
            their experience at IC Smile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img 
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.treatment}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-sky-200 absolute -top-2 -left-2" />
                <p className="text-gray-600 italic leading-relaxed pl-6">
                  "{review.review}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-800">5.0</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Based on 500+ reviews across Google, Yelp, and Facebook
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Join our family of satisfied patients today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;