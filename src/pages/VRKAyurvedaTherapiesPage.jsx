import React, { useState, useEffect } from 'react';
import { HeartPulse, Phone, Mail, ChevronDown, Sparkles, Award, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const VRKAyurvedaTherapiesPage = () => {
  const [activeSection] = useState('therapies');
  const [visibleElements, setVisibleElements] = useState({});
  const [currentSlide, setCurrentSlide] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 });

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
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const therapiesData = [
    {
      name: 'Panchakarma',
      description: 'Panchakarma is a set of five detoxifying therapies designed to cleanse the body of toxins, restore balance, and rejuvenate. It includes Vamana (therapeutic emesis), Virechana (purgation), Nasya (nasal administration), Vasti (enema), and Raktamokshana (bloodletting). These therapies are tailored to individual needs to promote holistic healing.',
      benefits: [
        'Eliminates toxins from the body',
        'Improves digestion and metabolism',
        'Enhances immunity and vitality',
        'Balances doshas (Vata, Pitta, Kapha)',
      ],
      images: [
        '/src/assets/therapies/panchakarna/panchakarma1.png',
        '/src/assets/therapies/panchakarna/panchakarma2.png',
        '/src/assets/therapies/panchakarna/panchakarma3.png',
        '/src/assets/therapies/panchakarna/panchakarma4.png',
        '/src/assets/therapies/panchakarna/panchakarma5.png',
      ],
      imageDescriptions: [
        'Panchakarma Vamana therapy',
        'Panchakarma Virechana therapy',
        'Panchakarma Nasya therapy',
        'Panchakarma Vasti therapy',
        'Panchakarma Raktamokshana therapy',
      ],
      icon: '🧘',
      duration: '7-21 days',
    },
    {
      name: 'Abhyanga',
      description: 'Abhyanga is a full-body warm oil massage using medicated herbal oils specific to your dosha. It promotes relaxation, improves circulation, and nourishes the skin and tissues. This therapy is often combined with steam therapy (Swedana) for deeper detoxification.',
      benefits: [
        'Relieves stress and muscle tension',
        'Improves blood circulation',
        'Nourishes skin and joints',
        'Promotes better sleep',
      ],
      images: [
        
        '/src/assets/therapies/panchakarna/abhyanga1.png',
        '/src/assets/therapies/panchakarna/abhyanga2.png',
        '/src/assets/therapies/panchakarna/abhyanga3.png',
        '/src/assets/therapies/panchakarna/abhyanga4.png',
      ],
      imageDescriptions: [
        'Full-body oil massage',
        'Herbal oil application',
        'Steam therapy session',
        'Therapist performing Abhyanga',
        'Abhyanga treatment setup',
      ],
      icon: '💆',
      duration: '60-90 mins',
    },
    {
      name: 'Shirodhara',
      description: 'Shirodhara involves a continuous stream of warm medicated oil or herbal decoction poured onto the forehead. This deeply relaxing therapy calms the mind, reduces stress, and is highly effective for neurological and psychological conditions.',
      benefits: [
        'Reduces anxiety and stress',
        'Improves mental clarity and focus',
        'Treats insomnia and headaches',
        'Balances the nervous system',
      ],
      images: [
        '/src/assets/therapies/panchakarna/shrirodhara1.png',
        '/src/assets/therapies/panchakarna/shrirodhara2.png',
        '/src/assets/therapies/panchakarna/shrirodhara3.png',
      ],
      imageDescriptions: [
        'Oil flow in Shirodhara',
        'Shirodhara treatment setup',
        'Forehead oil application',
        'Relaxation during Shirodhara',
      ],
      icon: '🧠',
      duration: '45-60 mins',
    },
    {
      name: 'Pizhichil',
      description: 'Pizhichil is a luxurious therapy where warm medicated oil is poured over the body while simultaneously massaging. Known as the "king of Ayurvedic therapies," it is ideal for musculoskeletal disorders and rejuvenation.',
      benefits: [
        'Relieves joint and muscle pain',
        'Enhances flexibility and mobility',
        'Promotes detoxification',
        'Rejuvenates the body',
      ],
      images: [
        '/src/assets/therapies/panchakarna/pzhichil1.png',
        '/src/assets/therapies/panchakarna/pzhichil2.png',
        '/src/assets/therapies/panchakarna/pzhichil3.png',
      ],
      imageDescriptions: [
        'Oil pouring in Pizhichil',
        'Massage during Pizhichil',
        'Pizhichil treatment setup',
        'Therapist performing Pizhichil',
        'Relaxation during Pizhichil',
      ],
      icon: '👑',
      duration: '75-90 mins',
    },
    {
      name: 'Kizhi',
      description: 'Kizhi involves the application of warm herbal poultices (boluses) filled with medicated powders, herbs, or rice, massaged over the body. It is effective for pain relief, inflammation, and improving circulation.',
      benefits: [
        'Reduces inflammation and swelling',
        'Alleviates chronic pain',
        'Improves joint mobility',
        'Enhances blood flow',
      ],
      images: [
        '/src/assets/therapies/panchakarna/kizhi1.png',
        '/src/assets/therapies/panchakarna/kizhi2.png',
        '/src/assets/therapies/panchakarna/kizhi3.png',
        '/src/assets/therapies/panchakarna/kizhi4.png',
      ],
      imageDescriptions: [
        'Herbal poultice preparation',
        'Kizhi application on body',
        'Kizhi treatment setup',
        'Massage with herbal boluses',
      ],
      icon: '🌿',
      duration: '45-60 mins',
    },
    {
      name: 'Nasya',
      description: 'Nasya involves the administration of medicated oils or herbal preparations through the nasal passages. It is highly effective for respiratory issues, sinusitis, and neurological disorders.',
      benefits: [
        'Clears nasal and sinus passages',
        'Relieves headaches and migraines',
        'Improves mental clarity',
        'Supports respiratory health',
      ],
      images: [
        '/src/assets/therapies/panchakarna/nasya1.png',
        '/src/assets/therapies/panchakarna/nasya2.png',
        '/src/assets/therapies/panchakarna/nasya3.png',
      ],
      imageDescriptions: [
        'Nasal oil application',
        'Nasya oil drop administration',
        'Nasya treatment setup',
        'Therapist performing Nasya',
      ],
      icon: '💨',
      duration: '20-30 mins',
    },
    {
      name: 'Tharpanam',
      description: 'Tharpanam is an Ayurvedic eye treatment where medicated ghee is poured into a dough ring around the eyes. This therapy nourishes and strengthens the eyes, improving vision and relieving eye-related disorders.',
      benefits: [
        'Improves vision and eye health',
        'Reduces eye strain and dryness',
        'Relieves eye inflammation',
        'Promotes relaxation of eye muscles',
      ],
      images: [
        '/src/assets/therapies/panchakarna/tharpanam1.png',
        '/src/assets/therapies/panchakarna/tharpanam2.png',
      ],
      imageDescriptions: [
        'Eye treatment with ghee',
        'Ghee application in Tharpanam',
        'Tharpanam treatment setup',
        'Therapist performing Tharpanam',
      ],
      icon: '👁️',
      duration: '30-45 mins',
    },
    {
      name: 'Virechanam',
      description: 'Virechanam, a key Panchakarma therapy, involves therapeutic purgation to eliminate toxins through the bowels. It is particularly effective for balancing Pitta dosha and treating digestive and skin disorders.',
      benefits: [
        'Detoxifies the liver and intestines',
        'Improves digestion and metabolism',
        'Treats skin conditions',
        'Balances Pitta dosha',
      ],
      images: [
        '/src/assets/therapies/panchakarna/verachanam1.png',
        '/src/assets/therapies/panchakarna/virechanam2.png',
      ],
      imageDescriptions: [
        'Therapeutic purgation process',
        'Herbal preparation for Virechanam',
        'Virechanam treatment setup',
        'Therapist guiding Virechanam',
      ],
      icon: '🫁',
      duration: '1-3 days',
    },
    {
      name: 'Kati Vasti',
      description: 'Kati Vasti involves retaining warm medicated oil in a dough ring placed on the lower back. This therapy is highly effective for relieving lower back pain, sciatica, and spinal disorders.',
      benefits: [
        'Relieves lower back pain',
        'Reduces sciatica symptoms',
        'Improves spinal health',
        'Enhances circulation in the lower back',
      ],
      images: [
        '/src/assets/therapies/panchakarna/kativasti1.png',
        '/src/assets/therapies/panchakarna/kativasti2.png',
        '/src/assets/therapies/panchakarna/kativasti3.png',
      ],
      imageDescriptions: [
        'Oil retention on lower back',
        'Kati Vasti treatment setup',
        'Oil application in Kati Vasti',
        'Therapist performing Kati Vasti',
      ],
      icon: '🩺',
      duration: '30-45 mins',
    },
    {
      name: 'Janu Vasti',
      description: 'Janu Vasti is a treatment where warm medicated oil is retained in a dough ring around the knee joints. It is effective for knee pain, arthritis, and joint stiffness, promoting mobility and strength.',
      benefits: [
        'Relieves knee pain and stiffness',
        'Improves joint mobility',
        'Reduces arthritis symptoms',
        'Nourishes knee tissues',
      ],
      images: [
        '/src/assets/therapies/panchakarna/januvasti1.png',
        '/src/assets/therapies/panchakarna/januvasti2.png',
        '/src/assets/therapies/panchakarna/januvasti3.png',
      ],
      imageDescriptions: [
        'Oil retention on knee joints',
        'Janu Vasti treatment setup',
        'Oil application in Janu Vasti',
        'Therapist performing Janu Vasti',
      ],
      icon: '🦵',
      duration: '30-45 mins',
    },
    {
      name: 'Jalauka Avacharnam',
      description: 'Jalauka Avacharnam, or leech therapy, is a form of Raktamokshana (bloodletting) using medicinal leeches to remove impure blood. It is effective for skin disorders, pain, and improving blood circulation.',
      benefits: [
        'Treats skin disorders and ulcers',
        'Reduces localized pain and swelling',
        'Improves blood circulation',
        'Detoxifies the blood',
      ],
      images: [
        '/src/assets/therapies/panchakarna/lt1.png',
        '/src/assets/therapies/panchakarna/lt2.png',
      ],
      imageDescriptions: [
        'Medicinal leech therapy',
        'Leech application process',
        'Jalauka treatment setup',
        'Therapist performing leech therapy',
      ],
      icon: '🩺',
      duration: '30-60 mins',
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
      fontWeight: '700',
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
      alignItems: 'center',
      minHeight: '500px',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    },
    therapyContent: {
      padding: '60px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
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
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      background: 'linear-gradient(135deg, #f8fffe 0%, #f0f8e8 100%)',
      flex: 1,
      justifyContent: 'center',
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
      bottom: '0',
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
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Ayurvedic Therapies
            <span style={styles.heroAccent}>Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Experience our authentic Ayurvedic therapies designed for holistic healing and rejuvenation
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
                      {/* Top: Cards for specific therapies */}
                      <div style={styles.galleryCards}>
                        {therapy.imageDescriptions.slice(0, 4).map((description, imgIndex) => (
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

                      {/* Bottom: Slideshow for all images */}
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
              <p>
                Prior consultation mandatory for personalized treatment plans
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRKAyurvedaTherapiesPage;