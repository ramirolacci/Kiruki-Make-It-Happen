import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.banner__header > *',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.banner__header',
            start: 'top 90%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      // Feature cards staggered reveal
      gsap.fromTo(
        '.feature__card',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.feature__grid',
            start: 'top 90%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );
    }, sectionRef);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('ventas@kiruki.com.ar');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="section__container banner__container" id="contacto" ref={sectionRef}>
      <div className="banner__header">
        <h3 className="section__subheader">¿Hablamos?</h3>
        <h2 className="section__header">Contáctanos</h2>
        <p className="section__description">
          Estamos listos para atender tus pedidos al por mayor, resolver consultas y acompañar a tu negocio.
        </p>
      </div>

      <div className="feature__grid">
        <div className="feature__card feature__card-whatsapp">
          <div className="feature__card-icon">
            <i className="ri-whatsapp-line"></i>
          </div>
          <h3 className="section__subheader">WhatsApp Mayorista</h3>
          <p className="feature__card-desc">Envíanos un mensaje o llámanos para atención personalizada.</p>
          <a
            href="https://wa.me/5491136286592?text=Hola!%20Quisiera%20recibir%20informaci%C3%B3n%20sobre%20ventas%20al%20por%20mayor."
            target="_blank"
            rel="noopener noreferrer"
            className="feature__btn feature__btn-wa"
          >
            Iniciar Chat <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="feature__card feature__card-email">
          <div className="feature__card-icon">
            <i className="ri-mail-line"></i>
          </div>
          <h3 className="section__subheader">Correo Electrónico</h3>
          <p className="feature__card-desc">ventas@kiruki.com.ar</p>
          <div className="email-actions">
            <a href="mailto:ventas@kiruki.com.ar" className="feature__btn feature__btn-email">
              Enviar Email <i className="ri-mail-send-line"></i>
            </a>
            <button
              onClick={handleCopyEmail}
              className={`feature__btn-copy ${copied ? 'copied' : ''}`}
              title="Copiar email"
            >
              {copied ? <><i className="ri-check-line"></i> ¡Copiado!</> : <><i className="ri-file-copy-line"></i> Copiar</>}
            </button>
          </div>
        </div>

        <div className="feature__card feature__card-instagram">
          <div className="feature__card-icon">
            <i className="ri-instagram-line"></i>
          </div>
          <h3 className="section__subheader">Instagram Oficial</h3>
          <p className="feature__card-desc">@kiruki_arg</p>
          <a
            href="https://www.instagram.com/kiruki_arg/"
            target="_blank"
            rel="noopener noreferrer"
            className="feature__btn feature__btn-ig"
          >
            Seguir en Instagram <i className="ri-instagram-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
