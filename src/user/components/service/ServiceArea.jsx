import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from '../../../assets/mission-bg.jpg';

const ServiceArea = () => {
  const navigate = useNavigate(); // Fixed function name

  return (
    <section 
      className="service-area h-[60vh] bg-gradient-to-t" 
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex h-full md:ml-48 justify-start items-center">
        {/* Card with Enhanced Animation */}
        <div className="relative w-full md:w-1/2 group transition-all duration-500">
          <div
            className="bg-gradient-to-b mt-3 from-green-700 to-green-900 rounded-3xl shadow-[0_10px_40px_rgba(0,255,128,0.3)] 
            p-12 border border-white/10 hover:border-green-400 transition-transform duration-700 
            hover:rotate-[1deg] hover:skew-y-1"
          >
            <div>
              <h3 
                className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in 
                bg-gradient-to-r from-green-600 to-green-800 inline-block 
                px-6 py-2 rounded-lg shadow-lg tracking-wide uppercase"
              >
                Thuqba Membership Status
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed animate-fade-in">
                Ensure your loved ones in Riyadh are registered with KMCC and
                enjoy exclusive benefits and services designed just for them.
              </p>

              {/* Centered Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => navigate('/log')} // Corrected navigation function
                  className="px-8 py-4 bg-green-700 text-white font-medium rounded-full 
                  shadow-lg hover:bg-green-800 hover:shadow-[0_4px_20px_rgba(72,255,72,0.6)] 
                  transition-transform duration-300 transform hover:scale-110 flex items-center justify-center gap-3"
                >
                  <i className="fas fa-check-circle text-xl"></i>
                  Check Membership Status
                </button>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 border-4 border-transparent rounded-3xl 
          opacity-30 group-hover:border-green-400 transition-opacity duration-700 animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
