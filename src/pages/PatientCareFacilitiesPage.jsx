import React, { useState, useEffect } from 'react';
import { HeartPulse, Phone, Mail, ChevronLeft, ChevronRight, Sparkles, Award, Users, Clock } from 'lucide-react';

const VRKPatientCareFacilitiesPage = () => {
  const [activeSection] = useState('patient-care');
  const [visibleElements, setVisibleElements] = useState({});
  const [isMobile, setIsMobile] = useState(false);

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

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const patientCareData = [
    {
      title: 'Natural Healing Therapies',
      description: 'Reinforcing cure and healing by adopting natural therapies that systematically detoxify, heal, and rejuvenate the body, uplifting the body’s immune mechanism.',
      icon: '🌿',
    },
    {
      title: 'Personalized Nutrition',
      description: 'Specified wholesome diet advocated to individual needs and illness, as per the guidance from our physicians and nutritionists.',
      icon: '🥗',
    },
    {
      title: 'Counseling Support',
      description: 'Providing professional assistance and guidance through counseling to resolve personal and psychological problems.',
      icon: '🧠',
    },
    {
      title: 'Education & Awareness',
      description: 'Continuous education through in-house demos, discussions, lectures by doctors, and conclaves with eminent scholars.',
      icon: '📚',
    },
    {
      title: 'Feedback & Follow-Up',
      description: 'Encouraging consistent feedback and follow-up to ensure long-term adoption of healthy natural practices.',
      icon: '📝',
    },
    {
      title: 'Quality Commitment',
      description: 'Perpetuating Vedic Raksha Kendra Ayurveda hospital quality policy, aiming for enhanced healthcare through continuous refinement for stakeholder satisfaction.',
      icon: '🏆',
    },
  ];

  const facilitiesData = [
    {
      name: 'Reflexology Track',
      description: 'A reflexology track with natural pebbles designed to stimulate pressure points and promote relaxation.',
      icon: '🦶',
    },
    {
      name: 'Herbal Garden',
      description: 'Our herbal garden provides fresh, organic herbs used in treatments, fostering a connection with nature.',
      icon: '🌱',
    },
    {
      name: 'Walking Track',
      description: 'A long, tree-lined walking track for serene strolls, enhancing physical and mental well-being.',
      icon: '🚶',
    },
    {
      name: 'Yoga & Meditation Hall',
      description: 'An exquisite hall dedicated to yoga and meditation, offering a tranquil space for inner peace.',
      icon: '🧘',
    },
    {
      name: 'Outdoor Yoga Court',
      description: 'An open-air yoga court surrounded by nature, perfect for invigorating sessions.',
      icon: '🌞',
    },
    {
      name: 'Social Gathering Court',
      description: 'An open court under coconut shades for social gatherings and community events.',
      icon: '👥',
    },
    {
      name: 'Indoor & Outdoor Games',
      description: 'Indoor games and an outdoor play area for children and adults to enjoy recreational activities.',
      icon: '🎲',
    },
    {
      name: 'Treatment & Wellness',
      description: 'A state-of-the-art treatment section with nourishing diets, hammocks, swings, and farm-fresh produce.',
      icon: '🛌',
    },
  ];

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
      background: 'url("/src/assets/VRK_Ayurveda.png")',
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
    statsSection: {
      background: 'linear-gradient(135deg, #2d5a27 0%, #3d6b37 100%)',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    statCard: {
      textAlign: 'center',
      padding: '40px 20px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transform: 'translateY(40px)',
      opacity: 0,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    statCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    statIcon: {
      width: '48px',
      height: '48px',
      margin: '0 auto 20px',
      color: '#90ee90',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '8px',
      background: 'linear-gradient(45deg, #ffffff, #90ee90)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    statLabel: {
      fontSize: '1.1rem',
      opacity: 0.9,
      fontWeight: '500',
    },
    careGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '60px',
    },
    careCard: {
      background: 'white',
      padding: '40px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      border: '2px solid rgba(45, 90, 39, 0.05)',
      boxShadow: '0 12px 32px rgba(45, 90, 39, 0.08)',
      transform: 'translateY(30px)',
      opacity: 0,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    careCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    careIconWrapper: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #6b8e23, #90ee90)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px',
      boxShadow: '0 12px 24px rgba(107, 142, 35, 0.2)',
    },
    careIcon: {
      fontSize: '2rem',
      color: 'white',
    },
    careTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '16px',
    },
    careDescription: {
      fontSize: '1rem',
      color: '#6c757d',
      lineHeight: '1.6',
    },
    facilityGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
    },
    facilityCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 12px 32px rgba(45, 90, 39, 0.08)',
      border: '2px solid rgba(45, 90, 39, 0.05)',
      transform: 'translateY(40px)',
      opacity: 0,
      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'default',
    },
    facilityCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    facilityCardInner: {
      padding: '40px',
      textAlign: 'center',
    },
    facilityIcon: {
      fontSize: '3rem',
      background: 'linear-gradient(135deg, #f0f8e8, #e8f5e8)',
      width: '80px',
      height: '80px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px',
      border: '2px solid rgba(45, 90, 39, 0.1)',
    },
    facilityTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '16px',
    },
    facilityDescription: {
      fontSize: '1.1rem',
      color:  '#5a6c57',
      lineHeight: '1.7',
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
  };

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
            Patient Care Facilities
            <span style={styles.heroAccent}>Vedic Raksha Kendra Ayurveda</span>
          </h1>
          <p style={styles.heroDescription}>
            Comprehensive holistic healthcare designed to heal, rejuvenate, and nurture
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.decorativeShape}></div>

        {/* Patient Care Services Section */}
        <section
          id="patient-care"
          data-animate
          style={{
            ...styles.section,
            ...(visibleElements['patient-care'] ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Our Patient Care Approach</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                At Vedic Raksha Kendra Ayurveda, we offer comprehensive holistic healthcare to support your healing journey
              </p>
            </div>
            <div style={styles.careGrid}>
              {patientCareData.map((care, index) => (
                <div
                  key={index}
                  id={`care-${index}`}
                  data-animate
                  style={{
                    ...styles.careCard,
                    ...(visibleElements[`care-${index}`] ? {
                      ...styles.careCardVisible,
                      transitionDelay: `${index * 0.15}s`,
                    } : {}),
                  }}
                >
                  <div style={styles.careIconWrapper}>
                    <span style={styles.careIcon}>{care.icon}</span>
                  </div>
                  <h3 style={styles.careTitle}>{care.title}</h3>
                  <p style={styles.careDescription}>{care.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section
          id="facilities"
          data-animate
          style={{
            ...styles.section,
            ...(visibleElements.facilities ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Our Facilities</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                Experience wellness in a nurturing environment with our state-of-the-art amenities
              </p>
            </div>
            <div style={styles.facilityGrid}>
              {facilitiesData.map((facility, index) => (
                <div
                  key={index}
                  id={`facility-${index}`}
                  data-animate
                  style={{
                    ...styles.facilityCard,
                    ...(visibleElements[`facility-${index}`] ? {
                      ...styles.facilityCardVisible,
                      transitionDelay: `${index * 0.2}s`,
                    } : {}),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(45, 90, 39, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(45, 90, 39, 0.08)';
                  }}
                >
                  <div style={styles.facilityCardInner}>
                    <div style={styles.facilityIcon}>{facility.icon}</div>
                    <h3 style={styles.facilityTitle}>{facility.name}</h3>
                    <p style={styles.facilityDescription}>{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Ready to Experience Holistic Care?</h2>
            <p style={styles.contactDescription}>
              Contact us to learn more about our facilities or to schedule a visit
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
              <h4 style={styles.footerInfoTitle}>Care Approach</h4>
              <p style={{ margin: 0, color: '#6c757d' }}>
                Holistic healing methods for comprehensive wellness
              </p>
            </div>
            <div style={styles.footerInfoCard}>
              <h4 style={styles.footerInfoTitle}>Consultation Required</h4>
              <p style={{ margin: 0, color: '#6c757d' }}>
                Prior consultation mandatory for personalized care plans
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRKPatientCareFacilitiesPage;