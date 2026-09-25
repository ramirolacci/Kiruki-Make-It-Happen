import React from 'react';

export default function Header() {
  return (
    <header id="inicio">
      <div className="header__image">
        <img src="/assets/logo.png" alt="header" />
      </div>
      <div className="header__content">
        <h1>Desatá tu creatividad con Kiruki</h1>
        <p className="section__description">
          Encuentra todo lo que necesitas para un año escolar lleno de color y diversión. Ofrecemos una amplia
          variedad de productos al por mayor, calidad garantizada y entrega rápida. Somos tu aliado ideal para
          equipar librerias y negocios con los mejores productos del mercado. ¡Haz tu pedido hoy y prepárate
          para una temporada escolar existosa!
        </p>
      </div>
    </header>
  );
}
