import React, { useState } from 'react';
import { Phone, Mail,HeartPulse,Leaf,UserPlus } from 'lucide-react';

const VRKAyurvedaDiseasesTreatedPage = () => {
  const [activeSection] = useState('diseases');

  const diseasesData = [
    {
      category: 'Musculoskeletal Disorders',
      conditions: [
        'Arthritis (Osteoarthritis, Rheumatoid Arthritis)',
        'Sciatica',
        'Spondylosis (Cervical & Lumbar)',
        'Frozen Shoulder',
        'Gout'
      ],
      description: 'Ayurvedic treatments focus on reducing inflammation, improving joint mobility, and relieving pain through herbal medicines, Panchakarma therapies, and specialized massages like Abhyanga and Pizhichil.'
    },
    {
      category: 'Skin Disorders',
      conditions: [
        'Psoriasis',
        'Eczema',
        'Acne',
        'Chronic Skin Allergies',
        'Fungal Infections'
      ],
      description: 'Our treatments include detoxifying therapies like Virechana, external applications of herbal pastes, and internal medications to purify blood and restore skin health.'
    },
    {
      category: 'Digestive Disorders',
      conditions: [
        'Irritable Bowel Syndrome (IBS)',
        'Acid Reflux (GERD)',
        'Chronic Constipation',
        'Ulcerative Colitis',
        'Gastritis'
      ],
      description: 'We use a combination of dietary modifications, herbal formulations, and therapies like Vasti to balance digestive fire (Agni) and promote gut health.'
    },
    {
      category: 'Neurological Disorders',
      conditions: [
        'Migraine',
        'Paralysis (Post-Stroke Recovery)',
        'Parkinson’s Disease',
        'Neuropathy',
        'Insomnia'
      ],
      description: 'Ayurvedic therapies like Shirodhara, Nasya, and herbal medications aim to calm the nervous system, improve circulation, and support neurological recovery.'
    },
    {
      category: 'Respiratory Disorders',
      conditions: [
        'Asthma',
        'Chronic Bronchitis',
        'Sinusitis',
        'Allergic Rhinitis',
        'COPD'
      ],
      description: 'Treatments include Nasya, steam inhalation with herbal decoctions, and internal medicines to clear respiratory passages and strengthen lung function.'
    },
    {
      category: 'Lifestyle & Metabolic Disorders',
      conditions: [
        'Diabetes Mellitus',
        'Obesity',
        'Hypertension',
        'Thyroid Disorders',
        'PCOS/PCOD'
      ],
      description: 'Holistic management through diet, lifestyle changes, herbal supplements, and therapies like Udwartana and Swedana to balance metabolism and hormones.'
    }
  ];

  const treatmentApproach = [
    'Personalized treatment plans based on individual Prakriti (body constitution) and Vikriti (imbalance).',
    'Combination of internal herbal medicines, external therapies, and Panchakarma procedures.',
    'Emphasis on diet and lifestyle modifications to support long-term healing.',
    'Regular follow-ups and consultations to monitor progress and adjust treatments.'
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
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("/src/assets/VRK_Ayurveda.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -2
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
      fontWeight: '800',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      maxWidth: '800px',
      color: '#2d5a27'
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
    heroFeatures: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      width: '100%',
      maxWidth: '900px'
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
    diseasesContainer: {
      marginBottom: '4rem'
    },
    diseasesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '2rem auto 0',
      padding: '0 1rem'
    },
    diseaseCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 24px rgba(45, 90, 39, 0.1)',
      border: '1px solid rgba(45, 90, 39, 0.1)',
      transition: 'all 0.3s ease',
      textAlign: 'left'
    },
    diseaseCategory: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '1rem'
    },
    diseaseList: {
      listStyleType: 'none',
      padding: 0,
      marginBottom: '1rem'
    },
    diseaseItem: {
      fontSize: '1rem',
      color: '#6c757d',
      marginBottom: '0.5rem',
      paddingLeft: '1.5rem',
      position: 'relative'
    },
    diseaseBullet: {
      position: 'absolute',
      left: 0,
      top: '0.5rem',
      width: '6px',
      height: '6px',
      background: '#6b8e23',
      borderRadius: '50%'
    },
    diseaseDescription: {
      fontSize: '1rem',
      color: '#6c757d',
      lineHeight: '1.7'
    },
    approachContainer: {
      maxWidth: '900px',
      margin: '4rem auto 0'
    },
    approachCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '2.5rem',
      boxShadow: '0 8px 24px rgba(45, 90, 39, 0.1)',
      border: '1px solid rgba(45, 90, 39, 0.1)'
    },
    approachList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    approachItem: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      color: '#6c757d',
      paddingLeft: '2rem',
      position: 'relative'
    },
    approachBullet: {
      position: 'absolute',
      left: '0',
      top: '0.5rem',
      width: '8px',
      height: '8px',
      background: '#6b8e23',
      borderRadius: '50%'
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
      overflow: 'hidden'
    },
    contactOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: '0',
      opacity: 0.4,
      background: 'linear-gradient(135deg, rgba(45, 90, 39, 0.5) 0%, rgba(107, 142, 35, 0.85) 100%)',
      zIndex: 1
    },
    contactContent: {
      position: 'relative',
      zIndex: 2,
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
      opacity: 0.9,
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
  const features = [
  {
    icon: HeartPulse,
    title: 'Holistic Healing',
    desc: 'Treat the root cause, not just the symptoms—guided by ancient Ayurvedic principles.'
  },
  {
    icon: Leaf,
    title: 'Natural Therapies',
    desc: 'Experience safe and effective treatments using herbal remedies and traditional methods.'
  },
  {
    icon: UserPlus,
    title: 'Personalized Care',
    desc: 'Every patient receives a tailored plan based on their body constitution and condition.'
  }
];


  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Diseases Treated
            <span style={styles.heroAccent}> Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Discover the range of health conditions we address through holistic Ayurvedic treatments
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

      {/* Content Sections */}
      <main style={styles.mainContent}>
        <div style={styles.contentContainer}>
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Conditions We Treat</h2>
              <p style={styles.sectionDescription}>
                Explore the various diseases and disorders managed with our authentic Ayurvedic therapies
              </p>
            </div>

            {/* Diseases Treated */}
            <div style={styles.diseasesContainer}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#2d5a27', marginBottom: '2rem', textAlign: 'center' }}>
                Diseases & Disorders
              </h3>
              <div style={styles.diseasesGrid}>
                {diseasesData.map((item, index) => (
                  <div
                    key={index}
                    style={styles.diseaseCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(45, 90, 39, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <h4 style={styles.diseaseCategory}>{item.category}</h4>
                    <ul style={styles.diseaseList}>
                      {item.conditions.map((condition, idx) => (
                        <li key={idx} style={styles.diseaseItem}>
                          <div style={styles.diseaseBullet}></div>
                          {condition}
                        </li>
                      ))}
                    </ul>
                    <p style={styles.diseaseDescription}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Treatment Approach */}
          <section style={styles.contentSection}>
            <div style={styles.approachContainer}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#2d5a27', marginBottom: '2rem', textAlign: 'center' }}>
                Our Treatment Approach
              </h3>
              <div style={styles.approachCard}>
                <ul style={styles.approachList}>
                  {treatmentApproach.map((item, index) => (
                    <li key={index} style={styles.approachItem}>
                      <div style={styles.approachBullet}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Ready to Begin Your Healing Journey?</h2>
            <p style={styles.contactDescription}>
              Contact us to schedule a consultation or learn more about our treatments
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

export default VRKAyurvedaDiseasesTreatedPage;