import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../styles/Header.css';
import logo from '/assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(prev => prev === index ? null : index);
  };

  const openSubmenu = (index) => {
    setActiveSubmenu(index);
  };

  const closeSubmenu = () => {
    setActiveSubmenu(null);
  };

  const handleNavigation = (link) => {
    window.scrollTo(0, 0); // Scroll to top
    setMobileMenuOpen(false); // Close mobile menu
    setActiveSubmenu(null); // Close any open submenus
    navigate(link); // Navigate to the link
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeSubmenu !== null) {
        const dropdowns = document.querySelectorAll('.has-submenu');
        let clickedOutside = true;
        
        dropdowns.forEach(dropdown => {
          if (dropdown.contains(event.target)) {
            clickedOutside = false;
          }
        });
        
        if (clickedOutside) {
          setActiveSubmenu(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSubmenu]);

  const navItems = [
    { title: 'Home', link: '/' },
    { 
      title: 'About', 
      link: '/about',
      submenu: [
        { title: 'Founders Message', link: '/about/founder-message' },
        { title: 'About us', link: '/about/about-us' },
        { title: 'Patient Care Facilities', link: '/about/patient-facility' },
      ]
    },
    { title: 'Therapies', link: '/therapies',
      submenu: [
        { title: 'Panchakarma', link: '/therapies/Panchakarma' },
        { title: 'Naturopathy', link: '/therapies/Naturopathy' },
        { title: 'Physiotherapy', link: '/therapies/Physiotherapy' },
        { title: 'Yoga Therapy', link: '/therapies/yoga-therapy' },
      ]
    },
    { title: 'Disease Treated', link: '/disease-treated' },
    { 
      title: 'Tarriff', 
      link: '/tarriff',
      submenu: [
        { title: 'Accomodaation', link: '/tarriff/accomodation' },
        { title: 'Treatment', link: '/tarriff/treatment' },
        { title: 'Complimentary Treatment', link: '/tarriff/complimentary-treatment' },
      ]
    },
    { 
      title: 'Reservation', 
      link: '/reservation',
      submenu: [
        { title: 'Admission', link: '/reservation/admission-cancellation' },
        { title: 'Rules & Regulations', link: '/reservation/rules' },
        { title: 'FAQS', link: '/reservation/faqs' },
      ]
    },
    { title: 'Contact Us', link: '/contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a onClick={() => handleNavigation('/')} className="logo">
            <div className="logo-image">
              <img src={logo} alt="VRK Logo" className="company-logo" />
            </div>
            <div className="logo-text">
              <span className="primary">Vedic Raksha Kendra</span>
              <span className="secondary">Ayurvedic Hospital (A unit of CARD Trust)</span>
            </div>
          </a>
        </div>

        <nav className={`desktop-nav ${mobileMenuOpen ? 'hidden' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.submenu ? 'has-submenu' : ''}`}
                onMouseEnter={item.submenu ? () => openSubmenu(index) : undefined}
                onMouseLeave={item.submenu ? () => closeSubmenu() : undefined}
              >
                <Link 
                  to={item.link} 
                  className="nav-link"
                  onClick={(e) => {
                    if (item.submenu) {
                      e.preventDefault();
                      toggleSubmenu(index);
                    } else {
                      handleNavigation(item.link);
                    }
                  }}
                  onMouseEnter={item.submenu ? () => openSubmenu(index) : undefined}
                  onMouseLeave={item.submenu ? () => closeSubmenu() : undefined}
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className={`submenu-icon ${activeSubmenu === index ? 'active' : ''}`} size={16} />
                  )}
                </Link>
                
                {item.submenu && (
                  <ul 
                    className={`submenu ${activeSubmenu === index ? 'active' : ''}`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="submenu-item">
                        <Link 
                          to={subItem.link} 
                          className="submenu-link"
                          onClick={() => handleNavigation(subItem.link)}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <li className={`mobile-nav-item ${item.submenu ? 'has-submenu' : ''}`}>
                  <Link  
                    to={item.link} 
                    className="mobile-nav-link"
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                        toggleSubmenu(index);
                      } else {
                        handleNavigation(item.link);
                      }
                    }}
                  >
                    {item.title}
                    {item.submenu && (
                      <ChevronDown className={`mobile-submenu-icon ${activeSubmenu === index ? 'active' : ''}`} size={20} />
                    )}
                  </Link>
                </li>
                
                {item.submenu && (
                  <ul className={`mobile-submenu ${activeSubmenu === index ? 'active' : ''}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="mobile-submenu-item">
                        <Link 
                          to={subItem.link} 
                          className="mobile-submenu-link"
                          onClick={() => handleNavigation(subItem.link)}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;