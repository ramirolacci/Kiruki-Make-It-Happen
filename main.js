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

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});

// Funcionalidad de filtros de productos
const filterButtons = document.querySelectorAll('.filter__btn');
const productImages = document.querySelectorAll('.product__images img');

// Función para filtrar productos
function filterProducts(category) {
    // Remover clase active de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Agregar clase active al botón clickeado
    event.target.closest('.filter__btn').classList.add('active');
    
    // Aquí puedes agregar la lógica específica de filtrado
    // Por ahora, solo mostraremos un mensaje en consola
    console.log(`Filtro seleccionado: ${category}`);
    
    // Ejemplo de animación para los productos
    productImages.forEach(img => {
        img.style.transition = 'all 0.3s ease';
        if (category === 'todos') {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        } else {
            // Simular filtrado (en un proyecto real, aquí filtrarías por categoría)
            img.style.opacity = '0.7';
            img.style.transform = 'scale(0.95)';
        }
    });
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
