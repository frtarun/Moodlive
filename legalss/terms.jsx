import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <img src="/mood.png" alt="Mood" className="legal-logo" />
      </div>

      <motion.div 
        className="legal-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="legal-header">
          <div className="icon-wrapper terms-icon">
            <Scale size={40} />
          </div>
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: January 24, 2026</p>
        </header>

        <section className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Mood, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service. Mood is designed for users who value anonymous expression while maintaining a respectful community.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Community Guidelines</h2>
          <p>To keep Mood a safe space for everyone, you agree not to:</p>
          <ul>
            <li>Harass, bully, or intimidate other users.</li>
            <li>Post content that is illegal, harmful, or promotes violence.</li>
            <li>Attempt to deanonymize or "dox" other users.</li>
            <li>Spam or use automated bots for interaction.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Content Ownership</h2>
          <p>
            You retain ownership of any content you post to Mood. However, by posting, you grant Mood a non-exclusive, royalty-free license to display and distribute that content within our platform services.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Pro Bar Subscription</h2>
          <p>
            Certain premium features like "Pro Bars" may be available for purchase. All transactions are handled through standard app store payment processors. We do not store your credit card information.
          </p>
          <div className="privacy-highlight">
            <AlertCircle size={20} />
            <span>Violating community guidelines may result in the suspension of your account and loss of Pro Bar benefits.</span>
          </div>
        </section>

        <section className="legal-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            Mood is provided "as is." We are not responsible for any content posted by users or any damages resulting from the use of our platform.
          </p>
        </section>

        <footer className="legal-footer">
          <p>© 2026 Mood. All rights reserved. Play fair, stay anonymous.</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Terms;
