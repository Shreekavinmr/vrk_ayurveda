import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Clock, Heart } from 'lucide-react';
import '../styles/Footer.css';
import logo from '/assets/logo.png';

const Footer = () => {
  const footerRef = useRef(null);
  const bubbleRefs = useRef([]);

  useEffect(() => {
    const createBubbles = () => {
      const footer = footerRef.current;
      if (!footer) return;

      bubbleRefs.current.forEach(bubble => {
        if (bubble && bubble.parentElement) {
          bubble.parentElement.removeChild(bubble);
        }
      });
      bubbleRefs.current = [];

      const bubbleCount = 12;
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'footer-bubble';

        const size = Math.floor(Math.random() * 70) + 30;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        bubble.style.left = `${posX}%`;
        bubble.style.bottom = `${posY}%`;

        const opacity = Math.random() * 0.15 + 0.05;
        bubble.style.opacity = opacity;

        const duration = Math.random() * 10 + 15;
        bubble.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 5;
        bubble.style.animationDelay = `${delay}s`;

        footer.appendChild(bubble);
        bubbleRefs.current.push(bubble);
      }
    };

    createBubbles();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(createBubbles, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      bubbleRefs.current.forEach(bubble => {
        if (bubble && bubble.parentElement) {
          bubble.parentElement.removeChild(bubble);
        }
      });
      bubbleRefs.current = [];
    };
  }, []);

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column footer-info">
            <div className="footer-logo">
              <img
                src={logo}
                alt="Vedic Raksha Kendra Ayurveda hospital"
                className="footer-logo-image"
              />
              <span className="footer-logo-text">Vedic Raksha Kendra Ayurvedic Hospital<p className="footer-tagline">
              (A unit of CARD Trust)
            </p></span>
            </div>
            <p className="footer-tagline">
              Embracing Nature's Healing Touch for Complete Wellness and Holistic Health
            </p>
          </div>

          <div className="footer-column footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-nav">
              <li><a href="/about" className="footer-link">About Us <ArrowUpRight size={14} /></a></li>
              <li><a href="/about/founder-message" className="footer-link">Founder's Message <ArrowUpRight size={14} /></a></li>
              <li><a href="/therapies" className="footer-link">Therapies <ArrowUpRight size={14} /></a></li>
              <li><a href="/disease-treated" className="footer-link">Diseases Treated <ArrowUpRight size={14} /></a></li>
              <li><a href="/about/patient-facility" className="footer-link">Patient Facilities <ArrowUpRight size={14} /></a></li>
            </ul>
          </div>

          <div className="footer-column footer-services">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-nav">
              <li><a href="/therapies/panchakarma" className="footer-link">Panchakarma<ArrowUpRight size={14} /></a></li>
              <li><a href="/therapies/abhyanga" className="footer-link">Naturopathy<ArrowUpRight size={14} /></a></li>
              <li><a href="/therapies/shirodhara" className="footer-link">Physiotherapy<ArrowUpRight size={14} /></a></li>
              <li><a href="/therapies/herbal-medicine" className="footer-link">Yoga Therapy<ArrowUpRight size={14} /></a></li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li className="contact-item">
                <MapPin size={16} />
                <span>
                  340/G, Ring Road,<br/>
                  Near Blue Moon Cinema,<br/>
                  Thindal, Tamil Nadu – 638112,<br/>
                  India
                </span>
              </li>
              <li className="contact-item">
                <Phone size={16} />
                <a href="tel:+918838395570">+91 88383 95570</a>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <a href="mailto:vedicrakshakendra1@gmail.com">vedicrakshakendra1@gmail.com</a>
              </li>
              <li className="contact-item">
                <Clock size={16} />
                <span>
                  Outpatient: 9:00 AM - 6:00 PM<br/>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Vedic Raksha Kendra Ayurvedic Hospital. All rights reserved.
          </div>
          <div className="footer-legal">
            {/* <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
            <a href="/terms-conditions" className="legal-link">Terms & Conditions</a> */}
            <a href="https://www.instagram.com/webnd.digi?igsh=em1ocHowZmJyM2Fj" className="legal-link">Developed By Webnd Digi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;