import React from 'react';

const FeaturesPage = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Professional Design Support",
      description: "Access our in-house designers and curated design system to bring your vision to life. Get expert guidance on layouts, materials, and finishes."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Vetted Contractors",
      description: "Work with our network of licensed and insured local contractors. We've built relationships with the best in your area to ensure quality work."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Streamlined Timeline",
      description: "Get a clear project timeline with milestone updates throughout the build. Stay informed on progress and next steps."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Guarantee",
      description: "Every project is backed by our satisfaction guarantee. We ensure materials and workmanship meet our high standards."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Efficient Process",
      description: "Save time with our streamlined approach to permits, materials selection, and contractor coordination."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Transparent Pricing",
      description: "Get upfront pricing and flexible financing options. No hidden fees or surprise costs during your renovation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('C:/Users/amanm/OneDrive/Desktop/Home2Workclient/src/assets/Background.png')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Features that transform your renovation
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
              Everything you need to plan, design, and build your perfect space - all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="card-wrapper">
              <style>{`
                .card-wrapper {
                  perspective: 1000px;
                }
                
                .card {
                  position: relative;
                  width: 100%;
                  height: 320px;
                  background: #38bdf8;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: bold;
                  border-radius: 15px;
                  cursor: pointer;
                  color: white;
                  text-align: center;
                }

                .card::before,
                .card::after {
                  position: absolute;
                  content: "";
                  width: 20%;
                  height: 20%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 25px;
                  font-weight: bold;
                  background-color: #0284c7;
                  transition: all 0.5s;
                  z-index: 1;
                }

                .card::before {
                  top: 0;
                  right: 0;
                  border-radius: 0 15px 0 100%;
                }

                .card::after {
                  bottom: 0;
                  left: 0;
                  border-radius: 0 100% 0 15px;
                }

                .card:hover::before,
                .card:hover::after {
                  width: 100%;
                  height: 100%;
                  border-radius: 15px;
                }

                .card-content {
                  z-index: 2;
                  padding: 20px;
                }

                .card-description {
                  opacity: 0;
                  transition: opacity 0.3s;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  width: 80%;
                  font-size: 16px;
                  font-weight: normal;
                  z-index: 2;
                }

                .card:hover .card-description {
                  opacity: 1;
                }

                .card:hover .card-title {
                  opacity: 0;
                }

                .card-title {
                  transition: opacity 0.3s;
                  position: relative;
                  z-index: 2;
                }

                .icon-wrapper {
                  margin-bottom: 12px;
                }
              `}</style>
              <div className="card">
                <div className="card-title">
                  <div className="icon-wrapper">
                    {feature.icon}
                  </div>
                  {feature.title}
                </div>
                <div className="card-description">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mt-24">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to start your renovation?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Get your custom estimate today and see how we can help bring your vision to life.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform transition-transform duration-300 hover:scale-105">
                Get your estimate
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;