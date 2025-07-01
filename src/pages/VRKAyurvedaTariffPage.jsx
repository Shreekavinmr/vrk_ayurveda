import React, { useState } from 'react';
import { DollarSign, Phone, Mail } from 'lucide-react';

const VRKAyurvedaTariffPage = () => {
  const [activeSection] = useState('tariff');

  const tariffData = [
    { type: 'Standard A/C', rate: '₹2000/day', occupancy: 'Single/Twin' },
    { type: 'Standard Non-A/C', rate: '₹1500/day', occupancy: 'Single/Twin' },
    { type: 'Suite Room', rate: '₹2500/day', occupancy: 'Single/Twin/Family' },
    { type: 'Dormitory', rate: 'Varies', occupancy: '4/6 members' },
  ];

  const roomDetails = [
  {
    type: 'Standard A/C',
    description: 'These air-conditioned rooms are located on the ground floor with a view of the garden. Each room is equipped with two individual wooden cots, a cupboard, television, and an attached bath with shower and toilet. Ideal for single or twin occupancy, offering comfort and quiet in a traditional setting.',
    images: ['Temple_Room_1.jpg', 'Temple_Room_2.jpg', 'Temple_Room_Garden_View.jpg']
  },
  {
    type: 'Standard Non-A/C',
    description: 'Non-air-conditioned rooms set in a peaceful corridor layout with access to the lush garden. Features include two wooden cots, a cupboard, a television, and an attached bathroom. Suitable for guests who prefer natural ventilation in a calm and serene environment.',
    images: ['Temple_Room_1.jpg', 'Temple_Room_2.jpg']
  },
  {
    type: 'Suite Room',
    description: 'Spacious, air-conditioned premium rooms such as the Deluxe and Valley Rooms. These come with a wooden king-size or double cot, wardrobe, chairs, attached modern bathroom, and a private sit-out or scenic view. Suitable for couples or families who prefer enhanced privacy and comfort.',
    images: ['Deluxe_Cottage_1.jpg', 'Valley_Room_2.jpg', 'Deluxe_Cottage_Sitout.jpg']
  },
  {
    type: 'Dormitory',
    description: 'The Dormitory offers shared accommodation with five individual wooden cots, wardrobes, television, and access to clean, attached baths and toilets. Best suited for group stays or budget-friendly bookings.',
    images: ['Dormitory_Room_1.jpg', 'Dormitory_Room_2.jpg']
  }
];


  const paymentDetails = [
    'An advance amount will be collected during the time of admission as per the chosen type of accommodation only from those who have not made a reservation deposit.',
    'Room charges, treatment charges, and other miscellaneous charges will be collected at the time of discharge.',
    'Services like laundry, medications, internet, phone calls, car wash, room service, laboratory charges, and other services requested will be charged accordingly.',
    'Final bills must be settled before 24 hours from the expected time of discharge. Bills can be remitted by cash or card.'
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
    tariffContainer: {
      marginBottom: '4rem'
    },
    tariffGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1200px',
      margin: '2rem auto 0',
      padding: '0 1rem'
    },
    tariffTile: {
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 24px rgba(45, 90, 39, 0.1)',
      border: '1px solid rgba(45, 90, 39, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '180px'
    },
    tariffTileTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '1rem'
    },
    tariffTileRate: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#6b8e23',
      marginBottom: '0.5rem'
    },
    tariffTileOccupancy: {
      fontSize: '1rem',
      color: '#6c757d',
      fontWeight: '500'
    },
    tariffNote: {
      fontSize: '0.95rem',
      color: '#6c757d',
      textAlign: 'center',
      marginTop: '2rem',
      fontStyle: 'italic',
      padding: '1rem',
      background: 'rgba(45, 90, 39, 0.05)',
      borderRadius: '8px',
      border: '1px solid rgba(45, 90, 39, 0.1)'
    },
    roomSection: {
      padding: '4rem 0',
      margin: 0, // Remove margin to ensure no gaps
      background: '#ffffff' // Pure white background
    },
    roomContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    roomTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#2d5a27',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    roomLayout: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    },
    roomDescription: {
      fontSize: '1.1rem',
      color: '#6c757d',
      lineHeight: '1.8',
      textAlign: 'left'
    },
    imageGallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      justifyItems: 'center'
    },
    imagePlaceholder: {
      width: '100%',
      maxWidth: '300px',
      height: '200px',
      background: 'linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 100%)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6c757d',
      fontSize: '0.9rem',
      border: '2px solid rgba(45, 90, 39, 0.1)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      padding: '1rem'
    },
    paymentContainer: {
      maxWidth: '900px',
      margin: '4rem auto 0'
    },
    paymentCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '2.5rem',
      boxShadow: '0 8px 24px rgba(45, 90, 39, 0.1)',
      border: '1px solid rgba(45, 90, 39, 0.1)'
    },
    paymentList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    paymentItem: {
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      color: '#6c757d',
      paddingLeft: '2rem',
      position: 'relative'
    },
    paymentBullet: {
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

  const sections = [
    { id: 'tariff', label: 'Tariff & Accommodation', icon: DollarSign }
  ];

  return (
    <div style={styles.modernContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Tariff & Accommodation
            <span style={styles.heroAccent}> Vedic Raksha Kendra Ayurveda hospital</span>
          </h1>
          <p style={styles.heroDescription}>
            Explore our accommodation options and tariff details for a comfortable stay at our holistic healing center
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <main style={styles.mainContent}>
        <div style={styles.contentContainer}>
          <section style={styles.contentSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Tariff & Accommodation</h2>
              <p style={styles.sectionDescription}>
                Find detailed information about our room tariffs, accommodation options, and payment policies
              </p>
            </div>

            {/* Room Tariff */}
            <div style={styles.tariffContainer}>
              <h3 style={{ ...styles.roomTitle, marginBottom: '1rem' }}>Room Tariff</h3>
              <div style={styles.tariffGrid}>
                {tariffData.map((item, index) => (
                  <div
                    key={index}
                    style={styles.tariffTile}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(45, 90, 39, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={styles.tariffTileTitle}>{item.type}</div>
                    <div style={styles.tariffTileRate}>{item.rate}</div>
                    <div style={styles.tariffTileOccupancy}>{item.occupancy}</div>
                  </div>
                ))}
              </div>
              {/* <div style={styles.tariffNote}>
                *Room tariffs are inclusive of food, electricity, cleaning, and maintenance charges
              </div> */}
            </div>
          </section>
        </div>

        {/* Room Details */}
        {roomDetails.map((room, index) => (
          <section key={index} style={styles.roomSection}>
            <div style={styles.roomContent}>
              <h4 style={styles.roomTitle}>{room.type}</h4>
              <div style={{
                ...styles.roomLayout,
                ...(window.innerWidth <= 768 ? { gridTemplateColumns: '1fr' } : {})
              }}>
                <div style={styles.imageGallery}>
                  {room.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      style={styles.imagePlaceholder}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 90, 39, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {image.replace('.jpg', '').replace(/_/g, ' ')}
                    </div>
                  ))}
                </div>
                <div>
                  <p style={styles.roomDescription}>{room.description}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Payment Details */}
        <div style={styles.contentContainer}>
          <section style={styles.contentSection}>
            <div style={styles.paymentContainer}>
              <h3 style={{ ...styles.roomTitle, marginBottom: '2rem' }}>Payment Information</h3>
              <div style={styles.paymentCard}>
                <ul style={styles.paymentList}>
                  {paymentDetails.map((item, index) => (
                    <li key={index} style={styles.paymentItem}>
                      <div style={styles.paymentBullet}></div>
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
            <h2 style={styles.contactTitle}>Need Assistance?</h2>
            <p style={styles.contactDescription}>
              Contact us for booking inquiries or further details about our accommodations
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

export default VRKAyurvedaTariffPage;