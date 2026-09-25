import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import DistributorsSection from './components/DistributorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductsSection />
      <AboutSection />
      <DistributorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
