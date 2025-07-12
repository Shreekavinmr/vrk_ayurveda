import React, { useState, useEffect } from 'react';
import { DollarSign, Phone, Mail } from 'lucide-react';
import yoga_therapy from '/assets/yoga_therapy.png';
import meditation from '/assets/meditation.png';
import herbal_tea from '/assets/herbal_tea.png';
import aromatherapy from '/assets/aromatherapy.png';

const VRKAyurvedaComplementaryPage = () => {
  const [activeSection] = useState('complementary');
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

  const complementaryTreatments = [
    {
      name: 'Yoga Therapy',
      benefits: 'Enhances flexibility, reduces stress, and promotes mental balance through guided poses.',
      image: yoga_therapy
    },
    {
      name: 'Meditation',
      benefits: 'Improves focus, reduces anxiety, and fosters emotional well-being with mindful practice.',
      image: meditation
    },
    {
      name: 'Herbal Tea Therapy',
      benefits: 'Supports digestion, boosts immunity, and promotes relaxation with curated herbal blends.',
      image: herbal_tea
    },
    {
      name: 'Aromatherapy',
      benefits: 'Relieves stress and enhances mood using essential oils for holistic relaxation.',
      image: aromatherapy
    }
  ];

  const styles = {
    modernContainer: {
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    heroSection: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      color: 'white'
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
      background: 'url("../assets/VRK_Ayurveda.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -2
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
      textAlign: 'left'
    },
    heroTitle: {
      marginTop: '5rem',
      fontSize: '4rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      maxWidth: '800px',
      color: '#2d5a27'
    },
    heroTitleMobile: {
      fontSize: '2.5rem',
      marginTop: '2rem',
    },
    heroAccent: {
      background: 'linear-gradient(45deg, #daa520, #90ee90)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroDescription: {
      fontSize: '1.25rem',
      opacity: 0.9,
      marginBottom: '3rem',
      maxWidth: '600px',
      lineHeight: '1.6',
      color: '#1a3d1a'
    },
    tabIcon: {
      width: '18px',
      height: '18px'
    },
    mainContent: {
      background: '#f0f8e8',
      padding: '3rem 0'
    },
    contentContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    contentSection: {
      animation: 'fadeIn 0.5s ease-in-out'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '0.5rem'
    },
    sectionDescription: {
      fontSize: '1.1rem',
      color: '#6c757d',
      maxWidth: '600px',
      margin: '0 auto'
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    card: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(45, 90, 39, 0.1)',
      border: '1px solid rgba(45, 90, 39, 0.1)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px'
    },
    cardContent: {
      padding: '1.5rem'
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#2d5a27',
      marginBottom: '0.75rem'
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#6c757d',
      lineHeight: '1.6'
    },
    contactSection: {
      position: 'relative',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundImage: 'url("../assets/hero_home.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      overflow: 'hidden'
    },
    contactOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: '0',
      bottom: '0',
      opacity: '0.4',
      background: 'linear-gradient(135deg, rgba(45, 90, 39, 0.5) 0%, rgba(107, 142, 35, 0.85) 100%)',
      zIndex: '1'
    },
    contactContent: {
      position: 'relative',
      zIndex: '2',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 2rem',
      textAlign: 'center'
    },
    contactHeader: {
      marginBottom: '2rem'
    },
    contactTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      lineHeight: '1.2'
    },
    contactDescription: {
      fontSize: '1.2rem',
      opacity: '0.9',
      lineHeight: '1.6'
    },
    contactActions: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
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
      border: '2px solid transparent'
    },
    contactBtnPrimary: {
      background: 'white',
      color: '#2d5a27'
    },
    contactBtnSecondary: {
      background: 'transparent',
      color: 'white',
      borderColor: 'rgba(255, 255, 255, 0.3)'
    },
    btnIcon: {
      width: '20px',
      height: '20px'
    },
    footerSection: {
      background: '#f0f8e8',
      padding: '3rem 0',
      textAlign: 'center'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    footerTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#2d5a27',
      marginBottom: '1rem'
    },
    footerText: {
      color: '#6c757d',
      fontSize: '1rem',
      marginBottom: '2rem'
    },
    footerInfo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    footerInfoCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(45, 90, 39, 0.08)',
      border: '1px solid rgba(45, 90, 39, 0.1)'
    },
    footerInfoTitle: {
      fontWeight: '600',
      color: '#2d5a27',
      marginBottom: '1rem',
      fontSize: '1.1rem'
    }
  };

  const sections = [
    { id: 'complementary', label: 'Complementary Treatments', icon: DollarSign }
  ];

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
            Complementary Treatments<br/>
            <span style={styles.heroAccent}>Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Enhance your wellness with our curated complementary therapies
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <main style={styles.mainContent}>
        <div style={styles.contentContainer}>
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Complementary Treatments</h2>
              <p style={styles.sectionDescription}>
                Discover our holistic therapies designed to complement your Ayurvedic journey
              </p>
            </div>

            {/* Treatments Cards */}
            <div style={styles.cardContainer}>
              {complementaryTreatments.map((treatment, index) => (
                <div
                  key={index}
                  style={styles.card}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(45, 90, 39, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.1)';
                  }}
                >
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    style={styles.cardImage}
                  />
                  <div style={styles.cardContent}>
                    <h3 style={styles.cardTitle}>{treatment.name}</h3>
                    <p style={styles.cardDescription}>{treatment.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Need Assistance?</h2>
            <p style={styles.contactDescription}>
              Contact us for treatment inquiries or to book your session
            </p>
          </div>
          <div style={styles.contactActions}>
            <a
              href="tel:+918838395570"
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
              href="mailto:vedicrakshakendra1@gmail.com"
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
              <h4 style={styles.footerInfoTitle}>Reservation Required</h4>
              <p style={{ margin: 0, color: '#6c757d' }}>
                Prior consultation and advance booking mandatory for all treatments
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRKAyurvedaComplementaryPage;