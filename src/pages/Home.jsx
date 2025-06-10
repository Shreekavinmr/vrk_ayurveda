import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, Quote, CheckCircle, Heart, Target, Award, Users } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const heroTextRefs = useRef([]);
  const sectionRefs = useRef([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFacility, setCurrentFacility] = useState(0);

  const treatments = [
    {
      name: "Ayurvedic Massage",
      description: "Traditional therapeutic massage using herbal oils to restore balance and vitality",
      image: "/api/placeholder/400/300",
      benefits: ["Stress Relief", "Improved Circulation", "Muscle Relaxation"]
    },
    {
      name: "Detox Therapy",
      description: "Natural detoxification treatments to cleanse and purify your body",
      image: "/api/placeholder/400/300",
      benefits: ["Body Detox", "Skin Purification", "Enhanced Energy"]
    },
    {
      name: "Herbal Medicine",
      description: "Customized herbal formulations for targeted healing and wellness",
      image: "/api/placeholder/400/300",
      benefits: ["Natural Healing", "Personalized Care", "Holistic Treatment"]
    },
    {
      name: "Wellness Programs",
      description: "Comprehensive programs combining diet, lifestyle, and therapeutic treatments",
      image: "/api/placeholder/400/300",
      benefits: ["Complete Wellness", "Lifestyle Guidance", "Long-term Health"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      treatment: "Panchakarma Therapy",
      text: "VRK Clinic transformed my health completely. The authentic treatments and caring staff made all the difference.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Rajesh Kumar",
      treatment: "Stress Management",
      text: "Finally found relief from chronic stress through their holistic approach. Highly recommend their expertise.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Meera Patel",
      treatment: "Skin Treatment",
      text: "Natural treatments that actually work. My skin issues are completely resolved after years of struggle.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const facilities = [
    {
      name: "Treatment Rooms",
      description: "Peaceful, private spaces designed for healing",
      image: "/api/placeholder/600/400"
    },
    {
      name: "Herbal Lab",
      description: "Fresh herbal medicine preparation facility",
      image: "/api/placeholder/600/400"
    },
    {
      name: "Meditation Garden",
      description: "Serene outdoor space for relaxation",
      image: "/api/placeholder/600/400"
    },
    {
      name: "Consultation Rooms",
      description: "Comfortable spaces for health consultations",
      image: "/api/placeholder/600/400"
    }
  ];

  const visionMissionValues = [
    {
      icon: <Target size={40} />,
      title: "Our Vision",
      description: "To be the leading center for authentic Ayurvedic healing, making natural wellness accessible to everyone.",
      color: "#2d5a27"
    },
    {
      icon: <Heart size={40} />,
      title: "Our Mission",
      description: "Providing personalized healthcare through traditional Ayurvedic practices for optimal natural wellness.",
      color: "#6b8e23"
    },
    {
      icon: <Award size={40} />,
      title: "Our Values",
      description: "Authenticity, compassion, and excellence guide our commitment to patient care and traditional healing.",
      color: "#4a7c59"
    }
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

    [...heroTextRefs.current, ...sectionRefs.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      [...heroTextRefs.current, ...sectionRefs.current].forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate facilities
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFacility((prev) => (prev + 1) % facilities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={(el) => (heroTextRefs.current[0] = el)} className="hero-title">
              Welcome to VRK Ayurvedic Clinic
            </h1>
            <p ref={(el) => (heroTextRefs.current[1] = el)} className="hero-subtitle">
              Embrace Nature's Healing Touch for Holistic Wellness
            </p>
            <a href="/reservation" ref={(el) => (heroTextRefs.current[2] = el)} className="hero-cta">
              Book Your Appointment
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section */}
      <section ref={(el) => (sectionRefs.current[0] = el)} className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About VRK Ayurvedic Clinic</h2>
              <p className="about-description">
                At VRK Ayurvedic Clinic, we blend ancient wisdom with modern care to provide authentic healing experiences. 
                Our expert practitioners are dedicated to restoring your natural balance through time-tested Ayurvedic treatments.
              </p>
              <p className="about-description">
                With over two decades of experience, we have helped thousands of patients achieve optimal health through 
                personalized treatment plans that address the root cause of ailments, not just symptoms.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Happy Patients</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Treatments</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/api/placeholder/500/400" alt="VRK Ayurvedic Clinic" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section ref={(el) => (sectionRefs.current[1] = el)} className="vmv-section">
        <div className="container">
          <h2 className="section-title centered">Our Foundation</h2>
          <div className="vmv-grid">
            {visionMissionValues.map((item, index) => (
              <div key={index} className="vmv-card" style={{ '--accent-color': item.color }}>
                <div className="vmv-icon">{item.icon}</div>
                <h3 className="vmv-title">{item.title}</h3>
                <p className="vmv-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section ref={(el) => (sectionRefs.current[2] = el)} className="treatments-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Treatments</h2>
            <p className="section-subtitle">Discover authentic Ayurvedic therapies for complete wellness</p>
          </div>
          <div className="treatments-grid">
            {treatments.map((treatment, index) => (
              <div key={index} className="treatment-card">
                <div className="treatment-image">
                  <img src={treatment.image} alt={treatment.name} />
                  <div className="treatment-badge">Featured</div>
                </div>
                <div className="treatment-content">
                  <h3 className="treatment-name">{treatment.name}</h3>
                  <p className="treatment-description">{treatment.description}</p>
                  <div className="treatment-benefits">
                    {treatment.benefits.map((benefit, idx) => (
                      <div key={idx} className="benefit-item">
                        <CheckCircle size={14} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="treatment-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section ref={(el) => (sectionRefs.current[3] = el)} className="facilities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-subtitle">Modern amenities designed for your comfort and healing</p>
          </div>
          <div className="facilities-content">
            <div className="facility-showcase">
              <div className="facility-image">
                <img src={facilities[currentFacility].image} alt={facilities[currentFacility].name} />
                <div className="facility-overlay">
                  <h3>{facilities[currentFacility].name}</h3>
                  <p>{facilities[currentFacility].description}</p>
                </div>
              </div>
            </div>
            <div className="facilities-nav">
              <div className="facility-buttons">
                {facilities.map((facility, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFacility(index)}
                    className={`facility-btn ${currentFacility === index ? 'active' : ''}`}
                  >
                    {facility.name}
                  </button>
                ))}
              </div>
              <div className="facility-features">
                <h4>Why Choose Our Facilities?</h4>
                <ul>
                  <li><CheckCircle size={16} />Modern equipment with traditional methods</li>
                  <li><CheckCircle size={16} />Hygienic and peaceful environment</li>
                  <li><CheckCircle size={16} />Expert supervision and care</li>
                  <li><CheckCircle size={16} />Personalized treatment spaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={(el) => (sectionRefs.current[4] = el)} className="testimonials-section">
        <div className="container">
          <h2 className="section-title centered">What Our Patients Say</h2>
          <div className="testimonial-container">
            <div className="testimonial-card">
              <Quote size={24} className="quote-icon" />
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">
                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                <div className="author-info">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p>{testimonials[currentTestimonial].treatment}</p>
                </div>
                <div className="rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={14} />
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