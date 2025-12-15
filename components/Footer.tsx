import React from 'react';
import { Leaf, Mail, Twitter, Instagram, Facebook, Send } from 'lucide-react';
import "./Footer.css"

const resources = [
  { name: 'Submit a Tip', href: '/submit' },
  { name: 'Latest Hacks', href: '/hacks' },
  { name: 'Community Forum', href: '/forum' },
  { name: 'Glossary of Waste', href: '/glossary' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Mission', href: '/mission' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

const FooterLink = ({ name, href }) => (
  <a
    href={href}
    className="footer-link"
  >
    {name}
  </a>
);

const EcoHackTipsFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-base">
        <div className="footer-container">
          <div className="footer-grid">

            <div className="logo-mission-area">
              <div className="logo-title">
                <Leaf className="w-8 h-8 text-green-400" />
                <span>EcoHackTips</span>
              </div>
              <p className="mission-text">
                Turning waste into wisdom. Share, learn, and live more sustainably by giving trash a second life.
              </p>

              <div className="mobile-social-links">
                <a href="#" className="social-icon-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-icon-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="link-column">
              <h3 className="column-heading">Resources</h3>
              <ul className="link-list">
                {resources.map((item) => (
                  <li key={item.name}><FooterLink {...item} /></li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h3 className="column-heading">Company</h3>
              <ul className="link-list">
                {company.map((item) => (
                  <li key={item.name}><FooterLink {...item} /></li>
                ))}
              </ul>
            </div>

            <div className="cta-area">
              <h3 className="column-heading">Join the Movement</h3>
              <p className="mission-text">
                Get the latest eco-hacks delivered straight to your inbox.
              </p>
              <form className="subscribe-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                />
                <button
                  type="submit"
                  className="subscribe-button"
                >
                  <Send className="w-5 h-5" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="bottom-section">
            <p className="copyright-text">
              &copy; {currentYear} EcoHackTips. All rights reserved.
            </p>
            
            <div className="desktop-social-links">
              <a href="#" aria-label="Facebook" className="social-icon-link">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon-link">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="social-icon-link">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="Email" className="social-icon-link">
                <Mail size={24} />
              </a>
            </div>

            <div className="legal-links">
              {legal.map((item) => (
                  <FooterLink key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </footer>
  );
};

export default EcoHackTipsFooter;