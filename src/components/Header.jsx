import React from 'react';

export default function Header() {
  return (
    <header className="hero-modern" id="inicio">
      <div className="header__image">
        <img src="/assets/logo.png" alt="Kiruki Header" />
      </div>
      <div className="header__content">
        <div className="hero-badge">
          <span className="badge-dot"></span> Venta Mayorista Directa • Temporada 2025
        </div>
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
