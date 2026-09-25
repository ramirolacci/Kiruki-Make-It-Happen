import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image entrance parallax
      gsap.from('.about__image img', {
        scrollTrigger: {
          trigger: '.about__image',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Content staggered entrance
      gsap.from('.about__content > *', {
        scrollTrigger: {
          trigger: '.about__content',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section__container about__container" id="nosotros" ref={sectionRef}>
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
