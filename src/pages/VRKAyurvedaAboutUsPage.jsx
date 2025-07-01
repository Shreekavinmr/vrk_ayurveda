import React, { useState, useEffect } from 'react';
import { HeartPulse, Phone, Mail, Sparkles, Award, Users, Leaf,Scale,Quote,UserCircle,BookOpenCheck } from 'lucide-react';

const VRKAyurvedaAboutUsPage = () => {
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

  const aboutData = {
    history: 'Established in 2008, Vedic Raksha Kendra Ayurveda hospital was born from a vision to revive and share the ancient healing wisdom of Ayurveda. Founded by Dr. V. R. Krishnan in Kerala, the heartland of Ayurveda, the hospital has grown into a trusted sanctuary for holistic wellness, serving over 500 patients with personalized care.',
    mission: 'Our mission is to empower individuals to achieve optimal health and balance through authentic Ayurvedic practices, integrating traditional wisdom with modern care.',
    coreValues: [
  {
    title: 'Authenticity',
    description: 'Upholding the purity of traditional Ayurvedic practices with high-quality, in-house herbal preparations.',
    icon: Award
  },
  {
    title: 'Compassion',
    description: 'Providing care with empathy, respect, and a deep commitment to patient well-being.',
    icon: HeartPulse
  },
  {
    title: 'Holistic Healing',
    description: 'Addressing the body, mind, and spirit for comprehensive wellness.',
    icon: Sparkles
  },
  {
    title: 'Community',
    description: 'Fostering a supportive environment for patients and practitioners alike.',
    icon: Users
  },
  {
    title: 'Philosophy',
    description: 'Health is harmony. We balance the doshas through personalized Ayurvedic treatments and conscious living.',
    icon: Scale
  },
  {
    title: 'Sustainability',
    description: 'Embracing eco-friendly practices and ethical sourcing to heal both people and the planet.',
    icon: Leaf
  }
],
    team: [
      {
        name: 'Dr. V. R. Krishnan',
        role: 'Founder & Chief Practitioner',
        bio: 'With over 20 years of experience, Dr. Krishnan specializes in Panchakarma and chronic disease management, trained under Kerala’s Ayurvedic masters.',
        photo: 'Team_Krishnan.jpg',
      },
      {
        name: 'Dr. Anjali Nair',
        role: 'Senior Ayurvedic Consultant',
        bio: 'Dr. Nair brings 15 years of expertise in women’s health and rejuvenation therapies, with a focus on personalized care.',
        photo: 'Team_Anjali.jpg',
      },
      {
        name: 'Dr. Siddharth Menon',
        role: 'Therapy Specialist',
        bio: 'Specializing in Shirodhara and Kizhi, Dr. Menon has 10 years of experience in pain management and detoxification.',
        photo: 'Team_Siddharth.jpg',
      },
    ],
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
      fontWeight: '800',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      maxWidth: '800px',
      color: '#2d5a27',
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
      fontWeight: '800',
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
    historySection: {
      background: 'white',
      padding: '100px 0',
    },
    historyContent: {
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
    },
    historyDescription: {
      fontSize: '1.1rem',
      color: '#5a6c57',
      lineHeight: '1.7',
      marginBottom: '32px',
    },
    missionDescription: {
      fontSize: '1.2rem',
      fontStyle: 'italic',
      color: '#6b8e23',
      maxWidth: '700px',
      margin: '0 auto',
    },
    valuesSection: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      padding: '80px 0',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '60px',
    },
    valueCard: {
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
    valueCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    valueIconWrapper: {
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
    valueIcon: {
      width: '40px',
      height: '40px',
      color: 'white',
    },
    valueTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '16px',
    },
    valueDescription: {
      fontSize: '1rem',
      color: '#6c757d',
      lineHeight: '1.6',
    },
    timelineSection: {
      background: 'linear-gradient(135deg, #2d5a27 0%, #3d6b37 100%)',
      color: 'white',
      padding: '80px 0',
    },
    timelineGrid: {
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      padding: '0 20px',
    },
    timelineLine: {
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: '4px',
      background: 'linear-gradient(180deg, #90ee90, #6b8e23)',
      transform: 'translateX(-50%)',
      '@media (max-width: 768px)': {
        left: '20px',
      },
    },
    timelineItem: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      marginBottom: '40px',
      position: 'relative',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },
    timelineYear: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#90ee90',
      textAlign: 'right',
      paddingRight: '40px',
      '@media (max-width: 768px)': {
        textAlign: 'left',
        paddingRight: 0,
        marginBottom: '16px',
      },
    },
    timelineEvent: {
      fontSize: '1.1rem',
      color: 'white',
      lineHeight: '1.6',
      paddingLeft: '40px',
      position: 'relative',
      '@media (max-width: 768px)': {
        paddingLeft: '40px',
      },
    },
    timelineDot: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '16px',
      height: '16px',
      background: '#6b8e23',
      border: '3px solid #90ee90',
      borderRadius: '50%',
      zIndex: 1,
      '@media (max-width: 768px)': {
        left: '20px',
      },
    },
    teamSection: {
      background: 'white',
      padding: '100px 0',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '60px',
    },
    teamCard: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      padding: '40px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      border: '2px solid rgba(45, 90, 39, 0.05)',
      boxShadow: '0 12px 32px rgba(45, 90, 39, 0.08)',
      transform: 'translateY(30px)',
      opacity: 0,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    teamCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    teamImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      margin: '0 auto 24px',
      background: 'linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6c757d',
      fontSize: '0.9rem',
      border: '2px solid rgba(45, 90, 39, 0.1)',
    },
    teamName: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '8px',
    },
    teamRole: {
      fontSize: '1rem',
      color: '#6b8e23',
      marginBottom: '16px',
    },
    teamBio: {
      fontSize: '1rem',
      color: '#6c757d',
      lineHeight: '1.6',
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
  const features = [
  {
    icon: UserCircle,
    title: 'A Healer’s Journey',
    desc: 'From early roots in Ayurveda to decades of dedicated practice, our founder’s story is one of purpose.'
  },
  {
    icon: BookOpenCheck,
    title: 'Wisdom in Practice',
    desc: 'Every treatment is informed by deep knowledge, personal intuition, and a love for holistic healing.'
  },
  {
    icon: Quote,
    title: 'Words that Inspire',
    desc: '“Healing is not a process of fixing — it’s a return to balance.” — Founder, Vedic Raksha Kendra Ayurveda hospital'
  }
];



  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            About Us
            <span style={styles.heroAccent}> Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Discover our story, mission, and commitment to holistic healing
          </p>
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
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.decorativeShape}></div>

        {/* History & Mission */}
        <section
          id="history"
          data-animate
          style={{
            ...styles.historySection,
            ...(visibleElements.history ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Our Story</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                A legacy of healing rooted in the traditions of Ayurveda
              </p>
            </div>
            <div style={styles.historyContent}>
              <p style={styles.historyDescription}>{aboutData.history}</p>
              <p style={styles.missionDescription}>{aboutData.mission}</p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section
          id="values"
          data-animate
          style={{
            ...styles.valuesSection,
            ...(visibleElements.values ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Our Core Values</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                The principles that guide our practice and commitment to your wellness
              </p>
            </div>
            <div style={styles.valuesGrid}>
              {aboutData.coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    id={`value-${index}`}
                    data-animate
                    style={{
                      ...styles.valueCard,
                      ...(visibleElements[`value-${index}`] ? {
                        ...styles.valueCardVisible,
                        transitionDelay: `${index * 0.15}s`,
                      } : {}),
                    }}
                  >
                    <div style={styles.valueIconWrapper}>
                      <IconComponent style={styles.valueIcon} />
                    </div>
                    <h3 style={styles.valueTitle}>{value.title}</h3>
                    <p style={styles.valueDescription}>{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section
          id="team"
          data-animate
          style={{
            ...styles.teamSection,
            ...(visibleElements.team ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Our Team</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                Meet the dedicated professionals behind your healing journey
              </p>
            </div>
            <div style={styles.teamGrid}>
              {aboutData.team.map((member, index) => (
                <div
                  key={index}
                  id={`team-${index}`}
                  data-animate
                  style={{
                    ...styles.teamCard,
                    ...(visibleElements[`team-${index}`] ? {
                      ...styles.teamCardVisible,
                      transitionDelay: `${index * 0.15}s`,
                    } : {}),
                  }}
                >
                  <div style={styles.teamImage}>{member.photo.replace('.jpg', '')}</div>
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamRole}>{member.role}</p>
                  <p style={styles.teamBio}>{member.bio}</p>
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

export default VRKAyurvedaAboutUsPage;