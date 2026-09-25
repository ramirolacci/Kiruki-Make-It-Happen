import React from 'react';

export default function AboutSection() {
  return (
    <section className="section__container about__container" id="nosotros">
      <div className="about__image">
        <img src="/assets/about.jpg" alt="about" />
      </div>
      <div className="about__content">
        <h3 className="section__subheader">SOBRE NOSOTROS</h3>
        <h2 className="section__header">¿Quiénes somos?</h2>
        <p className="section__description">
          En Kiruki nos apasiona crear herramientas escolares y de oficina que inspiran imaginación,
          color y creatividad. Con años de trayectoria distribuyendo productos de primera calidad, nos dedicamos
          a acompañar a librerías y comercios en todo el país con atención cercana y entregas rápidas.
        </p>
        <p className="section__description">
          Nuestra misión es hacer que cada trazo cuente, ofreciendo una amplia paleta de colores, diseños
          ergonómicos y materiales confiables que llenan de alegría cada momento de aprendizaje y arte.
        </p>
      </div>
    </section>
  );
}
