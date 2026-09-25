import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function ProductModal({ product, onClose }) {
  const [isParallaxActive, setIsParallaxActive] = useState(true);
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  // GSAP Entrance & Exit animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.modal-content',
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.3)' }
      );
      gsap.fromTo(
        '.modal-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.product-info > *',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.2, ease: 'power3.out' }
      );
    }, modalRef);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      ctx.revert();
    };
  }, [onClose]);

  const handleMouseMove = (e) => {
    if (!isParallaxActive) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (mouseX - centerX) / centerX;
    const moveY = (mouseY - centerY) / centerY;

    if (imageRef.current) {
      const imageTransform = `
        translate(${moveX * 90}px, ${moveY * 90}px) 
        rotateX(${moveY * 35}deg) 
        rotateY(${moveX * 35}deg) 
        scale(${1 + Math.abs(moveX + moveY) * 0.2})
      `;
      imageRef.current.style.transform = `perspective(2500px) ${imageTransform}`;
    }

    const layers = [layer1Ref.current, layer2Ref.current, layer3Ref.current];
    layers.forEach((layer, index) => {
      if (!layer) return;
      const speed = (index + 1) * 2;
      const depth = (index + 1) * 300;
      const x = moveX * 220 * speed;
      const y = moveY * 220 * speed;
      const rotateX = moveY * 45 * speed;
      const rotateY = moveX * 45 * speed;
      const scale = 1 + Math.abs(moveX + moveY) * 0.4;

      layer.style.transform = `
        translate3d(${x}px, ${y}px, ${depth}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `;
    });
  };

  const handleMouseLeave = () => {
    resetTransforms();
  };

  const resetTransforms = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'perspective(2500px)';
    }
    [layer1Ref.current, layer2Ref.current, layer3Ref.current].forEach(layer => {
      if (layer) {
        layer.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1)';
      }
    });
  };

  const pauseParallax = () => {
    setIsParallaxActive(false);
    resetTransforms();
  };

  const resumeParallax = () => {
    setIsParallaxActive(true);
  };

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(`¡Hola! Quisiera consultar precios y disponibilidad al por mayor del producto: ${product.title}`);
  const whatsappUrl = `https://wa.me/5491136286592?text=${whatsappMessage}`;

  return (
    <div className="modal-parallax active" id="modalParallax" ref={modalRef}>
      <div
        className="modal-overlay"
        id="modalOverlay"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          if (e.target.id === 'modalOverlay') onClose();
        }}
      >
        <div className="modal-content">
          <button
            className="modal-close"
            id="modalClose"
            onClick={onClose}
            onMouseEnter={pauseParallax}
            onMouseLeave={resumeParallax}
            aria-label="Cerrar modal"
          >
            <i className="ri-close-line"></i>
          </button>
          <div className="parallax-container">
            <div className="parallax-image" id="parallaxImage" ref={imageRef}>
              <img src={product.src} alt={product.title} id="modalProductImage" />
            </div>
            <div className="parallax-layers">
              <div className="parallax-layer layer-1" ref={layer1Ref}></div>
              <div className="parallax-layer layer-2" ref={layer2Ref}></div>
              <div className="parallax-layer layer-3" ref={layer3Ref}></div>
            </div>
          </div>
          <div className="product-info">
            {product.categoryLabel && (
              <span className="modal-category-badge">{product.categoryLabel}</span>
            )}
            <h3
              id="modalProductTitle"
              onMouseEnter={pauseParallax}
              onMouseLeave={resumeParallax}
            >
              {product.title}
            </h3>
            <p
              id="modalProductDescription"
              onMouseEnter={pauseParallax}
              onMouseLeave={resumeParallax}
            >
              Descubre la calidad profesional y elegancia de <strong>{product.title}</strong>. Formulado por Kiruki para garantizar máximo rendimiento, colores vivos y durabilidad extrema en cada uso.
            </p>
            <div className="modal-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-modal"
                onMouseEnter={pauseParallax}
                onMouseLeave={resumeParallax}
              >
                <span><i className="ri-whatsapp-line"></i></span>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
