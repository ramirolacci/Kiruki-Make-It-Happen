import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <a href="#inicio" className="footer__logo">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <p className="section__description">
            Encontranos en las mejores librerías del país.
          </p>
        </div>
        <div className="footer__col">
          <ul className="footer__links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#distribuidores">Distribuidores</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="footer__links-2">
            <li><a href="https://wa.link/yhjsgp" target="_blank" rel="noopener noreferrer"><i className="ri-phone-line"></i></a> +54 9 11 3628-6592</li>
            <li><a href="mailto:ventas@kiruki.com.ar"><i className="ri-mail-line"></i></a> ventas@kiruki.com.ar</li>
            <li><a href="https://www.instagram.com/kiruki_arg/" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line"></i></a> @kiruki_arg</li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2025 <span className="kiruki-logo"><span className="k1">K</span><span className="i1">i</span><span className="r">r</span><span className="u">u</span><span className="k2">k</span><span className="i2">i</span></span> <span className="mih-logo">make it happen</span> All rights reserved | Crafted by <a href="https://waveframe.com.ar/" target="_blank" rel="noopener noreferrer" className="link">WaveFrame Studio</a>.
      </div>
    </footer>
  );
}
