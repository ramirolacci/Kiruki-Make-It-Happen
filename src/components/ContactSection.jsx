import React from 'react';

export default function ContactSection() {
  return (
    <section className="section__container banner__container" id="contacto">
      <h2 className="section__header">Contáctanos</h2>
      <div className="feature__grid">
        <div className="feature__card">
          <span><i className="ri-whatsapp-line"></i></span>
          <h3 className="section__subheader">Envíanos un mensaje o llamanos para cualquier consulta.</h3>
          <a href="https://wa.link/yhjsgp" target="_blank" rel="noopener noreferrer">Enviar</a>
        </div>
        <div className="feature__card">
          <span><i className="ri-mail-line"></i></span>
          <h3 className="section__subheader">Envíanos un correo para más detalles.</h3>
          <a href="mailto:ventas@kiruki.com.ar">ventas@kiruki.com.ar</a>
        </div>
        <div className="feature__card">
          <span><i className="ri-instagram-line"></i></span>
          <h3 className="section__subheader">Síguenos para estar al tanto de las novedades.</h3>
          <a href="https://www.instagram.com/kiruki_arg/?igsh=MWdlMXU3OXJieDNoNQ%3D%3D#" target="_blank" rel="noopener noreferrer">@kiruki_arg</a>
        </div>
      </div>
    </section>
  );
}
