import React, { useRef } from 'react';
import '../styles/ImageSection.css';

const AboutFullPageSection = ({ imageSrc, altText }) => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="about-full-page-section">
      <div className="about-full-page-image">
        <img src={imageSrc} alt={altText || 'About Section Image'} />
        <div className="about-full-page-overlay"></div>
      </div>
    </section>
  );
};

export default AboutFullPageSection;