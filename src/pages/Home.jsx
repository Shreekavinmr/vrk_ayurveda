import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, Quote, CheckCircle, ChevronLeft, ChevronRight, HeartPulse, Users, Award, Clock, Phone, Mail } from 'lucide-react';
import '../styles/Home.css';
import img1 from '../assets/image1.png';
import ourfound from '../assets/ourfound.png';

const StatCounter = ({ number, label, index, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const duration = 2000;

  useEffect(() => {
    let observer;
    const targetNumber = parseInt(number.replace(/[^0-9]/g, ''));
    const suffix = number.replace(/[0-9]/g, '');

    const startCounting = () => {
      let start = 0;
      const increment = targetNumber / (duration / 16);

      const updateCount = () => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber + suffix);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start) + suffix);
        }
      };

      const timer = setInterval(updateCount, 16);
      return () => clearInterval(timer);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [number]);

  return (
    <div
      className="stat-card"
      ref={ref}
      style={{
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
      }}
    >
      {Icon && <Icon className="stat-icon" />}
      <div className="stat-number">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Home = () => {
  const sectionRefs = useRef([]);
  const itemRefs = useRef([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFacility, setCurrentFacility] = useState(0);
  const [facilitySlideIndex, setFacilitySlideIndex] = useState({});

  const stats = [
    { number: '80+', label: 'Clinical Trials', icon: Users },
    { number: '800+', label: 'Cases', icon: HeartPulse },
    { number: '6+', label: 'Sponsoring Countries', icon: Award },
    { number: '98%', label: 'Client Retention', icon: Clock },
  ];

  const treatments = [
    {
      name: 'Ayurvedic Massage',
      description: 'Traditional therapeutic massage using herbal oils',
      image: '/api/placeholder/400/300',
      benefits: ['Stress Relief', 'Improved Circulation'],
    },
    {
      name: 'Detox Therapy',
      description: 'Natural detoxification treatments to cleanse body',
      image: '/api/placeholder/400/300',
      benefits: ['Body Detox', 'Enhanced Energy'],
    },
    {
      name: 'Herbal Medicine',
      description: 'Customized herbal formulations for healing',
      image: '/api/placeholder/400/300',
      benefits: ['Natural Healing', 'Personalized Care'],
    },
    {
      name: 'Wellness Programs',
      description: 'Comprehensive programs for complete wellness',
      image: '/api/placeholder/400/300',
      benefits: ['Complete Wellness', 'Lifestyle Guidance'],
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      treatment: 'Panchakarma Therapy',
      text: 'VRK Clinic transformed my health completely. The authentic treatments and caring staff made all the difference.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Rajesh Kumar',
      treatment: 'Stress Management',
      text: 'Finally found relief from chronic stress through their holistic approach. Highly recommend their expertise.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Meera Patel',
      treatment: 'Skin Treatment',
      text: 'Natural treatments that actually work. My skin issues are completely resolved after years of struggle.',
      rating: 5,
      image: '/api/placeholder/80/80',
    },
  ];

  const facilities = [
    {
      name: 'Treatment Rooms',
      description: 'Peaceful, private spaces designed for healing',
      images: [
        ourfound,
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
      ],
    },
    {
      name: 'Herbal Lab',
      description: 'Fresh herbal medicine preparation facility',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
      ],
    },
    {
      name: 'Meditation Garden',
      description: 'Serene outdoor space for relaxation',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
      ],
    },
  ];

  const features = [
    {
      icon: HeartPulse,
      title: 'Holistic Healing',
      desc: 'Treat the root cause, not just the symptoms—guided by ancient Ayurvedic principles.',
    },
    {
      icon: Users,
      title: 'Natural Therapies',
      desc: 'Experience safe and effective treatments using herbal remedies and traditional methods.',
    },
    {
      icon: Award,
      title: 'Personalized Care',
      desc: 'Every patient receives a tailored plan based on their body constitution and condition.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSlideChange = (facilityIndex, direction) => {
    const images = facilities[facilityIndex].images;
    setFacilitySlideIndex((prev) => {
      const current = prev[facilityIndex] || 0;
      let next = direction === 'next' ? current + 1 : current - 1;
      if (next >= images.length) next = 0;
      if (next < 0) next = images.length - 1;
      return { ...prev, [facilityIndex]: next };
    });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="contact-shape contact-shape-1"></div>
        <div className="contact-shape contact-shape-2"></div>
        <div className="contact-dots-pattern contact-dots-1"></div>
        <div className="contact-dots-pattern contact-dots-2"></div>
        <div className="content-container">
          <div className="hero-content">
            <div className="contact-hero-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Welcome to VRK Ayurveda
            </div>
            <h1 className="hero-title">
              Discover Holistic Healing at
              <span className="hero-accent"> VRK Ayurveda</span>
            </h1>
            <p className="hero-description">
              Experience authentic Ayurvedic treatments for mind, body, and soul.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={(el) => (sectionRefs.current[0] = el)} className="about-section">
        <div className="content-container">
          <div className="section-header">
            <h2 className="section-title">About Us</h2>
            <p className="section-description">
              Learn about our commitment to holistic healing and authentic Ayurvedic care.
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                VRK Ayurvedic Clinic is a leading center for holistic healing, offering authentic Ayurvedic treatments tailored to your needs. Our experienced practitioners combine ancient wisdom with modern care to promote wellness.
              </p>
              <p>
                We are committed to delivering personalized care in a serene environment, adhering to the highest standards of quality and safety. Our focus is on restoring balance and vitality for long-term health.
              </p>
              <a href="/about" className="about-cta">
                More About Us <ArrowRight size={20} />
              </a>
            </div>
            <div className="about-image">
              <img src={img1} alt="Ayurvedic clinic team" />
            </div>
          </div>
        </div>
      </section>


       <div className="content-container1">
      <div className="section-header">
        <h2 className="section-title">Our Foundation</h2>
        <p className="section-description">
          Empowering Health, Advancing Knowledge
        </p>
        <img
          src={ourfound}
          alt="Ayurvedic Icon"
          className="section-header-image"
        />
      </div>
      </div>

      {/* Treatments Section */}
      <section ref={(el) => (sectionRefs.current[2] = el)} className="treatments-section">
        <div className="content-container">
          <div className="section-header">
            <h2 className="section-title">Our Treatments</h2>
            <p className="section-description">
              Discover authentic Ayurvedic therapies for complete wellness.
            </p>
          </div>
          <div className="treatments-grid">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="treatment-card"
                ref={(el) => (itemRefs.current[stats.length + index] = el)}
              >
                <img src={treatment.image} alt={treatment.name} className="treatment-image" />
                <div className="treatment-content">
                  <h3>{treatment.name}</h3>
                  <p>{treatment.description}</p>
                  <div className="treatment-benefits">
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="benefit-item">
                        <CheckCircle size={16} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="treatment-cta">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={(el) => (sectionRefs.current[1] = el)} className="stats-section">
        <div className="content-container">
          <div className="section-header">
            <h2 className="section-title1">Our Impact</h2>
            <p className="section-description">
              Transforming lives through authentic Ayurvedic care.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
                index={index}
                ref={(el) => (itemRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section ref={(el) => (sectionRefs.current[3] = el)} className="facilities-section">
        <div className="content-container">
          <div className="section-header">
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-description">
              Modern amenities designed for your comfort and healing.
            </p>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`facility-card ${currentFacility === index ? 'active' : ''}`}
                onClick={() => {
                  setCurrentFacility(index);
                  setFacilitySlideIndex((prev) => ({ ...prev, [index]: 0 }));
                }}
                ref={(el) => (itemRefs.current[stats.length + treatments.length + index] = el)}
              >
                <div className="facility-slideshow">
                  {facility.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`facility-slide ${facilitySlideIndex[index] === imgIndex ? 'active' : ''}`}
                    >
                      <img src={image} alt={facility.name} />
                    </div>
                  ))}
                  <div className="facility-overlay">
                    <h3>{facility.name}</h3>
                    <p>{facility.description}</p>
                  </div>
                  <button
                    className="slide-btn prev-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSlideChange(index, 'prev');
                    }}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="slide-btn next-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSlideChange(index, 'next');
                    }}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={(el) => (sectionRefs.current[4] = el)} className="testimonials-section">
        <div className="content-container">
          <div className="section-header">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-description">
              Hear from those who have experienced our care.
            </p>
          </div>
          <div className="testimonial-card">
            <Quote size={32} className="quote-icon" />
            <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
            <div className="testimonial-author">
              <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
              <div>
                <h4>{testimonials[currentTestimonial].name}</h4>
                <p>{testimonials[currentTestimonial].treatment}</p>
                <div className="rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" />
                  ))}
                </div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                  ref={(el) => (itemRefs.current[stats.length + treatments.length + facilities.length + index] = el)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;