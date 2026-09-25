import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#inicio" className="nav__logo">
            <img src="/assets/logo.png" alt="Kiruki Logo" className="logo-img" />
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu} aria-label="Abrir menú">
          <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </div>
      <ul className={`nav__links ${isOpen ? 'open' : ''}`} id="nav-links">
        <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
        <li><a href="#productos" onClick={closeMenu}>Productos</a></li>
        <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
        <li><a href="#distribuidores" onClick={closeMenu}>Distribuidores</a></li>
        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        <li>
          <a
            href="/catalogo-productos/KIRUKI CATALOGO COLOREO 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <button className="btn btn-catalog-download">
              <span><i className="ri-download-fill"></i></span>
              Catálogo
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
