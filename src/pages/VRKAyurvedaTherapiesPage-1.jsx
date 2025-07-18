import React, { useState, useEffect } from 'react';
import { HeartPulse, Phone, Mail, Sparkles, Award, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const VRKNaturopathyPage = () => {
  const [activeSection] = useState('therapies');
  const [visibleElements, setVisibleElements] = useState({});
  const [currentSlide, setCurrentSlide] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
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

  // Intersection Observer for scroll animations
  useEffect(() => {
    // Initialize therapies section as visible on mobile to ensure content loads
    if (isMobile) {
      setVisibleElements((prev) => ({
        ...prev,
        therapies: true,
        ...therapiesData.reduce((acc, _, index) => ({
          ...acc,
          [`therapy-${index}`]: true,
        }), {}),
      }));
    }

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
  }, [isMobile]);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const newSlides = { ...prev };
        therapiesData.forEach((therapy, index) => {
          const images = therapy.images;
          newSlides[index] = ((prev[index] || 0) + 1) % (images.length || 1);
        });
        return newSlides;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const therapiesData = [
    {
      name: 'Mud Therapy',
      description:
        'Mud therapy uses natural mineral-rich mud to draw out toxins, reduce inflammation, and cool the body. It is commonly applied to the abdomen, eyes, or full body and is known for its soothing and rejuvenating properties.',
      benefits: [
        'Detoxifies the skin and body',
        'Reduces inflammation and stress',
        'Improves digestion and eye health',
        'Balances body temperature',
      ],
      images: [
        '/assets/therapies/naturopathy/mud1.png',
        '/assets/therapies/naturopathy/mud2.png',
        '/assets/therapies/naturopathy/mud3.png',
      ],
      imageDescriptions: [
        'Full-body mud application',
        'Mud therapy for eyes',
        'Mud pack preparation',
      ],
      icon: '🪨',
      duration: '30-60 mins',
    },
    {
      name: 'Banana Leaf Therapy',
      description:
        'In Banana Leaf Therapy, the body is wrapped in warm banana leaves after applying herbal oils or decoctions. It helps detoxify, soothe skin conditions, and improve circulation by promoting natural sweating.',
      benefits: [
        'Promotes natural detoxification',
        'Improves skin tone and texture',
        'Relieves muscle stiffness',
        'Stimulates blood circulation',
      ],
      images: [
        '/assets/therapies/naturopathy/banana.png',
        '/assets/therapies/naturopathy/banana2.png',
      ],
      imageDescriptions: [
        'Banana leaf body wrap',
        'Therapeutic leaf treatment',
      ],
      icon: '🍃',
      duration: '45-60 mins',
    },
    {
      name: 'Diet Monitoring & Control',
      description:
        'Diet is a core pillar of naturopathy. Therapists monitor and guide you through a tailored natural diet plan based on your body type and health condition to promote healing from within.',
      benefits: [
        'Boosts metabolism and energy',
        'Corrects nutritional imbalances',
        'Aids in weight management',
        'Supports long-term wellness',
      ],
      images: [
        '/assets/therapies/naturopathy/diet.png',
        '/assets/therapies/naturopathy/diet2.png',
        '/assets/therapies/naturopathy/diet3.png',
      ],
      imageDescriptions: [
        'Personalized diet consultation',
        'Healthy meal planning',
        'Nutrition guidance session',
      ],
      icon: '🥗',
      duration: 'Ongoing / Daily Guidance',
    },
    {
      name: 'Hydrotherapy',
      description:
        'Hydrotherapy uses water in various forms (steam, cold packs, jets, or immersion) to stimulate circulation, relieve pain, and support detoxification. It includes treatments like hip baths, steam baths, and spinal sprays.',
      benefits: [
        'Improves blood circulation',
        'Relieves pain and stress',
        'Detoxifies through sweat',
        'Boosts immune function',
      ],
      images: [
        '/assets/therapies/naturopathy/Hydrotherapy_HipBath.jpg',
        '/assets/therapies/naturopathy/Hydrotherapy_Steam.jpg',
        '/assets/therapies/naturopathy/Hydrotherapy_JetSpray.jpg',
        '/assets/therapies/naturopathy/Hydrotherapy_Session.jpg',
      ],
      imageDescriptions: [
        'Hip bath therapy',
        'Steam bath session',
        'Spinal spray treatment',
        'Guided hydrotherapy session',
      ],
      icon: '💧',
      duration: '20-45 mins',
    },
  ];

  const therapyApproach = [
    {
      title: 'Authentic Preparations',
      description: 'All treatments use authentic, high-quality herbal oils and medicines prepared in-house.',
      icon: Award,
    },
    {
      title: 'Expert Supervision',
      description: 'Supervised by experienced Ayurvedic practitioners for safety and efficacy.',
      icon: HeartPulse,
    },
    {
      title: 'Holistic Integration',
      description: 'Combined with yoga, meditation, and diet for comprehensive wellness.',
      icon: Sparkles,
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Patients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '6', label: 'Specialized Therapies', icon: HeartPulse },
    { number: '24/7', label: 'Support Available', icon: Clock },
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
    therapyGrid: {
      display: 'grid',
      gap: '60px',
    },
    therapyCard: {
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(45, 90, 39, 0.08)',
      border: '1px solid rgba(45, 90, 39, 0.05)',
      transform: 'translateY(40px)',
      opacity: 0,
      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    therapyCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    therapyCardInner: {
      display: 'flex',
      minHeight: '500px',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'stretch' : 'center',
    },
    therapyContent: {
      padding: isMobile ? '40px 30px' : '60px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
      order: isMobile ? 1 : 1,
    },
    therapyHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    therapyIcon: {
      fontSize: '2.5rem',
      marginRight: '16px',
      background: 'linear-gradient(135deg, #f0f8e8, #e8f5e8)',
      width: '60px',
      height: '60px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid rgba(45, 90, 39, 0.1)',
    },
    therapyTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '8px',
    },
    therapyDuration: {
      fontSize: '0.95rem',
      color: '#6b8e23',
      fontWeight: '600',
      background: 'rgba(107, 142, 35, 0.1)',
      padding: '4px 12px',
      borderRadius: '20px',
      alignSelf: 'flex-start',
    },
    therapyDescription: {
      fontSize: '1.1rem',
      color: '#5a6c57',
      lineHeight: '1.7',
      marginBottom: '32px',
    },
    benefitsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
      fontSize: '1rem',
      color: '#6c757d',
    },
    benefitIcon: {
      width: '20px',
      height: '20px',
      marginRight: '12px',
      color: '#6b8e23',
    },
    therapyGallery: {
      padding: isMobile ? '30px' : '40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      flex: 1,
      justifyContent: 'center',
      order: isMobile ? 2 : 2,
    },
    galleryCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px',
    },
    galleryCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 8px 24px rgba(45, 90, 39, 0.06)',
      border: '1px solid rgba(45, 90, 39, 0.08)',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem',
      color: '#6c757d',
      fontWeight: '500',
      cursor: 'pointer',
    },
    slideshowContainer: {
      position: 'relative',
      width: '100%',
      height: '200px',
      overflow: 'hidden',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(45, 90, 39, 0.06)',
      background: 'white',
    },
    slideshowImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
    },
    slideshowImageActive: {
      opacity: 1,
    },
    slideshowNav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(45, 90, 39, 0.5)',
      borderRadius: '50%',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      zIndex: 1,
    },
    slideshowNavLeft: {
      left: '10px',
    },
    slideshowNavRight: {
      right: '10px',
    },
    approachSection: {
      background: 'white',
      padding: '100px 0',
      position: 'relative',
    },
    approachGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '60px',
    },
    approachCard: {
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      padding: '40px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      border: '2px solid rgba(45, 90, 39, 0.05)',
      transform: 'translateY(30px)',
      opacity: 0,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
    },
    approachCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    approachIconWrapper: {
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
    approachIcon: {
      width: '40px',
      height: '40px',
      color: 'white',
    },
    approachTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '16px',
    },
    approachDescription: {
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
      backgroundImage: 'url("/assets/hero_home.png")',
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

  const handleSlideChange = (therapyIndex, direction) => {
    const images = therapiesData[therapyIndex].images;
    setCurrentSlide((prev) => {
      const current = prev[therapyIndex] || 0;
      let next = direction === 'next' ? current + 1 : current - 1;
      if (next >= images.length) next = 0;
      if (next < 0) next = images.length - 1;
      return { ...prev, [therapyIndex]: next };
    });
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
            Ayurvedic Naturopathy Therapies<br/>
            <span style={styles.heroAccent}> Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Experience our authentic Ayurvedic Naturopathy therapies designed for holistic healing and rejuvenation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.decorativeShape}></div>

        {/* Therapies Section */}
        <section
          id="therapies"
          data-animate
          style={{
            ...styles.section,
            ...(visibleElements.therapies ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Our Signature Therapies</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                Discover our range of traditional Ayurvedic treatments, each carefully designed to restore balance and promote natural healing
              </p>
            </div>

            <div style={styles.therapyGrid}>
              {therapiesData.map((therapy, index) => (
                <div
                  key={index}
                  id={`therapy-${index}`}
                  data-animate
                  style={{
                    ...styles.therapyCard,
                    ...(visibleElements[`therapy-${index}`] ? {
                      ...styles.therapyCardVisible,
                      transitionDelay: `${index * 0.2}s`,
                    } : {}),
                  }}
                >
                  <div style={styles.therapyCardInner}>
                    <div style={styles.therapyContent}>
                      <div style={styles.therapyHeader}>
                        <div style={styles.therapyIcon}>{therapy.icon}</div>
                        <div>
                          <h3 style={styles.therapyTitle}>{therapy.name}</h3>
                          <div style={styles.therapyDuration}>
                            <Clock style={{ width: '14px', height: '14px', marginRight: '4px', display: 'inline' }} />
                            {therapy.duration}
                          </div>
                        </div>
                      </div>
                      <p style={styles.therapyDescription}>{therapy.description}</p>
                      <ul style={styles.benefitsList}>
                        {therapy.benefits.map((benefit, idx) => (
                          <li key={idx} style={styles.benefitItem}>
                            <Sparkles style={styles.benefitIcon} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={styles.therapyGallery}>
                      {/* Only show image descriptions on desktop */}
                      {!isMobile && (
                        <div style={styles.galleryCards}>
                          {therapy.imageDescriptions.map((description, imgIndex) => (
                            <div
                              key={imgIndex}
                              style={styles.galleryCard}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 16px 40px rgba(45, 90, 39, 0.12)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.06)';
                              }}
                            >
                              {description}
                            </div>
                          ))}
                        </div>
                      )}

                      <div style={styles.slideshowContainer}>
                        {therapy.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            alt={therapy.imageDescriptions[imgIndex] || `Image ${imgIndex + 1}`}
                            style={{
                              ...styles.slideshowImage,
                              ...(currentSlide[index] === imgIndex ? styles.slideshowImageActive : {}),
                            }}
                          />
                        ))}
                        {therapy.images.length > 1 && (
                          <>
                            <ChevronLeft
                              style={{ ...styles.slideshowNav, ...styles.slideshowNavLeft }}
                              onClick={() => handleSlideChange(index, 'prev')}
                            />
                            <ChevronRight
                              style={{ ...styles.slideshowNav, ...styles.slideshowNavRight }}
                              onClick={() => handleSlideChange(index, 'next')}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Approach Section */}
        <section
          id="approach"
          data-animate
          style={{
            ...styles.approachSection,
            ...(visibleElements.approach ? styles.sectionVisible : {}),
          }}
        >
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Our Treatment Philosophy</h2>
              <div style={styles.decorativeLine}></div>
              <p style={styles.sectionSubtitle}>
                Every treatment is crafted with precision, care, and deep understanding of Ayurvedic principles
              </p>
            </div>

            <div style={styles.approachGrid}>
              {therapyApproach.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <div
                    key={index}
                    id={`approach-${index}`}
                    data-animate
                    style={{
                      ...styles.approachCard,
                      ...(visibleElements[`approach-${index}`] ? {
                        ...styles.approachCardVisible,
                        transitionDelay: `${index * 0.15}s`,
                      } : {}),
                    }}
                  >
                    <div style={styles.approachIconWrapper}>
                      <IconComponent style={styles.approachIcon} />
                    </div>
                    <h3 style={styles.approachTitle}>{approach.title}</h3>
                    <p style={styles.approachDescription}>{approach.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Ready to Experience Healing?</h2>
            <p style={styles.contactDescription}>
              Contact us to learn more about our therapies or to schedule a consultation
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

export default VRKNaturopathyPage;