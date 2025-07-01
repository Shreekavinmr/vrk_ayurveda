import React, { useState } from 'react';
import { DollarSign, Phone, Mail } from 'lucide-react';

const VRKAyurvedaTreatmentPage = () => {
  const [activeSection] = useState('treatments');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const treatmentsPerPage = 10;

  const treatmentsData = [
    { name: 'Abhyanga', duration: '60 min', benefits: 'Full-body oil massage for relaxation and detoxification', price: '₹1500' },
    { name: 'Shirodhara', duration: '45 min', benefits: 'Oil stream on forehead for stress relief and mental clarity', price: '₹2000' },
    { name: 'Panchakarma', duration: '120 min', benefits: 'Complete detox with five therapeutic treatments', price: '₹5000' },
    { name: 'Udvartana', duration: '50 min', benefits: 'Herbal powder massage for weight loss and skin health', price: '₹1800' },
    { name: 'Nasya', duration: '30 min', benefits: 'Nasal therapy for sinus relief and respiratory health', price: '₹1000' },
    { name: 'Kati Basti', duration: '40 min', benefits: 'Warm oil therapy for lower back pain relief', price: '₹1200' },
    { name: 'Janu Basti', duration: '40 min', benefits: 'Oil treatment for knee joint pain and mobility', price: '₹1100' },
    { name: 'Greeva Basti', duration: '40 min', benefits: 'Oil therapy for neck pain and stiffness', price: '₹1100' },
    { name: 'Swedana', duration: '30 min', benefits: 'Herbal steam bath for detoxification and relaxation', price: '₹900' },
    { name: 'Pizhichil', duration: '90 min', benefits: 'Warm oil bath for muscle relaxation and joint health', price: '₹3000' },
    { name: 'Netra Tarpana', duration: '30 min', benefits: 'Eye rejuvenation therapy for vision and relaxation', price: '₹1000' },
    { name: 'Takradhara', duration: '45 min', benefits: 'Buttermilk stream for scalp health and stress relief', price: '₹1800' },
    { name: 'Vasti', duration: '60 min', benefits: 'Medicated enema for digestive and colon health', price: '₹1500' },
    { name: 'Karna Purana', duration: '30 min', benefits: 'Ear oil therapy for hearing and ear health', price: '₹800' },
    { name: 'Hridaya Basti', duration: '40 min', benefits: 'Oil therapy for heart health and emotional balance', price: '₹1200' },
    { name: 'Padabhyanga', duration: '30 min', benefits: 'Foot massage for relaxation and better sleep', price: '₹700' },
    { name: 'Mukha Lepa', duration: '30 min', benefits: 'Herbal facial for skin glow and rejuvenation', price: '₹900' },
    { name: 'Keshini', duration: '45 min', benefits: 'Hair and scalp treatment for hair growth', price: '₹1200' },
    { name: 'Marma Massage', duration: '60 min', benefits: 'Energy point massage for vitality and balance', price: '₹1600' },
    { name: 'Virechana', duration: '90 min', benefits: 'Purgation therapy for liver and digestive detox', price: '₹2000' },
    { name: 'Shiro Abhyanga', duration: '30 min', benefits: 'Head massage for stress relief and hair health', price: '₹800' },
    { name: 'Njavara Kizhi', duration: '60 min', benefits: 'Rice bolus massage for muscle strength', price: '₹1800' },
    { name: 'Podikizhi', duration: '60 min', benefits: 'Herbal powder bolus for pain relief', price: '₹1700' },
    { name: 'Elakizhi', duration: '60 min', benefits: 'Herbal leaf bolus for joint pain relief', price: '₹1700' },
    { name: 'Dhanyamla Dhara', duration: '60 min', benefits: 'Fermented liquid stream for inflammation relief', price: '₹2000' },
    { name: 'Ksheera Dhara', duration: '45 min', benefits: 'Milk stream for skin nourishment and relaxation', price: '₹1800' },
    { name: 'Talam', duration: '30 min', benefits: 'Herbal paste on head for mental clarity', price: '₹700' },
    { name: 'Upanaha Sweda', duration: '45 min', benefits: 'Herbal paste wrap for joint pain', price: '₹1000' },
    { name: 'Chavitti Uzhichil', duration: '90 min', benefits: 'Foot massage for deep tissue relaxation', price: '₹2500' },
    { name: 'Kaya Seka', duration: '60 min', benefits: 'Oil pouring for full-body rejuvenation', price: '₹2000' },
    { name: 'Sarvanga Dhara', duration: '90 min', benefits: 'Full-body oil stream for total relaxation', price: '₹3000' },
    { name: 'Thalapothichil', duration: '45 min', benefits: 'Herbal paste head wrap for mental health', price: '₹1200' },
    { name: 'Siro Vasti', duration: '60 min', benefits: 'Oil cap on head for neurological health', price: '₹2000' },
    { name: 'Kashaya Vasti', duration: '60 min', benefits: 'Herbal decoction enema for detox', price: '₹1500' },
    { name: 'Anuvasana Vasti', duration: '60 min', benefits: 'Oil enema for joint and digestive health', price: '₹1400' },
    { name: 'Uttara Vasti', duration: '45 min', benefits: 'Urethral therapy for reproductive health', price: '₹1200' },
    { name: 'Gandusha', duration: '20 min', benefits: 'Oil gargling for oral health', price: '₹500' },
    { name: 'Kavala', duration: '20 min', benefits: 'Herbal mouth rinse for gum health', price: '₹500' },
    { name: 'Dhoomapana', duration: '20 min', benefits: 'Herbal smoke inhalation for respiratory health', price: '₹600' },
    { name: 'Raktha Mokshana', duration: '60 min', benefits: 'Bloodletting for skin and blood purification', price: '₹2000' },
    { name: 'Agni Karma', duration: '30 min', benefits: 'Thermal cauterization for pain relief', price: '₹1000' },
    { name: 'Kshara Sutra', duration: '45 min', benefits: 'Medicated thread therapy for fistula', price: '₹1500' },
    { name: 'Jalauka Avacharana', duration: '60 min', benefits: 'Leech therapy for blood purification', price: '₹1800' },
    { name: 'Yoni Prakshalana', duration: '30 min', benefits: 'Vaginal wash for gynecological health', price: '₹1000' },
    { name: 'Uttara Dhara', duration: '45 min', benefits: 'Oil stream for reproductive health', price: '₹1200' },
    { name: 'Shiro Pichu', duration: '30 min', benefits: 'Oil-soaked cloth on head for relaxation', price: '₹800' },
    { name: 'Thaila Dhara', duration: '60 min', benefits: 'Oil stream for muscle and joint health', price: '₹2000' },
    { name: 'Patra Pinda Sweda', duration: '60 min', benefits: 'Herbal leaf bolus for arthritis relief', price: '₹1800' },
    { name: 'Shashtika Shali Pinda', duration: '60 min', benefits: 'Rice bolus for muscle nourishment', price: '₹2000' },
    { name: 'Avagaha Sweda', duration: '45 min', benefits: 'Herbal bath for pelvic health', price: '₹1200' }
  ];

  const filteredTreatments = treatmentsData.filter((treatment) =>
    treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.benefits.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTreatments.length / treatmentsPerPage);
  const startIndex = (currentPage - 1) * treatmentsPerPage;
  const currentTreatments = filteredTreatments.slice(startIndex, startIndex + treatmentsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    navSection: {
      position: 'relative',
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
    searchContainer: {
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    searchInput: {
      width: '100%',
      padding: '1rem 1.5rem',
      fontSize: '1rem',
      borderRadius: '12px',
      border: '1px solid rgba(45, 90, 39, 0.2)',
      background: 'white',
      boxShadow: '0 4px 12px rgba(45, 90, 39, 0.05)',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    tableContainer: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(45, 90, 39, 0.1)',
      border: '1px solid rgba(45, 90, 39, 0.1)',
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: '600px'
    },
    tableHeader: {
      background: 'rgba(45, 90, 39, 0.05)',
      color: '#2d5a27',
      fontWeight: '600',
      fontSize: '1.1rem'
    },
    tableHeaderCell: {
      padding: '1.5rem',
      textAlign: 'left',
      borderBottom: '1px solid rgba(45, 90, 39, 0.1)',
      width: '30%',
      '&:nth-child(2)': {
        width: '70%'
      }
    },
    tableRow: {
      transition: 'all 0.3s ease'
    },
    tableCell: {
      padding: '1.5rem',
      fontSize: '1rem',
      color: '#6c757d',
      borderBottom: '1px solid rgba(45, 90, 39, 0.05)',
      width: '30%',
      '&:nth-child(2)': {
        width: '70%'
      }
    },
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '2rem',
      flexWrap: 'wrap'
    },
    paginationButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '12px',
      border: '1px solid rgba(45, 90, 39, 0.2)',
      background: 'white',
      color: '#2d5a27',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px rgba(45, 90, 39, 0.05)'
    },
    paginationButtonActive: {
      background: 'linear-gradient(135deg, #2d5a27, #6b8e23)',
      color: 'white',
      border: 'none',
      boxShadow: '0 4px 12px rgba(45, 90, 39, 0.15)'
    },
    paginationButtonDisabled: {
      background: '#f8f9fa',
      color: '#6c757d',
      cursor: 'not-allowed',
      border: '1px solid rgba(45, 90, 39, 0.1)'
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

  const sections = [
    { id: 'treatments', label: 'Treatments', icon: DollarSign }
  ];

  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Our Treatments
            <span style={styles.heroAccent}>Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Discover our range of authentic Ayurvedic treatments for holistic healing and wellness
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <main style={styles.mainContent}>
        <div style={styles.contentContainer}>
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Ayurvedic Treatments</h2>
              <p style={styles.sectionDescription}>
                Explore our comprehensive list of treatments designed to promote health and well-being
              </p>
            </div>

            {/* Search Bar */}
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search treatments by name or benefits..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to page 1 on search
                }}
                style={styles.searchInput}
                onFocus={(e) => {
                  e.target.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.15)';
                  e.target.style.borderColor = '#6b8e23';
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = '0 4px 12px rgba(45, 90, 39, 0.05)';
                  e.target.style.borderColor = 'rgba(45, 90, 39, 0.2)';
                }}
              />
            </div>

            {/* Treatments Table */}
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr style={styles.tableHeader}>
                    <th style={styles.tableHeaderCell}>Treatment Name</th>
                    <th style={styles.tableHeaderCell}>Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTreatments.length > 0 ? (
                    currentTreatments.map((treatment, index) => (
                      <tr
                        key={index}
                        style={styles.tableRow}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(45, 90, 39, 0.03)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <td style={styles.tableCell}>{treatment.name}</td>
                        <td style={styles.tableCell}>{treatment.benefits}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" style={{ ...styles.tableCell, textAlign: 'center' }}>
                        No treatments found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={styles.paginationContainer}>
                <button
                  style={{
                    ...styles.paginationButton,
                    ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
                  }}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                  <button
                    key={page + 1}
                    style={{
                      ...styles.paginationButton,
                      ...(currentPage === page + 1 ? styles.paginationButtonActive : {})
                    }}
                    onClick={() => handlePageChange(page + 1)}
                    onMouseEnter={(e) => {
                      if (currentPage !== page + 1) {
                        e.target.style.background = 'rgba(45, 90, 39, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== page + 1) {
                        e.target.style.background = 'white';
                      }
                    }}
                  >
                    {page + 1}
                  </button>
                ))}
                <button
                  style={{
                    ...styles.paginationButton,
                    ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
                  }}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactOverlay}></div>
        <div style={styles.contactContent}>
          <div style={styles.contactHeader}>
            <h2 style={styles.contactTitle}>Need Assistance?</h2>
            <p style={styles.contactDescription}>
              Contact us for treatment inquiries or to book your session
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
              <h4 style={styles.footerInfoTitle}>Reservation Required</h4>
              <p style={{ margin: 0, color: '#6c757d' }}>
                Prior consultation and advance booking mandatory for all treatments
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRKAyurvedaTreatmentPage;