const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000, 
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".product__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".product__container .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".product__container .section__description", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});
ScrollReveal().reveal(".product__wrapper-1 .product__images img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".product__wrapper-2 .product__images img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

const product1 = document.querySelector(".product__wrapper-1 .product__images");
const product2 = document.querySelector(".product__wrapper-2 .product__images");

const product1Content = Array.from(product1.children);
const product2Content = Array.from(product2.children);

// Duplicar las imágenes múltiples veces para un carrusel verdaderamente infinito
for (let i = 0; i < 3; i++) {
    product1Content.forEach((item) => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", true);
        product1.appendChild(duplicateNode);
    });
}

for (let i = 0; i < 3; i++) {
    product2Content.forEach((item) => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", true);
        product2.appendChild(duplicateNode);
    });
}

ScrollReveal().reveal(".feedback__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".feedback__container .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".feedback__container .section__description", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});
ScrollReveal().reveal(".feedback__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".banner__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__container .feature__card", {
    ...scrollRevealOption,
    interval: 500,
});

// Configuración del Swiper para distribuidores
const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

// Funcionalidad de filtros de productos
const filterButtons = document.querySelectorAll('.filter__btn');
const productCarousels = document.getElementById('product-carousels');
const productCards = document.getElementById('product-cards');
const productCardsGrid = document.querySelector('.product__cards-grid');

// Función para filtrar productos
function filterProducts(category) {
    // Remover clase active de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Agregar clase active al botón clickeado
    event.target.closest('.filter__btn').classList.add('active');
    
    // Mostrar/ocultar contenedores según el filtro
    if (category === 'todos') {
        // Mostrar carruseles, ocultar cards
        productCarousels.style.display = 'block';
        productCards.style.display = 'none';
        
        // Reiniciar animaciones de carruseles
        const productImages = document.querySelectorAll('.product__images');
        productImages.forEach(container => {
            container.style.animation = 'none';
            setTimeout(() => {
                container.style.animation = '';
            }, 10);
        });
    } else {
        // Ocultar carruseles, mostrar cards
        productCarousels.style.display = 'none';
        productCards.style.display = 'block';
        
        // Configurar el contenedor según la categoría
        const productCardsGrid = document.querySelector('.product__cards-grid');
        if (category === 'crayones') {
            productCardsGrid.setAttribute('data-category', 'crayones');
        } else if (category === 'pasteles') {
            productCardsGrid.setAttribute('data-category', 'pasteles');
        } else if (category === 'acuarelas') {
            productCardsGrid.setAttribute('data-category', 'acuarelas');
        } else if (category === 'lapices-colores') {
            productCardsGrid.setAttribute('data-category', 'lapices-colores');
        } else if (category === 'lapices-grafito') {
            productCardsGrid.setAttribute('data-category', 'lapices-grafito');
        } else if (category === 'marcadores') {
            productCardsGrid.setAttribute('data-category', 'marcadores');
        } else if (category === 'rollers-gel') {
            productCardsGrid.setAttribute('data-category', 'rollers-gel');
        } else if (category === 'rollers-borrables') {
            productCardsGrid.setAttribute('data-category', 'rollers-borrables');
        } else if (category === 'gomas') {
            productCardsGrid.setAttribute('data-category', 'gomas');
        } else if (category === 'sacapuntas') {
            productCardsGrid.setAttribute('data-category', 'sacapuntas');
        } else if (category === 'tijeras-escolares') {
            productCardsGrid.setAttribute('data-category', 'tijeras-escolares');
        } else if (category === 'tijeras') {
            productCardsGrid.setAttribute('data-category', 'tijeras');
        } else if (category === 'adhesivo') {
            productCardsGrid.setAttribute('data-category', 'adhesivo');
        } else if (category === 'boligrafos') {
            productCardsGrid.setAttribute('data-category', 'boligrafos');
        } else if (category === 'microfibras') {
            productCardsGrid.setAttribute('data-category', 'microfibras');
        } else {
            productCardsGrid.removeAttribute('data-category');
        }
        
        // Filtrar cards por categoría
        const allCards = document.querySelectorAll('.product__card');
        allCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    console.log(`Filtro seleccionado: ${category}`);
}

// Agregar event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = button.getAttribute('data-filter');
        filterProducts(filter);
    });
});

// Animación para los filtros
ScrollReveal().reveal(".product__filters", {
    ...scrollRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".filter__btn", {
    ...scrollRevealOption,
    delay: 2200,
    interval: 100,
});

// Mejorar la experiencia táctil en móviles
document.addEventListener('DOMContentLoaded', function() {
    // Prevenir zoom en inputs en iOS
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.fontSize = '16px';
    });
    
    // Mejorar scroll suave en móviles
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajustar para el nav fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Modal con efecto Parallax
const modalParallax = document.getElementById('modalParallax');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductTitle = document.getElementById('modalProductTitle');
const modalProductDescription = document.getElementById('modalProductDescription');
const parallaxImage = document.getElementById('parallaxImage');
const parallaxLayers = document.querySelectorAll('.parallax-layer');

// Función para abrir el modal
function openModal(imageSrc, imageAlt) {
    modalProductImage.src = imageSrc;
    modalProductImage.alt = imageAlt;
    modalProductTitle.textContent = imageAlt;
    modalProductDescription.textContent = `Descubre la calidad y creatividad de ${imageAlt}. Producto Kiruki diseñado para inspirar tu imaginación.`;
    
    modalParallax.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Iniciar efecto parallax
    startParallaxEffect();
}

// Función para cerrar el modal
function closeModal() {
    modalParallax.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Detener efecto parallax
    stopParallaxEffect();
}

// Función para iniciar el efecto parallax
function startParallaxEffect() {
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let isParallaxActive = true; // Variable para controlar si el parallax está activo
    
    const handleMouseMove = (e) => {
        // Solo aplicar parallax si está activo
        if (!isParallaxActive) return;
        
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMoving = true;
        
        // Calcular el movimiento parallax con valores extremadamente exagerados
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (mouseX - centerX) / centerX;
        const moveY = (mouseY - centerY) / centerY;
        
        // Aplicar transformaciones 3D extremadamente exageradas SOLO a la imagen principal
        // Ahora la imagen está posicionada a la izquierda, no centrada
        const imageTransform = `
            translate(${moveX * 120}px, ${moveY * 120}px) 
            rotateX(${moveY * 45}deg) 
            rotateY(${moveX * 45}deg) 
            scale(${1 + Math.abs(moveX + moveY) * 0.3})
        `;
        parallaxImage.style.transform = `perspective(3000px) ${imageTransform}`;
        
        // Aplicar transformaciones 3D extremadamente dramáticas SOLO a las capas de fondo
        parallaxLayers.forEach((layer, index) => {
            const speed = (index + 1) * 2.5; // Velocidad extremadamente alta
            const depth = (index + 1) * 400; // Profundidad 3D extremadamente exagerada
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
        isMoving = false;
        // Resetear posiciones SOLO de la imagen y capas
        parallaxImage.style.transform = 'perspective(3000px)';
        parallaxLayers.forEach(layer => {
            layer.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    };
    
    // Función para pausar el parallax cuando el mouse está sobre el texto
    const pauseParallax = () => {
        isParallaxActive = false;
        // Resetear posiciones cuando se pausa
        parallaxImage.style.transform = 'perspective(3000px)';
        parallaxLayers.forEach(layer => {
            layer.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    };
    
    // Función para reanudar el parallax cuando el mouse sale del texto
    const resumeParallax = () => {
        isParallaxActive = true;
    };
    
    // Agregar event listeners al overlay principal
    modalOverlay.addEventListener('mousemove', handleMouseMove);
    modalOverlay.addEventListener('mouseleave', handleMouseLeave);
    
    // Agregar event listeners al título del producto para pausar parallax
    modalProductTitle.addEventListener('mouseenter', pauseParallax);
    modalProductTitle.addEventListener('mouseleave', resumeParallax);
    
    // Agregar event listeners a la descripción del producto para pausar parallax
    modalProductDescription.addEventListener('mouseenter', pauseParallax);
    modalProductDescription.addEventListener('mouseleave', resumeParallax);
    
    // Agregar event listeners al botón de cerrar para pausar parallax
    modalClose.addEventListener('mouseenter', pauseParallax);
    modalClose.addEventListener('mouseleave', resumeParallax);
    
    // Guardar referencias para poder remover los listeners
    modalOverlay._handleMouseMove = handleMouseMove;
    modalOverlay._handleMouseLeave = handleMouseLeave;
    modalProductTitle._pauseParallax = pauseParallax;
    modalProductTitle._resumeParallax = resumeParallax;
    modalProductDescription._pauseParallax = pauseParallax;
    modalProductDescription._resumeParallax = resumeParallax;
    modalClose._pauseParallax = pauseParallax;
    modalClose._resumeParallax = resumeParallax;
}

// Función para detener el efecto parallax
function stopParallaxEffect() {
    if (modalOverlay._handleMouseMove) {
        modalOverlay.removeEventListener('mousemove', modalOverlay._handleMouseMove);
        modalOverlay.removeEventListener('mouseleave', modalOverlay._handleMouseLeave);
        delete modalOverlay._handleMouseMove;
        delete modalOverlay._handleMouseLeave;
    }
    
    // Remover event listeners del título del producto
    if (modalProductTitle._pauseParallax) {
        modalProductTitle.removeEventListener('mouseenter', modalProductTitle._pauseParallax);
        modalProductTitle.removeEventListener('mouseleave', modalProductTitle._resumeParallax);
        delete modalProductTitle._pauseParallax;
        delete modalProductTitle._resumeParallax;
    }
    
    // Remover event listeners de la descripción del producto
    if (modalProductDescription._pauseParallax) {
        modalProductDescription.removeEventListener('mouseenter', modalProductDescription._pauseParallax);
        modalProductDescription.removeEventListener('mouseleave', modalProductDescription._resumeParallax);
        delete modalProductDescription._pauseParallax;
        delete modalProductDescription._resumeParallax;
    }
    
    // Remover event listeners del botón de cerrar
    if (modalClose._pauseParallax) {
        modalClose.removeEventListener('mouseenter', modalClose._pauseParallax);
        modalClose.removeEventListener('mouseleave', modalClose._resumeParallax);
        delete modalClose._pauseParallax;
        delete modalClose._resumeParallax;
    }
    
    // Resetear transformaciones 3D SOLO de la imagen y capas
    parallaxImage.style.transform = 'perspective(3000px)';
    parallaxLayers.forEach(layer => {
        layer.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1)';
    });
}

// Event listeners para el modal
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalParallax.classList.contains('active')) {
        closeModal();
    }
});

// Agregar event listeners a todas las cards de productos
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product__card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                openModal(img.src, img.alt);
            }
        });
        
        // Agregar cursor pointer para indicar que es clickeable
        card.style.cursor = 'pointer';
    });
});
