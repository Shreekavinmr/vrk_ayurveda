import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css';
import ContactPage from './pages/ContactUs';
import TabReservationPage from './pages/TabReservationPage';
import HospitalRulesPage from './pages/HospitalRulesPage';
import VRKAyurvedaFAQPage from './pages/VRKAyurvedaFAQPage';
import VRKAyurvedaTariffPage from './pages/VRKAyurvedaTariffPage';
import VRKAyurvedaTreatmentPage from './pages/VRKAyurvedaTreatmentPage';
import VRKAyurvedaComplementaryPage from './pages/VRKAyurvedaComplementaryPage';
import VRKAyurvedaDiseasesPage from './pages/VRKAyurvedaDiseasesPage';
import VRKAyurvedaTherapiesPage from './pages/VRKAyurvedaTherapiesPage';
import VRKAyurvedaTherapiesPage1 from './pages/VRKAyurvedaTherapiesPage-1';
import VRKAyurvedaTherapiesPage2 from './pages/VRKAyurvedaTherapiesPage-2';
import VRKAyurvedaTherapiesPage3 from './pages/VRKAyurvedaTherapiesPage-3';
import VRKAyurvedaFromTheFounderPage from './pages/FromTheFounderPage';
import VRKAyurvedaAboutUsPage from './pages/VRKAyurvedaAboutUsPage';
import VRKPatientCareFacilitiesPage from './pages/PatientCareFacilitiesPage';
import ScrollToTop from './components/scrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/reservation/admission-cancellation'element={<TabReservationPage />}/>
        <Route path='/reservation/rules'element={<HospitalRulesPage />}/>
        <Route path='/reservation/faqs'element={<VRKAyurvedaFAQPage />}/>
        <Route path='/tarriff/accomodation'element={<VRKAyurvedaTariffPage />}/>
        <Route path='/tarriff/treatment'element={<VRKAyurvedaTreatmentPage />}/>
        <Route path='/tarriff/complimentary-treatment'element={<VRKAyurvedaComplementaryPage />}/>
        <Route path='/disease-treated'element={<VRKAyurvedaDiseasesPage />}/>
        <Route path='/therapies/Panchakarma'element={<VRKAyurvedaTherapiesPage />}/>
        <Route path='/therapies/Naturopathy'element={<VRKAyurvedaTherapiesPage1 />}/>
        <Route path='/therapies/Physiotherapy'element={<VRKAyurvedaTherapiesPage2 />}/>
        <Route path='/therapies/yoga-therapy'element={<VRKAyurvedaTherapiesPage3 />}/>
        <Route path='/about/founder-message'element={<VRKAyurvedaFromTheFounderPage />}/>
        <Route path='/about/about-us'element={<VRKAyurvedaAboutUsPage />}/>
         <Route path='/about/patient-facility'element={<VRKPatientCareFacilitiesPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
