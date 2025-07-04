import React, { useState, useEffect } from 'react';
import { HeartPulse, Phone, Mail, Sparkles, UserCheck, MessageSquareQuote, PenLine } from 'lucide-react';

const VRKAyurvedaFromTheFounderPage = () => {
  const [visibleElements, setVisibleElements] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const founderData = {
    name: 'Dr. V. R. Krishnan',
    photo: 'Founder_Photo.jpg',
    message: 'At Vedic Raksha Kendra Ayurveda hospital, we believe in the timeless wisdom of Ayurveda to heal, rejuvenate, and bring balance to life. My mission is to guide you on a journey of holistic wellness, rooted in natures embrace.',
    background: 'Dr. V. R. Krishnan, a renowned Ayurvedic practitioner with over 20 years of experience, founded Vedic Raksha Kendra Ayurveda hospital to bring authentic Ayurvedic healing to the modern world. Trained in traditional Ayurveda in Kerala, Dr. Krishnan combines ancient wisdom with contemporary insights to offer personalized care.',
    vision: 'Our vision is to create a sanctuary of healing where every individual can experience the transformative power of Ayurveda, fostering harmony of body, mind, and spirit.',
    experience: [
      'Over 20 years practicing Ayurveda, specializing in Panchakarma and chronic disease management',
      'Trained under renowned Ayurvedic masters in Kerala',
      'Recipient of the Ayurveda Excellence Award in 2018',
      'Conducted over 10,000 personalized consultations',
    ],
    quote: '"Healing is not just about curing the body; its about awakening the soul to its natural state of balance."',
  };

  const styles = {
    modernContainer: {
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    heroSection: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      color: 'white',
    },
    heroSectionMobile: {
      height: '50vh',
      minHeight: '550px',
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("/assets/VRK_Ayurveda.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -2,
    },
    heroBackgroundMobile: {
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    heroContent: {
      maxWidth: '1400px',
      width: '100%',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      height: '100%',
      zIndex: 1,
      textAlign: 'left',
    },
    heroTitle: {
      marginTop: '5rem',
      fontSize: '4rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      maxWidth: '800px',
      color: '#2d5a27',
    },
    heroTitleMobile: {
      fontSize: '2.5rem',
      marginTop: '2rem',
    },
    heroAccent: {
      background: 'linear-gradient(45deg, #daa520, #90ee90)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroDescription: {
      fontSize: '1.25rem',
      opacity: 0.9,
      marginBottom: '3rem',
      maxWidth: '600px',
      lineHeight: '1.6',
      color: '#1a3d1a',
    },
    mainContent: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    decorativeShape: {
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '200px',
      height: '200px',
      background: 'linear-gradient(135deg, rgba(45, 90, 39, 0.05), rgba(107, 142, 35, 0.03))',
      borderRadius: '50%',
      zIndex: 0,
    },
    section: {
      position: 'relative',
      zIndex: 1,
      padding: '80px 0',
      opacity: 0,
      transform: 'translateY(60px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    sectionVisible: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '60px',
      position: 'relative',
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '16px',
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: '#6c757d',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '400',
    },
    decorativeLine: {
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #6b8e23, #90ee90)',
      margin: '24px auto',
      borderRadius: '2px',
    },
    founderSection: {
      background: 'white',
      padding: '100px 0',
    },
    founderContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    founderContentMobile: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      alignItems: 'center',
    },
    founderImage: {
      width: '100%',
      maxWidth: '400px',
      height: '500px',
      borderRadius: '20px',
      boxShadow: '0 12px 32px rgba(45, 90, 39, 0.08)',
      border: '1px solid rgba(45, 90, 39, 0.05)',
      background: 'linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6c757d',
      fontSize: '0.9rem',
      textAlign: 'center',
    },
    founderImageMobile: {
      width: '100%',
      maxWidth: '300px',
      height: '400px',
      margin: '0 auto',
    },
    founderText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    founderTextMobile: {
      textAlign: 'center',
      width: '100%',
    },
    founderName: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '16px',
    },
    founderMessage: {
      fontSize: '1.2rem',
      color: '#5a6c57',
      lineHeight: '1.7',
      marginBottom: '32px',
    },
    signature: {
      fontFamily: "'Dancing Script', cursive",
      fontSize: '2rem',
      color: '#6b8e23',
      marginTop: '20px',
      textAlign: 'left',
    },
    signatureMobile: {
      textAlign: 'center',
    },
    backgroundSection: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      padding: '80px 0',
    },
    backgroundContent: {
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
    },
    backgroundDescription: {
      fontSize: '1.1rem',
      color: '#6c757d',
      lineHeight: '1.7',
      marginBottom: '32px',
    },
    experienceList: {
      listStyle: 'none',
      padding: 0,
      textAlign: 'left',
      maxWidth: '600px',
      margin: '0 auto',
    },
    experienceItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      fontSize: '1rem',
      color: '#6c757d',
    },
    experienceIcon: {
      width: '20px',
      height: '20px',
      marginRight: '12px',
      color: '#6b8e23',
    },
    quoteSection: {
      color: 'white',
      padding: '80px 0',
      textAlign: 'center',
    },
    quoteText: {
      fontSize: '1.8rem',
      fontStyle: 'italic',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      opacity: 0.9,
      color: '#2d5a27'
    },
    quoteAuthor: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginTop: '24px',
      color: '#90ee90',
    },
    contactSection: {
      position: 'relative',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundImage: 'url("/src/assets/hero_home.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      overflow: 'hidden',
    },
    contactOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.4,
      background: 'linear-gradient(135deg, rgba(45, 90, 39, 0.5) 0%, rgba(107, 142, 35, 0.85) 100%)',
      zIndex: 1,
    },
    contactContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center',
    },
    contactHeader: {
      marginBottom: '2rem',
    },
    contactTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    contactDescription: {
      fontSize: '1.2rem',
      opacity: 0.9,
      lineHeight: '1.6',
    },
    contactActions: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    contactBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem 2rem',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
    },
    contactBtnPrimary: {
      background: 'white',
      color: '#2d5a27',
    },
    contactBtnSecondary: {
      background: 'transparent',
      color: 'white',
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    btnIcon: {
      width: '20px',
      height: '20px',
    },
    footerSection: {
      background: 'linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 100%)',
      padding: '80px 0 40px',
      textAlign: 'center',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    footerTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '16px',
    },
    footerText: {
      color: '#6c757d',
      fontSize: '1.1rem',
      marginBottom: '40px',
    },
    footerInfo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '40px',
    },
    footerInfoCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '20px',
      boxShadow: '0 12px 32px rgba(45, 90, 39, 0.08)',
      border: '1px solid rgba(45, 90, 39, 0.05)',
    },
    footerInfoTitle: {
      fontWeight: '600',
      color: '#2d5a27',
      marginBottom: '16px',
      fontSize: '1.2rem',
    },
    heroFeatures: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      width: '100%',
      maxWidth: '901px'
    },
    heroFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '1.5rem',
      borderRadius: '16px',
      color: '#1a3d1a'
    },
    featureIcon: {
      width: '24px',
      height: '24px',
      color: '#daa520'
    },
  };

  const features = [
    {
      icon: UserCheck,
      title: 'Decades of Experience',
      desc: 'Led by a seasoned Ayurvedic practitioner with a lifelong commitment to natural healing.'
    },
    {
      icon: MessageSquareQuote,
      title: 'Guided by Wisdom',
      desc: 'Our approach is shaped by traditional knowledge, deep intuition, and a compassionate vision for wellness.'
    },
    {
      icon: PenLine,
      title: 'A Personal Message',
      desc: 'Every treatment at Vedic Raksha Kendra Ayurveda hospital is rooted in our founders belief in harmony, purpose, and care.'
    }
  ];

  // Check if mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={{
        ...styles.heroSection,
        ...(isMobile ? styles.heroSectionMobile : {})
      }}>
        <div style={{
          ...styles.heroBackground,
          ...(isMobile ? styles.heroBackgroundMobile : {})
        }}></div>
        <div style={styles.heroContent}>
          <h1 style={{
            ...styles.heroTitle,
            ...(isMobile ? styles.heroTitleMobile : {})
          }}>
            From the Founder
            <span style={styles.heroAccent}> Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Meet the visionary behind our mission to bring holistic healing through Ayurveda
          </p>
          {!isMobile && (
            <div style={styles.heroFeatures}>
              {features.map((feature, index) => (
                <div key={index} style={styles.heroFeature}>
                  <feature.icon style={styles.featureIcon} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{feature.title}</h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.decorativeShape}></div>

        {/* Founder Introduction */}
        <section
          id="founder"
          data-animate
          style={{
            ...styles.section,
            ...styles.founderSection,
            ...(visibleElements.founder ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Meet Our Founder</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                A dedicated healer committed to the art and science of Ayurveda
              </p>
            </div>
            <div style={isMobile ? styles.founderContentMobile : styles.founderContent}>
              <div style={{
                ...styles.founderImage,
                ...(isMobile ? styles.founderImageMobile : {})
              }}>
                {founderData.photo.replace('.jpg', '')}
              </div>
              <div style={{
                ...styles.founderText,
                ...(isMobile ? styles.founderTextMobile : {})
              }}>
                <div style={{
                  ...styles.signature,
                  ...(isMobile ? styles.signatureMobile : {})
                }}>
                  {founderData.name}
                </div>
                <p style={styles.founderMessage}>{founderData.message}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Background & Vision */}
        <section
          id="background"
          data-animate
          style={{
            ...styles.section,
            ...styles.backgroundSection,
            ...(visibleElements.background ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Background & Vision</h2>
              <div style={styles.decorativeLine}></div>
            </div>
            <div style={styles.backgroundContent}>
              <p style={styles.backgroundDescription}>{founderData.background}</p>
              <p style={styles.backgroundDescription}>{founderData.vision}</p>
              <ul style={styles.experienceList}>
                {founderData.experience.map((item, index) => (
                  <li key={index} style={styles.experienceItem}>
                    <Sparkles style={styles.experienceIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section
          id="quote"
          data-animate
          style={{
            ...styles.section,
            ...styles.quoteSection,
            ...(visibleElements.quote ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <p style={styles.quoteText}>{founderData.quote}</p>
            <p style={styles.quoteAuthor}>- {founderData.name}</p>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Connect with Us</h2>
            <p style={styles.contactDescription}>
              Reach out to learn more about our holistic approach to healing
            </p>
          </div>
          <div style={styles.contactActions}>
            <a
              href="tel:+919080108558"
              style={{ ...styles.contactBtn, ...styles.contactBtnPrimary }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f8f9fa';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Phone style={styles.btnIcon} />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:v.sglobal2025@gmail.com"
              style={{ ...styles.contactBtn, ...styles.contactBtnSecondary }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              <Mail style={styles.btnIcon} />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section style={styles.footerSection}>
        <div style={styles.footerContent}>
          <h3 style={styles.footerTitle}>Vedic Raksha Kendra Ayurveda hospital</h3>
          <p style={styles.footerText}>Your partner in natural healing and holistic wellness</p>
          <div style={styles.footerInfo}>
            <div style={styles.footerInfoCard}>
              <h4 style={styles.footerInfoTitle}>Contact Information</h4>
              <p style={{ margin: '0.5rem 0', color: '#6c757d' }}>Phone: +91 90801 08558</p>
              <p style={{ margin: '0.5rem 0', color: '#6c757d' }}>Email: v.sglobal2025@gmail.com</p>
            </div>
            <div style={styles.footerInfoCard}>
              <h4 style={styles.footerInfoTitle}>Treatment Approach</h4>
              <p style={{ margin: 0, color: '#6c757d' }}>
                Natural healing methods combined with modern medical care for comprehensive wellness
              </p>
            </div>
            <div style={styles.footerInfoCard}>
              <h4 style={styles.footerInfoTitle}>Consultation Required</h4>
              <p style={{ margin: 0, color: '#6c757d' }}>
                Prior consultation mandatory for personalized treatment plans
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRKAyurvedaFromTheFounderPage;