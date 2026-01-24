import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
          <div className="icon-wrapper privacy-icon">
            <Shield size={40} />
          </div>
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: January 24, 2026</p>
        </header>

        <section className="legal-section">
          <h2>1. Our Commitment to Anonymity</h2>
          <p>
            Mood is built on the foundation of true privacy. Unlike traditional social networks, your identity is not our product. We do not require your real name, phone number, or email address to browse or interact with the basic features of our platform.
          </p>
          <div className="privacy-highlight">
            <Lock size={20} />
            <span>We use end-to-end encryption for all direct messages and never store your real IP address.</span>
          </div>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>We collect minimal data necessary to provide and improve our services:</p>
          <ul>
            <li><strong>Alias Metadata:</strong> The unique anonymous identifiers generated for your session.</li>
            <li><strong>Usage Statistics:</strong> Anonymous data about how you interact with the app to help us squash bugs.</li>
            <li><strong>Device Information:</strong> Basic info like OS version to ensure compatibility.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Data</h2>
          <p>
            Your data is used exclusively to maintain the integrity of the platform and provide the "Pro Bar" features if you choose to unlock them. We never sell your data to third-party advertisers.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Your Rights</h2>
          <p>
            You have the right to request the deletion of your anonymous alias and all associated content at any time through the in-app settings.
          </p>
        </section>

        <footer className="legal-footer">
          <p>Questions about our privacy practices? Contact us through the app's support channel.</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Privacy;
