import React, { useEffect, useRef, useState } from 'react';

export default function ProductModal({ product, onClose }) {
  const [isParallaxActive, setIsParallaxActive] = useState(true);
  const imageRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  useEffect(() => {
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
        translate(${moveX * 120}px, ${moveY * 120}px) 
        rotateX(${moveY * 45}deg) 
        rotateY(${moveX * 45}deg) 
        scale(${1 + Math.abs(moveX + moveY) * 0.3})
      `;
      imageRef.current.style.transform = `perspective(3000px) ${imageTransform}`;
    }

    const layers = [layer1Ref.current, layer2Ref.current, layer3Ref.current];
    layers.forEach((layer, index) => {
      if (!layer) return;
      const speed = (index + 1) * 2.5;
      const depth = (index + 1) * 400;
      const x = moveX * 300 * speed;
      const y = moveY * 300 * speed;
      const rotateX = moveY * 60 * speed;
      const rotateY = moveX * 60 * speed;
      const scale = 1 + Math.abs(moveX + moveY) * 0.5;

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
      imageRef.current.style.transform = 'perspective(3000px)';
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

  return (
    <div className="modal-parallax active" id="modalParallax">
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
          >
            &times;
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
              {`Descubre la calidad y creatividad de ${product.title}. Producto Kiruki diseñado para inspirar tu imaginación.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
