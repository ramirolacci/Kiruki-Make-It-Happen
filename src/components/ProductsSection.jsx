import React, { useState } from 'react';
import { CATEGORIES, CAROUSEL_WRAPPER_1, CAROUSEL_WRAPPER_2, PRODUCTS_BY_CATEGORY } from '../data/productsData';
import ProductModal from './ProductModal';

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
  };

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS_BY_CATEGORY
    : PRODUCTS_BY_CATEGORY.filter(p => p.category === activeCategory);

  // Repeat carousel items 4 times for infinite scrolling effect
  const repeatedCarousel1 = [...CAROUSEL_WRAPPER_1, ...CAROUSEL_WRAPPER_1, ...CAROUSEL_WRAPPER_1, ...CAROUSEL_WRAPPER_1];
  const repeatedCarousel2 = [...CAROUSEL_WRAPPER_2, ...CAROUSEL_WRAPPER_2, ...CAROUSEL_WRAPPER_2, ...CAROUSEL_WRAPPER_2];

  return (
    <section className="product__container" id="productos">
      <h3 className="section__subheader">Productos</h3>
      <h2 className="section__header">Nuestros productos</h2>
      <p className="section__description">
        Explora nuestra exclusiva colección de productos de lujo, diseñados para ofrecer estilo y
        rendimiento sin igual. Desde elegantes bolgrafos hasta gomas de borrar, nuestra colección es
        perfecta para cada ocasión, garantizando una experiencia premium.
      </p>

      {/* Filter Buttons */}
      <div className="product__filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter__btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Carousels for 'Todos' view */}
      {activeCategory === 'todos' ? (
        <div className="product__carousels" id="product-carousels">
          <div className="product__wrapper-1">
            <div className="product__images">
              {repeatedCarousel1.map((item, idx) => (
                <img
                  key={`c1-${idx}`}
                  src={item.src}
                  alt={item.alt}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedProduct({ src: item.src, title: item.alt })}
                />
              ))}
            </div>
          </div>
          <div className="product__wrapper-2">
            <div className="product__images">
              {repeatedCarousel2.map((item, idx) => (
                <img
                  key={`c2-${idx}`}
                  src={item.src}
                  alt={item.alt}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedProduct({ src: item.src, title: item.alt })}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Cards container for specific categories */
        <div className="product__cards-container" id="product-cards">
          <div className="product__cards-grid" data-category={activeCategory}>
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id || idx}
                className="product__card"
                data-category={product.category}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedProduct({ src: product.src, title: product.title })}
              >
                <img src={product.src} alt={product.title} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
