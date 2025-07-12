import React, { useState, useEffect } from 'react';
import { HeartPulse, Phone, Mail, Sparkles, Award, Users, Leaf, Scale, Quote, UserCircle, BookOpenCheck } from 'lucide-react';

const VRKAyurvedaAboutUsPage = () => {
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
      { threshold: isMobile ? 0.05 : 0.1, rootMargin: isMobile ? '0px 0px -30px 0px' : '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isMobile]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const aboutData = {
    history: 'Established in 2022 by Dr. K. Velavan and Mr. Saravanan G, Vedic Raksha Kendra Ayurvedic Hospital is a center of excellence in holistic healing, rooted in the timeless principles of Ayurveda and Siddha. Located in the heart of Erode, Tamil Nadu, our hospital is committed to nurturing wellness through natural, personalized, and integrative care.',
    mission: 'Our mission is to empower individuals to achieve optimal health and balance through authentic Ayurvedic and Siddha practices, integrating traditional wisdom with modern care to foster holistic well-being.',
    whyChooseUs: [
      {
        title: 'Founded by Medical Experts',
        description: 'With decades of experience in both conventional and traditional medicine.',
        icon: Award
      },
      {
        title: 'Holistic & Ethical',
        description: 'Focused on long-term well-being and natural healing.',
        icon: HeartPulse
      },
      {
        title: 'Trusted by the Community',
        description: 'With deep roots in Erode and a growing patient base from across Tamil Nadu.',
        icon: Users
      },
      {
        title: 'Patient-Centric Approach',
        description: 'Treatments tailored to individual needs with personalized attention and care.',
        icon: Sparkles
      }
    ],
    whatWeOffer: [
      'Classical Ayurvedic and Siddha Therapies including Panchakarma, Vasti, Kizhi, Nasya, and Marma Chikitsa',
      'Customized Herbal Formulations for chronic conditions and general health maintenance',
      'Special Programs for lifestyle disorders such as arthritis, stress, digestive issues, obesity, and hormonal imbalances',
      'Wellness Workshops covering diet, yoga, detox routines, and natural immunity building'
    ],
    coreValues: [
      {
        title: 'Authenticity',
        description: 'Upholding the purity of traditional Ayurvedic and Siddha practices with high-quality, in-house herbal preparations.',
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
        description: 'Health is harmony. We balance the doshas through personalized treatments and conscious living.',
        icon: Scale
      },
      {
        title: 'Sustainability',
        description: 'Embracing eco-friendly practices and ethical sourcing to heal both people and the planet.',
        icon: Leaf
      }
    ],
    team: [
      // {
      //   name: 'Dr. K. Velavan, MBBS, MDRT',
      //   role: 'Founder & Managing Director',
      //   bio: 'With over 32 years of clinical experience in radiation oncology, Dr. K. Velavan is the Managing Director of Erode Cancer Centre. His visionary leadership bridges modern allopathic medicine with traditional Indian healing systems, having conducted numerous cancer awareness programs and trained healthcare professionals in evidence-based, patient-first care models.',
      //   photo: 'Team_Velavan.jpg',
      // },
      // {
      //   name: 'Mr. Saravanan G.',
      //   role: 'Co-Founder & Research Head',
      //   bio: 'A distinguished researcher and healthcare innovator, Mr. Saravanan G. leads research at Erode Cancer Centre and founded V & S Global Solutions. His work integrates rigorous scientific methodologies with traditional wellness protocols, championing evidence-based Ayurveda and Siddha for holistic healing.',
      //   photo: 'Team_Saravanan.jpg',
      // },
      {
        name: 'Dr. M.P. Saranya, BAMS',
        role: 'Ayurvedic Physician',
        bio: 'Dr. M.P. Saranya holds a BAMS degree from Government Ayurveda Medical College and Hospital, Nagercoil, with a strong focus on Panchakarma procedures like Vasthi, Abyangam, and Pizhichal. With expertise in managing lifestyle disorders and chronic diseases, she assists in patient diagnosis, conducts free medical camps, and follows up on patient progress, including post-COVID care under the Govt. Arogya Programme. Her participation in national conferences reflects her commitment to advancing Ayurvedic practices.',
        photo: 'team1.png',
      },
      {
        name: 'Dr. Mohan Raj K, BAMS',
        role: 'Ayurvedic Physician',
        bio: 'Dr. Mohan Raj K, a BAMS graduate from Government Ayurveda Medical College & Hospital, Nagercoil, specializes in Panchakarma treatments and has a passion for formulating effective Ayurvedic medicines. With a strong foundation in clinical practices and a commitment to patient care, he brings innovation and dedication to holistic healing, supported by his skills in computer basics and video editing.',
        photo: 'team2.png',
      },
      {
        name: 'Saravanan Jagadesan, BPT',
        role: 'Physiotherapist & Yoga Therapist',
        bio: 'With 15 years of experience as a physiotherapist, Saravanan Jagadesan specializes in musculoskeletal pain management, neuro and ortho rehabilitation, and post-COVID breathing exercises. He integrates yoga, pranayama, and psychological counseling into his practice, having worked at Apollo Hospitals and other leading institutions. His expertise in manual therapy and electrotherapy modalities enhances the hospital’s integrative care approach.',
        photo: 'team3.png',
      }
    ],
  };

  const features = [
    {
      icon: UserCircle,
      title: 'A Healer’s Journey',
      desc: 'From early roots in Ayurveda and Siddha to decades of dedicated practice, our founders’ story is one of purpose.'
    },
    {
      icon: BookOpenCheck,
      title: 'Wisdom in Practice',
      desc: 'Every treatment is informed by deep knowledge, personal intuition, and a love for holistic healing.'
    },
    {
      icon: Quote,
      title: 'Words that Inspire',
      desc: '“Healing is not a process of fixing — it’s a return to balance.” — Dr. K. Velavan, Vedic Raksha Kendra Ayurvedic Hospital'
    }
  ];

  const styles = {
    modernContainer: {
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    heroSection: {
      position: 'relative',
      height: isMobile ? '60vh' : '100vh',
      minHeight: isMobile ? '550px' : 'auto',
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
      fontWeight: '700',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      maxWidth: isMobile ? '90%' : '800px',
      color: '#2d5a27',
    },
    heroAccent: {
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
      fontWeight: '700',
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
    historySection: {
      background: 'white',
      padding: isMobile ? '50px 0' : '100px 0',
    },
    historyContent: {
      maxWidth: isMobile ? '100%' : '900px',
      margin: '0 auto',
      textAlign: 'center',
    },
    historyDescription: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      color: '#5a6c57',
      lineHeight: '1.7',
      marginBottom: '32px',
    },
    missionDescription: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      fontStyle: 'italic',
      color: '#6b8e23',
      maxWidth: isMobile ? '90%' : '700px',
      margin: '0 auto',
    },
    whyChooseUsSection: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      padding: isMobile ? '40px 0' : '80px 0',
    },
    whyChooseUsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '20px' : '40px',
      marginTop: isMobile ? '30px' : '60px',
    },
    whyChooseUsCard: {
      background: 'white',
      padding: isMobile ? '20px' : '40px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      border: '2px solid rgba(45, 90, 39, 0.05)',
      boxShadow: '0 12px 32px rgba(45, 90, 39, 0.08)',
      transform: 'translateY(30px)',
      opacity: 0,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    whyChooseUsCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    whatWeOfferSection: {
      background: 'white',
      padding: isMobile ? '50px 0' : '100px 0',
    },
    whatWeOfferList: {
      listStyle: 'none',
      padding: 0,
      textAlign: 'left',
      maxWidth: isMobile ? '90%' : '700px',
      margin: '0 auto',
    },
    whatWeOfferItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#6c757d',
    },
    whatWeOfferIcon: {
      width: isMobile ? '16px' : '20px',
      height: isMobile ? '16px' : '20px',
      marginRight: '12px',
      color: '#6b8e23',
    },
    valuesSection: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      padding: isMobile ? '40px 0' : '80px 0',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '20px' : '40px',
      marginTop: isMobile ? '30px' : '60px',
    },
    valueCard: {
      background: 'white',
      padding: isMobile ? '20px' : '40px 30px',
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
      width: isMobile ? '60px' : '80px',
      height: isMobile ? '60px' : '80px',
      background: 'linear-gradient(135deg, #6b8e23, #90ee90)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px',
      boxShadow: '0 12px 24px rgba(107, 142, 35, 0.2)',
    },
    valueIcon: {
      width: isMobile ? '30px' : '40px',
      height: isMobile ? '30px' : '40px',
      color: 'white',
    },
    valueTitle: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '16px',
    },
    valueDescription: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#6c757d',
      lineHeight: '1.6',
    },
    teamSection: {
      background: 'white',
      padding: isMobile ? '50px 0' : '100px 0',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '20px' : '40px',
      marginTop: isMobile ? '30px' : '60px',
    },
    teamCard: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      padding: isMobile ? '20px' : '40px 30px',
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
      width: isMobile ? '120px' : '150px',
      height: isMobile ? '120px' : '150px',
      borderRadius: '50%',
      margin: '0 auto 24px',
      background: 'linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6c757d',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      border: '2px solid rgba(45, 90, 39, 0.1)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    teamName: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '8px',
    },
    teamRole: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#6b8e23',
      marginBottom: '16px',
    },
    teamBio: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#6c757d',
      lineHeight: '1.6',
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
      fontWeight: '700',
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
      fontWeight: '700',
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
  };

  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            About Us <br/>Vedic Raksha Kendra Ayurvedic Hospital
          </h1>
          <p style={styles.heroDescription}>
            Discover our story, mission, and commitment to holistic healing
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
                A legacy of healing rooted in the traditions of Ayurveda and Siddha
              </p>
            </div>
            <div style={styles.historyContent}>
              <p style={styles.historyDescription}>{aboutData.history}</p>
              <p style={styles.missionDescription}>{aboutData.mission}</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          id="why-choose-us"
          data-animate
          style={{
            ...styles.whyChooseUsSection,
            ...(visibleElements['why-choose-us'] ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Why Choose Vedic Raksha Kendra Ayurvedic Hospital</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                Discover what sets us apart in delivering holistic wellness
              </p>
            </div>
            <div style={styles.whyChooseUsGrid}>
              {aboutData.whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    id={`why-choose-us-${index}`}
                    data-animate
                    style={{
                      ...styles.whyChooseUsCard,
                      ...(visibleElements[`why-choose-us-${index}`] ? {
                        ...styles.whyChooseUsCardVisible,
                        transitionDelay: `${index * 0.15}s`,
                      } : {}),
                    }}
                  >
                    <div style={styles.valueIconWrapper}>
                      <IconComponent style={styles.valueIcon} />
                    </div>
                    <h3 style={styles.valueTitle}>{reason.title}</h3>
                    <p style={styles.valueDescription}>{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section
          id="what-we-offer"
          data-animate
          style={{
            ...styles.whatWeOfferSection,
            ...(visibleElements['what-we-offer'] ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>What We Offer at Vedic Raksha Kendra Ayurvedic Hospital</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                Personalized treatments and programs for your wellness journey
              </p>
            </div>
            <ul style={styles.whatWeOfferList}>
              {aboutData.whatWeOffer.map((item, index) => (
                <li key={index} style={styles.whatWeOfferItem}>
                  <Sparkles style={styles.whatWeOfferIcon} />
                  {item}
                </li>
              ))}
            </ul>
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
                  <div
                    style={{
                      ...styles.teamImage,
                      backgroundImage: `url(/assets/${member.photo})`,
                    }}
                  ></div>
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
            <h2 style={styles.contactTitle}>Connect with Vedic Raksha Kendra Ayurvedic Hospital</h2>
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

export default VRKAyurvedaAboutUsPage;