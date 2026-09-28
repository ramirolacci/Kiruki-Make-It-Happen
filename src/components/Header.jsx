import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.header__content h1', '.header__content .section__description', '.hero-actions a', '.hero-features-strip .feature-item'],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.1,
          delay: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );
      gsap.fromTo(
        '.header__image',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.3, delay: 0.2, ease: 'power3.out', clearProps: 'transform,opacity' }
      );
      gsap.fromTo(
        '.header__image img',
        { y: 40, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1, delay: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="hero-modern" id="inicio" ref={headerRef}>
      <div className="header__image">
        <img src="/assets/logo.png" alt="Kiruki Header" />
      </div>
      <div className="header__content">
        <h1>Desatá tu creatividad con <span className="gradient-text">Kiruki</span></h1>
        <p className="section__description">
          Encuentra todo lo que necesitas para un año lleno de color, arte y diversión. 
          Ofrecemos productos escolares y de oficina de alta gama, calidad garantizada y entregas veloces a todo el país.
        </p>
        <div className="hero-actions">
          <a href="#productos" className="btn btn-hero-primary">
            <span><i className="ri-grid-fill"></i></span> Explorar Productos
          </a>
          <a href="/catalogo-productos/KIRUKI CATALOGO COLOREO 2025.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-hero-secondary">
            <span><i className="ri-file-pdf-fill"></i></span> Descargar Catálogo
          </a>
        </div>
        <div className="hero-features-strip">
          <div className="feature-item">
            <i className="ri-shield-check-fill"></i> Calidad Garantizada
          </div>
          <div className="feature-item">
            <i className="ri-truck-fill"></i> Envíos a todo el país
          </div>
          <div className="feature-item">
            <i className="ri-palette-fill"></i> Diseños Exclusivos
          </div>
        </div>
      </div>
    </header>
  );
}
