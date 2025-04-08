
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Terms Of Service</h1>
          </div>
        </div>
        
        <div className="section-container">
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              <strong>Generic Terms of Service</strong>
            </p>
            <p className="mb-4">
              Please read these terms of service ("terms", "terms of service") carefully before using Digital Mozarts website (the "service") operated by Digital-Mozarts.com ("us", 'we", "our").
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Conditions of Use</h2>
            <p className="mb-4">
              We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Policy</h2>
            <p className="mb-4">
              Before you continue using our website we advise you to read our privacy policy <a href="/privacy-policy" className="text-scalex-lightBlue hover:underline">https://digital-mozarts.com/privacy-policy/</a> regarding our user data collection. It will help you better understand our practices.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Copyright</h2>
            <p className="mb-4">
              Content published on this website (digital downloads, images, texts, graphics, logos) is the property of Digital Mozarts and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of Digital Mozarts, with copyright authorship for this compilation by Digital Mozarts.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Communications</h2>
            <p className="mb-4">
              The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Applicable Law</h2>
            <p className="mb-4">
              By visiting this website, you agree that the laws of the Bangalore, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between Digital Mozarts and you, or its business partners and associates.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Disputes</h2>
            <p className="mb-4">
              Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court Bangalore and you consent to exclusive jurisdiction and venue of such courts.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Comments, Reviews, and Emails</h2>
            <p className="mb-4">
              Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaign, and commercial solicitation.
            </p>
            <p className="mb-4">
              We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant Digital Mozarts non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">License and Site Access</h2>
            <p className="mb-4">
              We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">User Account</h2>
            <p className="mb-4">
              If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.
            </p>
            <p className="mb-4">
              We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
