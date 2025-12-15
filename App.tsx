import React from 'react';
import { Header } from './components/Header';
import { WhyThisMatters } from './components/WhyThisMatters';
import { ImmediateAction } from './components/ImmediateAction';
import { LegalStrategy } from './components/LegalStrategy';
import { SuccessStory } from './components/SuccessStory';
import { SupportNetwork } from './components/SupportNetwork';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { useScrollTitle } from './hooks/useScrollTitle';

const App: React.FC = () => {
  useScrollTitle();

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <div id="header">
        <Header />
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-10">
        <section id="why-this-matters">
          <WhyThisMatters />
        </section>
        
        <section id="success-story">
          <SuccessStory />
        </section>
        
        <section id="immediate-action">
          <ImmediateAction />
        </section>

        {/* ActionLog is now embedded inside LegalStrategy for better context flow */}
        <section id="legal-strategy">
          <LegalStrategy />
        </section>

        {/* Contact Form moved here to offer mitigation service immediately after strategy */}
        <div id="contact-form-wrapper">
           <ContactForm />
        </div>
        
        <section id="support-network">
          <SupportNetwork />
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;