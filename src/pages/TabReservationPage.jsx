import React, { useState } from 'react';
import { Calendar, Users, FileText, Clock, AlertCircle, CheckCircle, Phone, Mail, CreditCard, UserCheck, Stethoscope, MapPin, Award, Shield } from 'lucide-react';

const ModernHospitalUI = () => {
  const [activeSection, setActiveSection] = useState('eligibility');

  const eligibilityCriteria = [
    { icon: '🧠', text: 'Persons suffering from extreme psychological conditions', status: 'not-eligible' },
    { icon: '💔', text: 'Persons with chronic and unstable cardiac & renal disorders', status: 'not-eligible' },
    { icon: '🦠', text: 'Persons suffering from communicable diseases like tuberculosis, swine flu, dengue etc', status: 'not-eligible' },
    { icon: '🚬', text: 'Persons with chronic addiction to alcohol, smoking, pan, zarda, tobacco etc', status: 'not-eligible' }
  ];

  const reservationSteps = [
    { icon: Phone, title: 'Prior Consultation', desc: 'Consult with doctor via phone/email before booking' },
    { icon: CreditCard, title: 'Advance Payment', desc: 'Pay Rs. 5000 deposit per person' },
    { icon: CheckCircle, title: 'Confirmation', desc: 'Receive booking confirmation and details' }
  ];

  const admissionRequirements = [
    { icon: FileText, text: 'Passport size photograph' },
    { icon: UserCheck, text: 'ID proof (AADHAR/Voters ID/Passport)' },
    { icon: Stethoscope, text: 'Recent medical records' },
    { icon: FileText, text: 'Current medications list' }
  ];

  const cancellationPolicies = [
    { icon: Clock, text: 'Cancellations within 48 hours of booking are fully refundable' },
    { icon: AlertCircle, text: 'Cancellations after 48 hours incur a 50% fee' },
    { icon: CheckCircle, text: 'Postponements allowed with prior notice of 72 hours' }
  ];

  const outpatientInfo = [
    { icon: Stethoscope, text: 'Walk-in consultations available on weekdays' },
    { icon: Calendar, text: 'Appointment booking recommended for minimal wait time' },
    { icon: Phone, text: 'Contact us for teleconsultation options' }
  ];

  const features = [
    { icon: Shield, title: 'Trusted Care', desc: 'Decades of experience in natural healing' },
    { icon: Award, title: 'Expert Doctors', desc: 'Highly qualified medical professionals' },
    { icon: MapPin, title: 'Serene Location', desc: 'Peaceful environment for healing' }
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
      position: 'sticky',
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
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 2rem'
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
    eligibilityGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    },
    eligibilityCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      background: 'white',
      borderRadius: '16px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(45, 90, 39, 0.15)',
      border: '1px solid #f8f9fa',
      transition: 'all 0.3s ease'
    },
    cardIcon: {
      fontSize: '2rem',
      flexShrink: 0
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem'
    },
    statusBadgeText: {
      background: '#fef2f2',
      color: '#dc2626',
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase'
    },
    statusIcon: {
      width: '16px',
      height: '16px',
      color: '#dc2626'
    },
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    processCard: {
      position: 'relative',
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(45, 90, 39, 0.15)',
      border: '1px solid #f8f9fa',
      transition: 'all 0.3s ease'
    },
    stepNumber: {
      position: 'absolute',
      top: '-1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, #2d5a27, #6b8e23)',
      color: 'white',
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: '0.875rem'
    },
    stepIcon: {
      background: '#f0f8e8',
      color: '#2d5a27',
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1rem auto'
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

  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Experience Natural Healing
            <span style={styles.heroAccent}> & Wellness</span>
          </h1>
          <p style={styles.heroDescription}>
            Discover holistic treatment in our serene environment where traditional healing meets modern care
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
            {[
              { id: 'eligibility', label: 'Eligibility', icon: AlertCircle },
              { id: 'reservation', label: 'Reservation', icon: Calendar },
              { id: 'cancellation', label: 'Policies', icon: Clock },
              { id: 'admission', label: 'Admission', icon: UserCheck },
              { id: 'outpatients', label: 'Out-Patients', icon: Stethoscope }
            ].map(({ id, label, icon: Icon }) => (
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
        {/* Eligibility Section */}
        {activeSection === 'eligibility' && (
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Eligibility Criteria</h2>
              <p style={styles.sectionDescription}>Please review the following conditions before proceeding with your reservation</p>
            </div>
            <div style={styles.eligibilityGrid}>
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} style={styles.eligibilityCard}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(-2px)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                  <div style={styles.cardIcon}>{criteria.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={styles.statusBadge}>
                      <AlertCircle style={styles.statusIcon} />
                      <span style={styles.statusBadgeText}>Not Eligible</span>
                    </div>
                    <p style={{ margin: 0, color: '#6c757d' }}>{criteria.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Reservation Section */}
        {activeSection === 'reservation' && (
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Reservation Process</h2>
              <p style={styles.sectionDescription}>Follow these simple steps to secure your booking</p>
            </div>
            <div style={styles.processGrid}>
              {reservationSteps.map((step, index) => (
                <div key={index} style={styles.processCard}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.boxShadow = '0 12px 28px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(-4px)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                  <div style={styles.stepNumber}>{index + 1}</div>
                  <div style={styles.stepIcon}>
                    <step.icon />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a3d1a', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ color: '#6c757d', margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cancellation & Postponement Policies Section */}
        {activeSection === 'cancellation' && (
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Cancellation & Postponement Policies</h2>
              <p style={styles.sectionDescription}>Important information about booking changes</p>
            </div>
            <div style={styles.processGrid}>
              {cancellationPolicies.map((policy, index) => (
                <div key={index} style={styles.processCard}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.boxShadow = '0 12px 28px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(-4px)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                  <div style={styles.stepNumber}>{index + 1}</div>
                  <div style={styles.stepIcon}>
                    <policy.icon />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a3d1a', marginBottom: '0.5rem' }}>{policy.text}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Admission Section */}
        {activeSection === 'admission' && (
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Admission Requirements</h2>
              <p style={styles.sectionDescription}>Ensure you have the following documents for a smooth admission process</p>
            </div>
            <div style={styles.eligibilityGrid}>
              {admissionRequirements.map((requirement, index) => (
                <div key={index} style={styles.eligibilityCard}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(-2px)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                  <div style={styles.cardIcon}>
                    <requirement.icon />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, color: '#6c757d' }}>{requirement.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Out-Patients Section */}
        {activeSection === 'outpatients' && (
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Out-Patient Services</h2>
              <p style={styles.sectionDescription}>Information for out-patient consultations and services</p>
            </div>
            <div style={styles.processGrid}>
              {outpatientInfo.map((info, index) => (
                <div key={index} style={styles.processCard}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.boxShadow = '0 12px 28px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(-4px)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.15)';
                       e.currentTarget.style.transform = 'translateY(0)';
                     }}>
                  <div style={styles.stepNumber}>{index + 1}</div>
                  <div style={styles.stepIcon}>
                    <info.icon />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a3d1a', marginBottom: '0.5rem' }}>{info.text}</h3>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Contact Section with Background Image */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Ready to Begin Your Healing Journey?</h2>
            <p style={styles.contactDescription}>Contact us to discuss your requirements and start your path to wellness</p>
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
          <h3 style={styles.footerTitle}>VRK Ayurevdic Clinic</h3>
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

export default ModernHospitalUI;