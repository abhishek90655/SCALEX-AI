import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
  // Add effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="bg-scalex-navy/50 pt-8 pb-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0wIDEwIEw0MCAxMCBNMTAgMCBMMTAgNDAgTTAgMzAgTDQwIDMwIE0zMCAwIE0zMCA0MCIgc3Ryb2tlPSIjMzNDM0YwIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
      
      {/* CTA section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 relative z-10">
        <div className="text-center mb-8">
          <Link 
            to="/book-demo"
            className="bg-scalex-blue text-white font-medium px-8 py-3 rounded-lg duration-300 inline-block hover:bg-scalex-blue/90 transition-colors"
          >
            Book A Demo
          </Link>
        </div>

        {/* Quick Links and Contact section - improved mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links - Left on desktop, centered on mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Empty middle column on desktop */}
          <div className="hidden md:block">
            {/* Intentionally empty */}
          </div>
          
          {/* Contact Us - Right on desktop, centered on mobile */}
          <div className="text-center md:text-right mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-white/70">
              <p className="mb-2">ScaleX AI</p>
              <p className="mb-2">5th Floor, VR, Bangalore, 560103</p>
              <p className="mb-2">Monday - Friday</p>
              <p className="mb-2">9:00 a.m. – 5:00 p.m.</p>
              <p className="mb-2">
                <a href="mailto:inquiry@digital-mozarts.com" className="hover:text-white transition-colors">inquiry@digital-mozarts.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="border-t border-white/10 pt-4 mt-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/50 text-sm text-center sm:text-left">© ScaleX AI {new Date().getFullYear()}</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-white/50 hover:text-white mt-4 sm:mt-0 transition-colors text-sm"
          >
            Scroll to Top
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;