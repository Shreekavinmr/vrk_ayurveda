import React, { useState } from 'react';
import { FileText, Phone, Mail, Plus, Minus,HelpCircle,MessageCircle,BookOpen} from 'lucide-react';

const VRKAyurvedaFAQPage = () => {
  const [activeSection] = useState('faq'); // Fixed to FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Track open FAQ item

  const faqItems = [
    {
      question: 'Things To Carry While Getting Admitted?',
      answer: (
        <ul style={{ paddingLeft: '1.5rem', margin: 0, color: '#6c757d' }}>
          <li>Flask & water bottle</li>
          <li>Comfortable clothes for yoga</li>
          <li>Loose clothes for treatment (T-shirts, track pants, nighties, churidar)</li>
          <li>Personal needs (towel, brush, paste, soap, anti-slippery sandals or footwear)</li>
          <li>Medical reports</li>
          <li>Medication (which is taken regularly)</li>
          <li>Yoga mat – bring your own for personal use, or use our hospital’s washed mats during your stay (return upon leaving)</li>
          <li>Aadhar card xerox</li>
        </ul>
      )
    },
    {
      question: 'Why is Vedic Raksha Kendra Ayurveda hospital a Natural Holistic Healing Hospital?',
      answer: 'Vedic Raksha Kendra Ayurveda hospital integrates traditional Ayurvedic therapies with modern medical practices to promote holistic healing, focusing on physical, mental, and spiritual wellness.'
    },
    {
      question: 'Is Vedic Raksha Kendra Ayurveda hospital a weight reduction centre / spa / hospital?',
      answer: 'Vedic Raksha Kendra Ayurveda hospital is a holistic hospital specializing in Ayurvedic treatments for overall health, not a weight reduction centre or spa, though some treatments may support weight management.'
    },
    {
      question: 'What is the minimum and maximum duration of stay at Vedic Raksha Kendra Ayurveda hospital?',
      answer: 'The minimum stay is generally 7 days, with a maximum of 28 days or more, depending on the treatment plan prescribed by our doctors.'
    },
    {
      question: 'Are there Registered Doctors at Vedic Raksha Kendra Ayurveda hospital and what degree they hold?',
      answer: 'Yes, our doctors are registered with BAMS degrees in Ayurveda, and some hold additional certifications in specialized Ayurvedic or modern medical fields.'
    },
    {
      question: 'Are there trained therapists in Vedic Raksha Kendra Ayurveda hospital?',
      answer: 'Our hospital employs certified therapists trained in delivering Ayurvedic treatments under the supervision of qualified doctors.'
    },
    {
      question: 'How many Kgs will I lose during my stay at Vedic Raksha Kendra Ayurveda hospital and will I regain my weight after getting back to home?',
      answer: 'Weight loss varies, typically 2-5 kg during a 7-14 day stay. Sustaining weight loss depends on following our post-treatment diet and lifestyle recommendations.'
    },
    {
      question: 'Do we give any medications in our Hospital?',
      answer: 'Yes, we provide Ayurvedic medications tailored to your treatment plan, prescribed by our doctors, alongside any regular medications you bring.'
    },
    {
      question: 'What type of Diet will be served for patients at Vedic Raksha Kendra Ayurveda hospital?',
      answer: 'Patients receive a personalized vegetarian Ayurvedic diet, low in spices and oil, designed to support healing and treatment goals.'
    },
    {
      question: 'How many days in advance should I book the rooms?',
      answer: 'We recommend booking rooms 15-30 days in advance to ensure availability, particularly during peak seasons.'
    },
    {
      question: 'Does Vedic Raksha Kendra Ayurveda hospital offer any concessions for their customers?',
      answer: 'Concessions may be available for extended stays or group bookings. Please contact our office for details.'
    },
    {
      question: 'Does the Hospital offer any pick up and drop facility for its customers?',
      answer: 'Yes, we can arrange pick-up and drop-off services for an additional fee, based on your location. Contact us to organize.'
    },
    {
      question: 'Whether treatments in Vedic Raksha Kendra Ayurveda hospital are complete residential or permitted to go out?',
      answer: 'Treatments are fully residential, requiring patients to remain on premises for optimal outcomes. Outings are typically not allowed.'
    },
    {
      question: 'Can yoga be done after eating?',
      answer: 'Yoga is best practiced on an empty stomach, ideally 2-3 hours after a meal, to ensure comfort and effectiveness.'
    },
    {
      question: 'Can yoga be practiced during menstrual cycle?',
      answer: 'Light yoga may be appropriate during menstruation, but intense poses should be avoided. Consult our yoga instructors for personalized advice.'
    },
    {
      question: 'Is there any specific care to be noted while planning to admit in Vedic Raksha Kendra Ayurveda hospital for females?',
      answer: 'Females should disclose conditions like pregnancy or menstruation during consultation. We provide tailored care, including female therapists and private accommodations.'
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
    badgeIcon: {
      width: '18px',
      height: '18px'
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
    navSection: {
      position: 'relative', // Scrolls with page
      zIndex: 50,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(107, 142, 35, 0.3)'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 2rem'
    },
    navTabs: {
      display: 'flex',
      gap: '0.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    navTab: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      borderRadius: '12px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      color: '#2d5a27'
    },
    navTabActive: {
      background: 'linear-gradient(135deg, #2d5a27, #6b8e23)',
      color: 'white',
      boxShadow: '0 4px 12px rgba(45, 90, 39, 0.15)'
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
    faqContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '800px',
      margin: '0 auto'
    },
    faqItem: {
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(45, 90, 39, 0.15)',
      border: '1px solid #f8f9fa',
      transition: 'all 0.3s ease'
    },
    faqQuestion: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#2d5a27'
    },
    faqAnswer: {
      marginTop: '1rem',
      fontSize: '1rem',
      color: '#6c757d',
      lineHeight: '1.6'
    },
    faqToggleIcon: {
      width: '20px',
      height: '20px',
      color: '#2d5a27'
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
      bottom: 0,
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    footerInfoCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(45, 90, 39, 0.1)'
    },
    footerInfoTitle: {
      fontWeight: '600',
      color: '#2d5a27',
      marginBottom: '0.5rem'
    }
  };

  const sections = [
    { id: 'faq', label: 'Frequently Asked Questions', icon: FileText, data: faqItems }
  ];

  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
    const features = [
  { icon: HelpCircle, title: 'Common Questions', desc: 'Find answers to frequently asked questions about our services.' },
  { icon: MessageCircle, title: 'Customer Support', desc: 'Still need help? Reach out to our support team anytime.' },
  { icon: BookOpen, title: 'Detailed Guides', desc: 'Explore step-by-step information to understand our treatments better.' }
];

  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Frequently Asked Questions
            <span style={styles.heroAccent}> Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Get answers to common queries about your stay and treatments at our holistic healing center
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
          {sections.map(({ id, label, data }) => (
            activeSection === id && (
              <section key={id} style={styles.contentSection}>
                <div style={styles.sectionHeader}>
                  <h2 style={styles.sectionTitle}>{label}</h2>
                  <p style={styles.sectionDescription}>
                    Explore answers to help you plan your visit to Vedic Raksha Kendra Ayurveda hospital
                  </p>
                </div>
                <div style={styles.faqContainer}>
                  {data.map((faq, index) => (
                    <div key={index} style={styles.faqItem}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.15)';
                           e.currentTarget.style.transform = 'translateY(-2px)';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.15)';
                           e.currentTarget.style.transform = 'translateY(0)';
                         }}>
                      <div style={styles.faqQuestion} onClick={() => handleFaqToggle(index)}>
                        <span>{faq.question}</span>
                        {openFaqIndex === index ? (
                          <Minus style={styles.faqToggleIcon} />
                        ) : (
                          <Plus style={styles.faqToggleIcon} />
                        )}
                      </div>
                      {openFaqIndex === index && (
                        <div style={styles.faqAnswer}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Have More Questions?</h2>
            <p style={styles.contactDescription}>
              Reach out to us for further details or to discuss your specific requirements
            </p>
          </div>
          <div style={styles.contactActions}>
            <a href="tel:+919080108558" style={{...styles.contactBtn, ...styles.contactBtnPrimary}}
               onMouseEnter={(e) => {
                 e.target.style.background = '#f8f9fa';
                 e.target.style.transform = 'translateY(-2px)';
                 e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.background = 'white';
                 e.target.style.transform = 'translateY(0)';
                 e.target.style.boxShadow = 'none';
               }}>
              <Phone style={styles.btnIcon} />
              <span>Call Now</span>
            </a>
            <a href="mailto:v.sglobal2025@gmail.com" style={{...styles.contactBtn, ...styles.contactBtnSecondary}}
               onMouseEnter={(e) => {
                 e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                 e.target.style.borderColor = 'white';
               }}
               onMouseLeave={(e) => {
                 e.target.style.background = 'transparent';
                 e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
               }}>
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
              <p style={{ margin: 0, color: '#6c757d' }}>Natural healing methods combined with modern medical care for comprehensive wellness</p>
            </div>
            <div style={styles.footerInfoCard}>
              <h4 style={styles.footerInfoTitle}>Reservation Required</h4>
              <p style={{ margin: 0, color: '#6c757d' }}>Prior consultation and advance booking mandatory for all treatments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRKAyurvedaFAQPage;