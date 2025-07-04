import React, { useState } from 'react';
import { Clock, Users, Shield, Phone, Utensils, Ban, Eye, CreditCard, Home, AlertTriangle, CheckCircle, Wifi, Gift, Moon, Calendar, UserX, Mail,HelpCircle,MessageCircle,BookOpen } from 'lucide-react';

const HospitalRulesPage = () => {
  const [activeSection, setActiveSection] = useState('general');

  const generalRules = [
    { icon: Clock, title: 'Operating Hours', desc: 'Hospital functions daily from 9:00 AM to 5:00 PM, including Sundays' },
    { icon: Calendar, title: 'Service Hours', desc: 'All consultations, visits, admissions and discharges only during 9:00 AM - 5:00 PM' },
    { icon: CheckCircle, title: 'Complete Stay', desc: 'Patients must ensure full stay until booked time for maximum treatment benefits' },
    { icon: Users, title: 'Attendees Policy', desc: 'Care takers allowed with additional charges for accommodation and food' }
  ];

  const visitorRules = [
    { icon: Clock, title: 'Visiting Hours', desc: 'Morning: 11:00 AM - 12:00 PM | Evening: 4:00 PM - 5:00 PM' },
    { icon: Moon, title: 'No Overnight Stay', desc: 'Guests are not permitted to stay overnight' },
    { icon: Home, title: 'Room Restrictions', desc: 'Guests discouraged from meeting patients in their rooms' },
    { icon: Users, title: 'Patient Consent', desc: 'Visitors can only meet patients with their explicit consent' }
  ];

  const dietRules = [
    { icon: Ban, title: 'Outside Food Prohibited', desc: 'No outside food or eatables permitted due to scheduled diet regimen' },
    { icon: Utensils, title: 'Dining Schedule', desc: 'Breakfast till 11:30 AM | Dinner till 6:00 PM in dining hall only' },
    { icon: AlertTriangle, title: 'Substance Ban', desc: 'Tobacco, pan, zarda, smoking, coffee, tea, alcohol strictly prohibited' },
    { icon: UserX, title: 'Violation Consequences', desc: 'Immediate discharge without inquiry for rule violations' }
  ];

  const behaviorRules = [
    { icon: Shield, title: 'Doctor Meetings', desc: 'Meet doctors in consulting rooms only, not at residence' },
    { icon: Clock, title: 'Punctuality Required', desc: 'Maintain strict punctuality for treatments, yoga, lectures, meals' },
    { icon: Users, title: 'Room Restrictions', desc: 'Male and female patients confined to respective rooms' },
    { icon: Moon, title: 'Bedtime Policy', desc: 'Retire to bed by 9:00 PM, no chatting after this time' }
  ];

  const propertyRules = [
    { icon: Shield, title: 'Personal Belongings', desc: 'Hospital not responsible for loss of valuables or jewelry' },
    { icon: CreditCard, title: 'Cash Deposit', desc: 'Excess cash can be deposited at reception with receipt' },
    { icon: AlertTriangle, title: 'Property Care', desc: 'Damage to hospital property subject to reimbursement' },
    { icon: Eye, title: 'Room Inspections', desc: 'Management reserves right to inspect rooms for prohibited items' }
  ];

  const communicationRules = [
    { icon: Wifi, title: 'Phone Restrictions', desc: 'Mobile phones prohibited in treatment areas, yoga hall, dining hall' },
    { icon: Phone, title: 'Emergency Contact', desc: 'Contact security for emergency doctor consultation' },
    { icon: Users, title: 'Disturbance Policy', desc: 'Phone conversations and music should not disturb other patients' },
    { icon: Ban, title: 'Staff Transactions', desc: 'Money transactions with staff or using staff for purchases prohibited' }
  ];

  const dischargeRules = [
    { icon: Calendar, title: 'Discharge Timing', desc: 'Procedures completed by 4:00 PM day before checkout' },
    { icon: Clock, title: 'Checkout Schedule', desc: 'Check out by 7:00 AM, must vacate rooms by 8:00 AM' },
    { icon: AlertTriangle, title: 'Early Discharge', desc: 'Prior discharge requires 3 days advance notice to office' },
    { icon: UserX, title: 'Management Rights', desc: 'Management reserves right to discharge non-compliant patients' }
  ];

  const packingList = [
    { icon: '🍶', text: 'Flask & water bottle' },
    { icon: '🧘', text: 'Comfortable clothes for yoga' },
    { icon: '👕', text: 'Loose clothes for treatment (T-shirts, track pants, nighties)' },
    { icon: '🧴', text: 'Personal hygiene items (towel, brush, paste, soap)' },
    { icon: '👡', text: 'Anti-slip sandals or footwear' },
    { icon: '📋', text: 'Medical reports and current medications' },
    { icon: '🧘‍♀️', text: 'Yoga mat (or use hospital provided mats)' },
    { icon: '📄', text: 'Aadhar Card photocopy' }
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
      background: 'url("/assets/VRK_Ayurveda.png")',
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
    navSection: {
      position: 'relative',
      top: 0,
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
      padding: '3rem 2rem',
      color: '#f8fdf6',
      background: '#f8fdf6',
    },
    contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem', 
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
    rulesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '1.5rem'
    },
    ruleCard: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      background: 'white',
      borderRadius: '16px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(45, 90, 39, 0.15)',
      border: '1px solid #f8f9fa',
      transition: 'all 0.3s ease'
    },
    cardIcon: {
      background: '#f0f8e8',
      color: '#2d5a27',
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    cardContent: {
      flex: 1
    },
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1a3d1a',
      marginBottom: '0.5rem'
    },
    cardDescription: {
      color: '#6c757d',
      margin: 0,
      lineHeight: '1.5'
    },
    packingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1rem'
    },
    packingCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      background: 'white',
      borderRadius: '12px',
      padding: '1.2rem',
      boxShadow: '0 2px 8px rgba(45, 90, 39, 0.1)',
      border: '1px solid #f8f9fa',
      transition: 'all 0.3s ease'
    },
    packingIcon: {
      fontSize: '1.5rem',
      flexShrink: 0
    },
    packingText: {
      color: '#2d5a27',
      fontWeight: '500',
      margin: 0
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
    { id: 'general', label: 'General Rules', icon: Shield, data: generalRules },
    { id: 'visitors', label: 'Visitor Policy', icon: Users, data: visitorRules },
    { id: 'diet', label: 'Diet & Substances', icon: Utensils, data: dietRules },
    { id: 'behavior', label: 'Conduct Rules', icon: CheckCircle, data: behaviorRules },
    { id: 'property', label: 'Property & Valuables', icon: CreditCard, data: propertyRules },
    { id: 'communication', label: 'Communication', icon: Phone, data: communicationRules },
    { id: 'discharge', label: 'Discharge Policy', icon: Calendar, data: dischargeRules },
    { id: 'packing', label: 'What to Bring', icon: Gift, data: packingList }
  ];

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
          Hospital Rules &
          <span style={styles.heroAccent}> Regulations</span>
        </h1>
        <p style={styles.heroDescription}>
          Please review and follow all guidelines to ensure a peaceful and effective healing environment for everyone
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

    {/* Navigation */}
    <nav style={styles.navSection}>
      <div style={styles.navContainer}>
        <div style={styles.navTabs}>
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              style={{
                ...styles.navTab,
                ...(activeSection === id ? styles.navTabActive : {})
              }}
              onMouseEnter={(e) => {
                if (activeSection !== id) {
                  e.target.style.background = 'rgba(109, 142, 35, 0.1)';
                  e.target.style.color = '#1a3d1a';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id) {
                  e.target.style.background = 'none';
                  e.target.style.color = '#2d5a27';
                }
              }}
            >
              <Icon style={styles.tabIcon} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>

    {/* Content Sections */}
    <main style={styles.mainContent}>
      <div style={styles.contentContainer}>
        {sections.map(({ id, label, data }) => (
          activeSection === id && (
            <section key={id} style={styles.contentSection}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>{label}</h2>
                <p style={styles.sectionDescription}>
                  {id === 'packing' 
                    ? 'Essential items to bring during admission'
                    : 'Important guidelines to follow during your stay'
                  }
                </p>
              </div>
              
              {id === 'packing' ? (
                <div style={styles.packingGrid}>
                  {data.map((item, index) => (
                    <div key={index} style={styles.packingCard}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.boxShadow = '0 4px 16px rgba(45, 90, 39, 0.15)';
                           e.currentTarget.style.transform = 'translateY(-2px)';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.boxShadow = '0 2px 8px rgba(45, 90, 39, 0.1)';
                           e.currentTarget.style.transform = 'translateY(0)';
                         }}>
                      <div style={styles.packingIcon}>{item.icon}</div>
                      <p style={styles.packingText}>{item.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={styles.rulesGrid}>
                  {data.map((rule, index) => (
                    <div key={index} style={styles.ruleCard}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.15)';
                           e.currentTarget.style.transform = 'translateY(-2px)';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.15)';
                           e.currentTarget.style.transform = 'translateY(0)';
                         }}>
                      <div style={styles.cardIcon}>
                        <rule.icon />
                      </div>
                      <div style={styles.cardContent}>
                        <h3 style={styles.cardTitle}>{rule.title}</h3>
                        <p style={styles.cardDescription}>{rule.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
          <h2 style={styles.contactTitle}>Questions About Our Policies?</h2>
          <p style={styles.contactDescription}>
            Contact us to discuss any questions or clarifications regarding our rules and regulations
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

export default HospitalRulesPage;