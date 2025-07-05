import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, Quote, CheckCircle, ChevronLeft, ChevronRight, HeartPulse, Users, Award, Clock, Phone, Mail } from 'lucide-react';
import '../styles/Home.css';
import img1 from '/assets/image1.png';
import ourfound from '/assets/ourfound.png';
import cardTrustLogo from '/assets/card_trust_logo.png';
import vrkAyurvedaLogo from '/assets/logo.png';
import massage_treatment from '/assets/home_treatment/massage.png';
import detox_therapy from '/assets/home_treatment/detox_therapy.png';
import herbal_medicine from '/assets/home_treatment/herbal_medicine.png';
import wellness_programs from '/assets/home_treatment/wellness_programs.png';
import shop1 from '/assets/home_treatment/shop1.jpg';
import shop2 from '/assets/home_treatment/shop2.jpg';
import shop3 from '/assets/home_treatment/shop3.jpg';
import shop4 from '/assets/IMG_9879.jpg';
import acc1 from '/assets/home_treatment/acc1.jpg';
import acc2 from '/assets/home_treatment/acc2.jpg';
import acc3 from '/assets/home_treatment/acc3.jpg';
import treatmentroom1 from '/assets/home_treatment/treatmentroom1.jpg';
import treatmentroom2 from '/assets/home_treatment/treatmentroom2.jpg';
import treatmentroom3 from '/assets/home_treatment/treatmentroom3.jpg';


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
  const facilities = [
    {
      name: 'Treatment Rooms',
      description: 'Peaceful, private spaces designed for healing',
      images: [
        treatmentroom1,
        treatmentroom2,
        treatmentroom3
      ],
    },
    {
      name: 'Accommodation',
      description: 'Comfortable and serene living spaces for guests',
      images: [acc1, acc2, acc3],
    },
    {
      name: 'Medical Shop',
      description: 'Authentic Ayurvedic medicines and products',
      images: [shop1, shop2, shop3, shop4],
    },
  ];
  // Initialize facilitySlideIndex with 0 for each facility
  const [facilitySlideIndex, setFacilitySlideIndex] = useState(
    facilities.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  const stats = [
    { number: '10+', label: 'Years of Healing Experience', icon: Clock },
    { number: '1000+', label: 'Happy Patients Treated', icon: HeartPulse },
    { number: '30+', label: 'Natural Therapies Offered', icon: Award },
    { number: '95%', label: 'Patient Satisfaction Rate', icon: Users },
  ];

  const treatments = [
    {
      name: 'Ayurvedic Massage',
      description: 'Traditional therapeutic massage using herbal oils',
      image: massage_treatment,
      benefits: ['Stress Relief', 'Improved Circulation'],
    },
    {
      name: 'Detox Therapy',
      description: 'Natural detoxification treatments to cleanse body',
      image: detox_therapy,
      benefits: ['Body Detox', 'Enhanced Energy'],
    },
    {
      name: 'Herbal Medicine',
      description: 'Customized herbal formulations for healing',
      image: herbal_medicine,
      benefits: ['Natural Healing', 'Personalized Care'],
    },
    {
      name: 'Wellness Programs',
      description: 'Comprehensive programs for complete wellness',
      image: wellness_programs,
      benefits: ['Complete Wellness', 'Lifestyle Guidance'],
    },
  ];

  const testimonials = [
    {
      name: 'Priya',
      treatment: 'Panchakarma Therapy',
      text: 'Vedic Raksha Kendra helped me detox and regain my energy through Panchakarma. The process was thorough, and the results were incredible.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      treatment: 'Yoga Therapy',
      text: 'Their yoga therapy sessions relieved my back pain and improved my flexibility. The instructors are professional and understanding.',
      rating: 5,
    },
    {
      name: 'Sarath',
      treatment: 'Naturopathy',
      text: 'I had digestive issues for years. With naturopathy and diet guidance, my health has improved naturally without any side effects.',
      rating: 5,
    },
    {
      name: 'Kavitha',
      treatment: 'Physiotherapy',
      text: 'The physiotherapy I received after my accident was highly effective. I’m walking comfortably now thanks to their expert care.',
      rating: 5,
    },
    {
      name: 'Arun',
      treatment: 'Panchakarma & Yoga',
      text: 'The combination of Panchakarma and yoga brought a new level of mental peace and physical strength to my life.',
      rating: 5,
    },
    {
      name: 'Meenakshi',
      treatment: 'Naturopathy for Women’s Health',
      text: 'Their naturopathic treatments helped me naturally balance my hormones and improve my overall wellness.',
      rating: 5,
    },
    {
      name: 'Senthil',
      treatment: 'Physiotherapy & Pain Relief',
      text: 'I was struggling with chronic neck pain. The physiotherapy sessions were structured, healing, and very effective.',
      rating: 5,
    },
    {
      name: 'Revathi',
      treatment: 'Yoga for Stress Relief',
      text: 'I used to suffer from anxiety and sleep issues. Their therapeutic yoga classes changed my life for the better.',
      rating: 5,
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
              Welcome to Vedic Raksha Kendra Ayurvedic Hospital (A unit of CARD Trust)
            </div>
            <h1 className="hero-title">
              Discover Holistic Healing at
              <span className="hero-accent"> Vedic Raksha Kendra Ayurvedic Hospital</span>
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
                Vedic Raksha Kendra Ayurvedic Hospital is a premier destination for authentic holistic healing. Rooted in the timeless principles of Ayurveda, we offer a wide range of personalized treatments designed to restore balance and promote long-term health. From chronic pain relief and detox therapies to stress management and lifestyle consultations, every service is carefully crafted to suit individual needs.
              </p>
              <p>
                Our team of experienced Ayurvedic doctors and therapists blends ancient wisdom with modern wellness practices, ensuring safe, effective, and compassionate care. At Vedic Raksha Kendra, we believe in healing the mind, body, and spirit as one — in a tranquil environment that fosters inner peace and rejuvenation. We are dedicated to your well-being, using only natural, high-quality remedies and adhering to the highest standards of quality, hygiene, and professionalism.
              </p>
              <p>
                Whether you seek relief from a specific condition or wish to enhance your overall vitality, Vedic Raksha Kendra is here to guide you on your journey to lasting wellness through the power of Ayurveda.
              </p>
              <a href="/about/about-us" className="about-cta">
                More About Us <ArrowRight size={20} />
              </a>
            </div>
            <div className="about-image">
              <img src={img1} alt="Ayurvedic hospital team" />
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
                  <a href="/disease-treated">
                    <button className="treatment-cta">Learn More</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section ref={(el) => (sectionRefs.current[4] = el)} className="partnerships-section">
        <div className="content-container">
          <div className="section-header">
            <h2 className="section-title">Our Partnerships</h2>
            <p className="section-description">
              Collaborating for holistic wellness and community impact.
            </p>
          </div>
          <div className="partnerships-content">
            <div className="partnership-card">
              <div className="partnership-logos">
                <img src={vrkAyurvedaLogo} alt="Vedic Raksha Kendra Logo" className="partnership-logo" />
                <img src={cardTrustLogo} alt="CARD Trust Logo" className="partnership-logo" />
              </div>
              <h3 className="partnership-title">Collaboration with CARD Trust</h3>
              <p className="partnership-description">
                Vedic Raksha Kendra Ayurvedic Hospital is proud to be a unit of CARD Trust, a dedicated organization focused on advancing holistic health and community welfare. Together, we combine ancient Ayurvedic wisdom with modern wellness initiatives to provide comprehensive care and promote sustainable well-being.
              </p>
              {/* <a href="/about/partnerships" className="partnership-cta">
                Learn More About Our Partnership <ArrowRight size={20} />
              </a> */}
            </div>
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
                  setFacilitySlideIndex((prev) => ({ ...prev, [index]: prev[index] || 0 }));
                }}
                ref={(el) => (itemRefs.current[stats.length + treatments.length + index] = el)}
              >
                <div className="facility-slideshow">
                  {facility.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`facility-slide ${facilitySlideIndex[index] === imgIndex ? 'active' : ''}`}
                    >
                      <img src={image} alt={`${facility.name} ${imgIndex + 1}`} />
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
      <section ref={(el) => (sectionRefs.current[5] = el)} className="testimonials-section">
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