import React, { useState, useEffect } from 'react';
import '../styles/ContactUs.css';
import { HelpCircle, MessageCircle, BookOpen, Instagram ,Facebook} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setStatus('');
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  try {
    const response = await fetch(`${BACKEND_URL}/api/vrk/contactus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        secretKey: 'fghjnwri7653r2rghjebfh',
      }),
    });

    const result = await response.json();
    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus(`Error: ${result.message}`);
    }
  } catch (error) {
    setStatus('Error sending message. Please try again.');
    console.error('Submission error:', error);
  } finally {
    setIsLoading(false);
  }
};

  const features = [
    { icon: MessageCircle, title: 'Customer Support', desc: 'Still need help? Reach out to our support team anytime.' },
  ];

  return (
    <div className="contact-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="contact-shape contact-shape-1"></div>
        <div className="contact-shape contact-shape-2"></div>
        <div className="contact-dots-pattern contact-dots-1"></div>
        <div className="contact-dots-pattern contact-dots-2"></div>
        <div className="content-container">
          <div className="hero-content">
            <div className="contact-hero-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Get in Touch
            </div>
            <h1 className="hero-title">
              Contact Vedic Raksha Kendra Ayurveda Hospital<br/>
              <span className="hero-accent"> Connect with Us</span>
            </h1>
            <p className="hero-description">
              Reach out to us for inquiries about our ayurvedic hospital or any other information.
            </p>
            {/* {!isMobile && (
              <div className="hero-features">
                {features.map((feature, index) => (
                  <div key={index} className="hero-feature">
                    <feature.icon className="feature-icon" />
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <h2>Our Contact Details</h2>
            <p>We’re here to assist you with all your queries.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Address</h3>
              <p>
                340/G, Ring road, <br/>near Blue Moon Cinema, <br/>Thindal, Tamil Nadu 638112
              </p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>
                <div className="contact-numbers">
                  <a href="tel:+918838395570">+91 88383 95570</a>,{' '}
                  <br />
                  <a href="tel:+919123456789">0424-2411222</a>
                </div>
              </p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:v.sglobal2025@gmail.com">vedicrakshakendra1@gmail.com</a>
              </p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">
                <Instagram size={24} />
              </div>
              <h3>Instagram</h3>
              <p>
                <a href="https://www.instagram.com/vedic_raksha_kendra/" target="_blank" rel="noopener noreferrer">@vedicrakshakendra</a>
              </p>
            </div>
            <div className="contact-info-card">
  <div className="contact-icon">
    <Facebook size={24} />
  </div>
  <h3>Facebook</h3>
  <p>
    <a href="https://www.facebook.com/profile.php?id=61552574695231#" target="_blank" rel="noopener noreferrer">
      @Vedic Raksha Kendra 
    </a>
  </p>
</div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16.5 12"></polyline>
                </svg>
              </div>
              <h3>Operating Hours</h3>
              <p>
                Monday - Saturday: 9:00 AM - 6:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below, and we’ll get back to you as soon as possible.</p>
          </div>
          <div className="contact-form-wrapper">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="contact-submit-button" disabled={isLoading}>
                  {isLoading ? (
                    <span className="contact-loader"></span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {status && <p className="contact-form-status">{status}</p>}
              </form>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.322373022471!2d77.66785689999999!3d11.311131199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f1ac3ee2ebd%3A0x452aac1715890793!2sVedic%20Raksha%20kendra!5e0!3m2!1sen!2sin!4v1752283261383!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Vedic Raksha Kendra Ayurvedic Hospital"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-overlay"></div>
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">Have More Questions?</h2>
            <p className="contact-description">
              Reach out to us for further details or to discuss your specific requirements
            </p>
          </div>
          <div className="contact-actions">
            <a href="tel:+918838395570" className="contact-btn contact-btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="btn-icon"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Now</span>
            </a>
            <a href="mailto:vedicrakshakendra1@gmail.com" className="contact-btn contact-btn-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="btn-icon"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Send Email</span>
            </a>
            <a href="https://www.instagram.com/vedic_raksha_kendra/" className="contact-btn contact-btn-secondary" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="btn-icon" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;