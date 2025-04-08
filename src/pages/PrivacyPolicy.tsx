
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
          </div>
        </div>

        <div className="section-container">
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              <strong>Privacy Policy for Digital Mozarts</strong>
            </p>
            <p className="mb-4">
              At Digital-mozarts.com, accessible from https://digital-mozarts.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Digital-mozarts.com and how we use it.
            </p>
            <p className="mb-4">
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at inquiry@digital-mozarts.com
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">ScaleX AI App (Shopify) :</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">What data are we requesting and why?</h3>
            <p className="mb-4">
              We are requesting access to Order data of customers to report, analyse profitability and deeper audience quality metrics of marketing campaigns.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Why do we store such information?</h3>
            <p className="mb-4">
              We fetch data from merchant stores and display in a report format on our Shopify app.
              We store refund data in our databases to create reports and leverage them for media decisioning and analytics.
              We store data to create reports and graphs, to analyse and share insights with merchants.
              We store log data at our end for app debug and enhancements.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">What do we use your information for?</h3>
            <p className="mb-4">
              Any of the information we collect from you may be used in one of the following ways:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To create analytics dashboards to help merchants make informed media decisions</li>
              <li>To send profit and deeper audience quality data to Ad platforms for reporting and media decision making</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Who do we share your information with?</h3>
            <p className="mb-4">
              We DO NOT share information with any third party marketing vendors.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Digital Mozarts App :</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">What data are we requesting and why?</h3>
            <p className="mb-4">
              We are requesting access your data in order to allow you storing imported analytics data and create reports, send performance summaries and alerts.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Why do we store such information?</h3>
            <p className="mb-4">
              We store this information in order to process your order, provide product download access, support services, manage your account, send information via newsletters, and post offers of other services or products we offer.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">What do we use your information for?</h3>
            <p className="mb-4">
              Any of the information we collect from you may be used in one of the following ways:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
              <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
              <li>To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</li>
              <li>To process transactions. Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
              <li>To administer a contest, promotion, survey or other site feature</li>
              <li>To send periodic emails. The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Who do we share your information with?</h3>
            <p className="mb-4">
              We DO NOT share information with any other external marketing sources and third-party tools (such as AI Model).
              Digital Mozarts App is designed to comply with Google's Limited Use requirements and the Google API Services User Data Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Google Sheets Add-On :</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">What data are we requesting and why?</h3>
            <p className="mb-4">
              We are requesting access to your google spreadsheets in order to allow you storing imported analytics data in your spreadsheet and create reports. When you install our Google Sheets Add-On we receive your email from Google Apps Script and use it to provide you support and send notifications. When you install our Google Sheets Add-On we receive your Google Sheet information, such as sheet url, which we use to import your analytics data into. You can uninstall our Add-On and all your information will be deleted. You can speedup this process by contacting us directly using this website.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">How do we collect this information?</h3>
            <p className="mb-4">
              Through sign up forms at our website, after installation of any of our add-ons, through google analytics.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Why do we store such information?</h3>
            <p className="mb-4">
              We store this information in order to process your order, provide product download access, support services, manage your account, send information via newsletters, and post offers of other services or products we offer.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">What do we use your information for?</h3>
            <p className="mb-4">
              Any of the information we collect from you may be used in one of the following ways:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
              <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
              <li>To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</li>
              <li>To process transactions. Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
              <li>To administer a contest, promotion, survey or other site feature</li>
              <li>To send periodic emails. The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</li>
            </ul>
            <p className="mb-4">
              Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Who do we share your information with?</h3>
            <p className="mb-4">
              We use Google Analytics to understand how our website or our Add-Ons are used.
              We DO NOT share information with any other external marketing sources.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">How can you request data deletion?</h3>
            <p className="mb-4">
              Once you uninstall our app or you sign out of the app, our app can no longer access your account and data. All the earlier logs get automatically deleted from our system after 30 days. If you want to confirm data deletion or if you want data deletion to happen sooner, you can write to us at info@digital-mozarts.com. We will respond and action your request
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Log Files</h2>
            <p className="mb-4">
              Digital-mozarts.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Web Beacons</h2>
            <p className="mb-4">
              Like any other website, Digital-mozarts.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Google DoubleClick DART Cookie</h2>
            <p className="mb-4">
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Advertising Partners</h2>
            <p className="mb-4">
              Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below
            </p>
            <p className="mb-4">
              <a href="https://policies.google.com/technologies/ads" className="text-scalex-lightBlue hover:underline">https://policies.google.com/technologies/ads</a>
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Policies</h2>
            <p className="mb-4">
              You may consult this list to find the Privacy Policy for each of the advertising partners of Digital-mozarts.com. Our Privacy Policy was created with the help of the Privacy Policy Generator.
            </p>
            <p className="mb-4">
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Digital-mozarts.com, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p className="mb-4">
              Note that Digital-mozarts.com has no access to or control over these cookies that are used by third-party advertisers.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Third Party Privacy Policies</h2>
            <p className="mb-4">
              Digital-mozarts.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
            </p>
            <p className="mb-4">
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Information</h2>
            <p className="mb-4">
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p className="mb-4">
              Digital-mozarts.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Online Privacy Policy Only</h2>
            <p className="mb-4">
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Digital-mozarts.com. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
            <p className="mb-4">
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
