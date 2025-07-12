import React, { useState, useEffect } from 'react';
import { HeartPulse, Phone, Mail, Sparkles, UserCheck, MessageSquareQuote, PenLine } from 'lucide-react';

const VRKAyurvedaFromTheFounderPage = () => {
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

  // Check for mobile responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const commonExperience = [
    'Specializing in Panchakarma and chronic disease management',
    'Expertise in herbal formulations and lifestyle interventions',
    'Dedicated to promoting holistic wellness through Ayurveda',
    'Committed to personalized patient care',
  ];

  const foundersData = [
    {
      name: 'Dr. Velavan.K MBBS MDRT',
      photo: '/assets/founder2.jpeg',
      message: 'At Vedic Raksha Kendra Ayurvedic Hospital, we believe in the timeless wisdom of Ayurveda to heal, rejuvenate, and bring balance to life. My mission is to guide you on a journey of holistic wellness, rooted in nature’s embrace.',
      experience: commonExperience,
      quote: '"Healing is not just about curing the body; it’s about awakening the soul to its natural state of balance."',
      description: 'Dr. K. Velavan, the founder of Vedic Raksha Kendra Ayurvedic Hospital, brings over three decades of experience as a renowned Radiation Oncologist and Managing Director of Erode Cancer Centre. Guided by a deep commitment to patient-centered care, he established Vedic Raksha Kendra to offer holistic healing by integrating the wisdom of Ayurveda with modern wellness practices. His vision is rooted in compassion, community outreach, and ethical healthcare, making the center a beacon of hope for preventive and integrative medicine.',
    },
    {
      name: 'Dr. C. Giridharan',
      photo: '/assets/founder3.jpeg',
      message: 'Our goal is to empower individuals with the knowledge and practices of Ayurveda to achieve lasting wellness and vitality.',
      experience: commonExperience,
      quote: '"True health is achieved when the body, mind, and spirit are in perfect harmony."',
      description: 'Dr. C. Giridharan serves as a Trustee of Cumulative Action for Rural Development (CARD) Trust—an NGO founded in 2004 in Villupuram, Tamil Nadu, dedicated to empowering women and underprivileged rural communities through self-help groups, vocational training, education, healthcare, and social awareness initiatives. In this role, he brings his extensive medical expertise—drawing from his work as a surgeon and healthcare leader—to guide CARD Trust’s health, nutrition, and sanitation programs, ensuring ethical oversight and impactful community reach. As a Trustee at Vedic Raksha Kendra Ayurvedic Hospital, Dr. Giridharan collaborates with founder Dr. K. Velavan to strengthen patient-centered integrative care, enhance community wellness education, and uphold compassionate healthcare governance—amplifying his lifelong commitment to rural health and holistic healing.',
    },
    {
      name: 'Dr. Saravanan G.',
      photo: '/assets/founder1.jpeg',
      message: 'We strive to bridge cutting-edge research with traditional Ayurvedic practices to deliver evidence-based, compassionate care.',
      experience: commonExperience,
      quote: '"Innovation in healthcare comes from blending ancient wisdom with modern science for holistic healing."',
      description: 'Dr. S. Saravanan G., a distinguished researcher and healthcare innovator, serves as the Head of Research at Erode Cancer Centre—where his leadership drives pioneering oncology projects and fosters interdisciplinary studies for improved patient outcomes. As the founder of V & S Global Solutions, he spearheads advanced healthcare research tools and data analytics platforms to support integrative medicine practices. In collaboration with Vedic Raksha Kendra Ayurvedic Hospital, Dr. Saravanan integrates rigorous scientific methodologies into traditional wellness protocols, championing evidence-based Ayurveda and holistic healing. His strategic vision bridges cutting-edge cancer research and Ayurvedic wisdom, creating a unified model of compassionate, patient-centered care and innovation.',
    },
  ];

  const visionAndBackground = {
    background: 'The founders of Vedic Raksha Kendra Ayurvedic Hospital are renowned Ayurvedic practitioners and healthcare leaders who have dedicated their lives to bringing authentic Ayurvedic healing to the modern world. Trained in traditional Ayurveda and modern medical sciences, they combine ancient wisdom with contemporary insights to offer personalized care.',
    vision: 'Our vision is to create a sanctuary of healing where every individual can experience the transformative power of Ayurveda, fostering harmony of body, mind, and spirit, and making Ayurveda accessible to all by blending tradition with innovation.',
  };

  const styles = {
    modernContainer: {
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    heroSection: {
      position: 'relative',
      height: isMobile ? '60vh' : '100vh',
      minHeight: isMobile ? '500px' : 'auto',
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
      background: 'url("/assets/VRK_Ayurveda.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -2,
    },
    heroContent: {
      maxWidth: isMobile ? '100%' : '1400px',
      width: '100%',
      margin: '0 auto',
      padding: isMobile ? '0 1rem' : '0 2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'flex-start',
      height: '100%',
      zIndex: 1,
      textAlign: isMobile ? 'center' : 'left',
    },
    heroTitle: {
      marginTop: isMobile ? '2rem' : '5rem',
      fontSize: isMobile ? '2rem' : '4rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      maxWidth: isMobile ? '90%' : '800px',
      color: '#2d5a27',
    },
    heroAccent: {
      display: 'block',
      background: 'linear-gradient(45deg, #daa520, #90ee90)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroDescription: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      opacity: 0.9,
      marginBottom: '3rem',
      maxWidth: isMobile ? '90%' : '600px',
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
      width: isMobile ? '150px' : '200px',
      height: isMobile ? '150px' : '200px',
      background: 'linear-gradient(135deg, rgba(45, 90, 39, 0.05), rgba(107, 142, 35, 0.03))',
      borderRadius: '50%',
      zIndex: 0,
    },
    section: {
      position: 'relative',
      zIndex: 1,
      padding: isMobile ? '40px 0' : '80px 0',
      opacity: 0,
      transform: 'translateY(60px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    sectionVisible: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    container: {
      maxWidth: isMobile ? '100%' : '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 1rem' : '0 2rem',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: isMobile ? '40px' : '60px',
      position: 'relative',
    },
    sectionTitle: {
      fontSize: isMobile ? '2rem' : '3rem',
      fontWeight: 'bold',
      color: '#2d5a27',
      marginBottom: '16px',
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
    sectionSubtitle: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      color: '#6c757d',
      maxWidth: isMobile ? '90%' : '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '400',
    },
    decorativeLine: {
      width: isMobile ? '60px' : '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #6b8e23, #90ee90)',
      margin: isMobile ? '16px auto' : '24px auto',
      borderRadius: '2px',
    },
    founderSection: {
      background: 'white',
      padding: isMobile ? '50px 0' : '100px 0',
    },
    founderImagesContainer: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(250px, 1fr))',
      gap: isMobile ? '20px' : '40px',
      justifyContent: 'center',
      alignItems: 'start',
      margin: '0 auto',
    },
    founderImageWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: isMobile ? 'auto' : '600px', // Ensure consistent height for alignment
    },
    founderImage: {
      width: '100%',
      maxWidth: isMobile ? '300px' : '400px',
      height: isMobile ? '350px' : '500px',
      borderRadius: '20px',
      boxShadow: '0 12px 32px rgba(45, 90, 39, 0.08)',
      border: '1px solid rgba(45, 90, 39, 0.05)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    founderName: {
      marginTop: '16px',
      fontSize: isMobile ? '1rem' : '1.2rem',
      fontWeight: '600',
      color: '#2d5a27',
      textAlign: 'center',
    },
    founderDescription: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#6c757d',
      lineHeight: '1.7',
      marginTop: '12px',
      textAlign: 'center',
      maxWidth: isMobile ? '90%' : '400px',
    },
    backgroundSection: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      padding: isMobile ? '40px 0' : '80px 0',
    },
    backgroundContent: {
      maxWidth: isMobile ? '100%' : '900px',
      margin: '0 auto',
      textAlign: 'center',
    },
    backgroundDescription: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      color: '#6c757d',
      lineHeight: '1.7',
      marginBottom: '32px',
    },
    experienceList: {
      listStyle: 'none',
      padding: 0,
      textAlign: 'left',
      maxWidth: isMobile ? '90%' : '600px',
      margin: '0 auto',
    },
    experienceItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#6c757d',
    },
    experienceIcon: {
      width: isMobile ? '16px' : '20px',
      height: isMobile ? '16px' : '20px',
      marginRight: '12px',
      color: '#6b8e23',
    },
    quoteSection: {
      color: 'white',
      padding: isMobile ? '40px 0' : '80px 0',
      textAlign: 'center',
    },
    quoteText: {
      fontSize: isMobile ? '1.0rem' : '1.2rem',
      fontStyle: 'italic',
      maxWidth: isMobile ? '90%' : '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      opacity: '0.9',
      color: '#2d5a27',
    },
    quoteAuthor: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      fontWeight: '600',
      marginTop: '24px',
      color: '#90ee90',
    },
    contactSection: {
      position: 'relative',
      minHeight: isMobile ? '50vh' : '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundImage: 'url("/assets/hero_home.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
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
      maxWidth: isMobile ? '100%' : '800px',
      margin: '0 auto',
      padding: isMobile ? '0 1rem' : '0 2rem',
      textAlign: 'center',
    },
    contactHeader: {
      marginBottom: '2rem',
    },
    contactTitle: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      lineHeight: '1.2',
      color: '#fffff',
    },
    contactDescription: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      opacity: 0.9,
      lineHeight: '1.6',
      color: '#fffff',
    },
    contactActions: {
      display: 'flex',
      gap: isMobile ? '0.5rem' : '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    contactBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: isMobile ? '0.9rem' : '1.1rem',
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
      width: isMobile ? '16px' : '20px',
      height: isMobile ? '16px' : '20px',
    },
    footerSection: {
      background: 'linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 100%)',
      padding: isMobile ? '40px 0 20px' : '80px 0 40px',
      textAlign: 'center',
    },
    footerContent: {
      maxWidth: isMobile ? '100%' : '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 1rem' : '0 2rem',
    },
    footerTitle: {
      fontSize: isMobile ? '1.8rem' : '2rem',
      fontWeight: 'bold',
      color: '#2d5a27',
      marginBottom: '16px',
    },
    footerText: {
      color: '#6c757d',
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      marginBottom: isMobile ? '20px' : '40px',
    },
    footerInfo: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '15px' : '30px',
      marginTop: isMobile ? '20px' : '40px',
    },
    footerInfoCard: {
      background: 'white',
      padding: isMobile ? '20px' : '40px 30px',
      borderRadius: '20px',
      boxShadow: '0 12px 32px rgba(45, 90, 39, 0.08)',
      border: '1px solid rgba(45, 90, 39, 0.05)',
    },
    footerInfoTitle: {
      fontWeight: '600',
      color: '#2d5a27',
      marginBottom: '16px',
      fontSize: isMobile ? '1rem' : '1.2rem',
    },
    heroFeatures: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
      width: '100%',
      maxWidth: isMobile ? '100%' : '901px',
    },
    heroFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: isMobile ? '1rem' : '1.5rem',
      borderRadius: '16px',
      color: '#1a3d1a',
    },
    featureIcon: {
      width: isMobile ? '20px' : '24px',
      height: isMobile ? '20px' : '24px',
      color: '#daa520',
    },
  };

  const features = [
    {
      icon: UserCheck,
      title: 'Decades of Experience',
      desc: 'Led by seasoned Ayurvedic practitioners and medical experts with a lifelong commitment to natural healing.',
    },
    {
      icon: MessageSquareQuote,
      title: 'Guided by Wisdom',
      desc: 'Our approach is shaped by traditional knowledge, deep intuition, and a compassionate vision for wellness.',
    },
    {
      icon: PenLine,
      title: 'A Personal Mission',
      desc: 'Every treatment at Vedic Raksha Kendra Ayurvedic Hospital is rooted in our founders’ belief in harmony, purpose, and care.',
    },
  ];

  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            From the Founders<br />
            <span style={styles.heroAccent}>Vedic Raksha Kendra Ayurvedic Hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Meet the visionaries behind our mission to bring holistic healing through Ayurveda
          </p>
          <div style={styles.heroFeatures}>
            {features.map((feature, index) => (
              <div key={index} style={styles.heroFeature}>
                <feature.icon style={styles.featureIcon} />
                <div>
                  <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', opacity: 0.8, margin: 0 }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.decorativeShape}></div>

        {/* Founder Images */}
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
              <h2 style={styles.sectionTitle}>
                Meet Our Founders<br />
              </h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                Dedicated healers committed to the art and science of Ayurveda
              </p>
            </div>
            <div style={styles.founderImagesContainer}>
              {foundersData.map((founder, index) => (
                <div key={index} style={styles.founderImageWrapper}>
                  <div
                    style={{
                      ...styles.founderImage,
                      backgroundImage: `url(${founder.photo})`,
                    }}
                  ></div>
                  <p style={styles.founderName}>{founder.name}</p>
                  <p style={styles.founderDescription}>{founder.description}</p>
                </div>
              ))}
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
              <h2 style={styles.sectionTitle}>
                Background & Vision<br />
              </h2>
              <div style={styles.decorativeLine}></div>
            </div>
            <div style={styles.backgroundContent}>
              <p style={styles.backgroundDescription}>{visionAndBackground.background}</p>
              <p style={styles.backgroundDescription}>{visionAndBackground.vision}</p>
              <div>
                <h3 style={{ ...styles.sectionTitle, fontSize: isMobile ? '1.5rem' : '1.8rem' }}>Our Expertise</h3>
                <ul style={styles.experienceList}>
                  {commonExperience.map((item, idx) => (
                    <li key={idx} style={styles.experienceItem}>
                      <Sparkles style={styles.experienceIcon} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
            {foundersData.map((founder, index) => (
              <div key={index} style={{ marginBottom: isMobile ? '20px' : '40px' }}>
                <p style={styles.quoteText}>{founder.quote}</p>
                <p style={styles.quoteAuthor}>- {founder.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>
              Connect with Us<br />
            </h2>
            <p style={styles.contactDescription}>
              Reach out to learn more about our holistic approach to healing
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
          <h3 style={styles.footerTitle}>
            Vedic Raksha Kendra Ayurvedic Hospital
          </h3>
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