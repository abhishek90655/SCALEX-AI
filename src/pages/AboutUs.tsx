
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="relative py-16 bg-scalex-navy/20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0wIDEwIEw0MCAxMCBNMTAgMCBMMTAgNDAgTTAgMzAgTDQwIDMwIE0zMCAwIE0zMCA0MCIgc3Ryb2tlPSIjMzNDM0YwIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
          </div>
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          </div>
        </div>
        
        <div className="section-container">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
            <p className="mb-6">
              Long term growth of a business can happen only with a nuanced understanding of business
              fundamentals - customer segments, products and competition
            </p>
            
            <p className="mb-6">
              While Digital is a high potential medium for business growth, <span className="font-semibold">it is often under-utilized as the
              focus is more on channels (media data) and less on business fundamentals</span>
            </p>
            
            <p className="mb-6">
              We aim to address this gap to unlock high growth for brands
            </p>
            
            <div className="bg-scalex-navy/30 p-6 rounded-lg my-8 border border-scalex-lightBlue/20">
              <blockquote className="text-xl italic">
                "We take a business-first approach to leverage full potential of digital channels and unlock high
                growth for brands, with an approach rooted in tech and analytics"
              </blockquote>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Team</h2>
            <p className="mb-6">
              A highly experienced team with demonstrated experience of delivering growth for clients for
              Fortune 50 clients and startups. Combined experience of 50+ years in US, Canada and India
              region with a focus on Ecommerce and BFSI vertical
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
