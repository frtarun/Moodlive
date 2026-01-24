import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, HelpCircle, ArrowLeft, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page support-page">
      {/* Background with the amazing support image */}
      <div className="support-bg-overlay"></div>
      
      <div className="legal-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <img src="/mood.png" alt="Mood" className="legal-logo" />
      </div>

      <motion.div 
        className="legal-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <header className="legal-header support-header">
          <div className="icon-wrapper support-icon">
            <HelpCircle size={40} />
          </div>
          <h1>Support Center</h1>
          <p className="last-updated">We're here to help you stay anonymous and connected.</p>
        </header>

        <div className="support-grid">
          <motion.div 
            className="support-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon">
              <MessageCircle size={32} />
            </div>
            <h3>In-App Support</h3>
            <p>The fastest way to get help. Open Mood, go to Settings, and tap 'Chat with Us'.</p>
          </motion.div>

          <motion.div 
            className="support-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon">
              <Mail size={32} />
            </div>
            <h3>Email Desk</h3>
            <p>For account recovery or business inquiries: <br /><strong>support@mood.app</strong></p>
          </motion.div>

          <motion.div 
            className="support-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon">
              <Twitter size={32} />
            </div>
            <h3>Twitter / X</h3>
            <p>Follow us for real-time status updates and community news @MoodApp.</p>
          </motion.div>
        </div>

        <section className="legal-section faq-section">
          <h2>Frequent Queries</h2>
          <div className="faq-item">
            <h3>How do I reset my Alias?</h3>
            <p>You can generate a new identity anytime in your profile settings. This will archive your old messages for your privacy.</p>
          </div>
          <div className="faq-item">
            <h3>What are Pro Bars?</h3>
            <p>Pro Bars unlock premium features like unlimited DMs and exclusive leaderboard badges while supporting development.</p>
          </div>
        </section>

        <footer className="legal-footer">
          <p>❧ Questions about your journey? We are always listening.</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Support;
