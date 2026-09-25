import React, { useState, useMemo } from 'react';
import { CATEGORIES, CAROUSEL_WRAPPER_1, CAROUSEL_WRAPPER_2, PRODUCTS_BY_CATEGORY } from '../data/productsData';
import ProductModal from './ProductModal';

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Calculate product counts per category
  const categoryCounts = useMemo(() => {
    const counts = { todos: PRODUCTS_BY_CATEGORY.length };
    CATEGORIES.forEach(cat => {
      if (cat.id !== 'todos') {
        counts[cat.id] = PRODUCTS_BY_CATEGORY.filter(p => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filter products by category AND search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_BY_CATEGORY.filter((p) => {
      const matchesCategory = activeCategory === 'todos' || p.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = query === '' ||
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.src.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
  };

  // Repeated items for smooth infinite marquee carousel when "todos" is active and no search query
  const isDefaultView = activeCategory === 'todos' && searchQuery.trim() === '';
  const repeatedCarousel1 = [...CAROUSEL_WRAPPER_1, ...CAROUSEL_WRAPPER_1, ...CAROUSEL_WRAPPER_1, ...CAROUSEL_WRAPPER_1];
  const repeatedCarousel2 = [...CAROUSEL_WRAPPER_2, ...CAROUSEL_WRAPPER_2, ...CAROUSEL_WRAPPER_2, ...CAROUSEL_WRAPPER_2];

  const getCategoryLabel = (catId) => {
    const cat = CATEGORIES.find(c => c.id === catId);
    return cat ? cat.label : catId;
  };

  return (
    <section className="product__container" id="productos">
      <div className="product__header-content">
        <h3 className="section__subheader">Catálogo 2025</h3>
        <h2 className="section__header">Nuestros productos</h2>
        <p className="section__description">
          Explora nuestra exclusiva línea de productos escolares y de oficina, diseñados para ofrecer rendimiento superior y estilo sin igual. 
          Encuentra la solución ideal para equipar tu negocio con la garantía Kiruki.
        </p>
      </div>

      {/* Modern Search Bar */}
      <div className="product__search-bar">
        <div className="search-input-wrapper">
          <i className="ri-search-line search-icon"></i>
          <input
            type="text"
            placeholder="Buscar por código, nombre o categoría (ej: 800001, pasteles, gomas)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Limpiar búsqueda"
            >
              <i className="ri-close-circle-fill"></i>
            </button>
          )}
        </div>
        {searchQuery.trim() !== '' && (
          <div className="search-results-badge">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
          </div>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="product__filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter__btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            <span>{cat.label}</span>
            <span className="filter__count">{categoryCounts[cat.id] || 0}</span>
          </button>
        ))}
      </div>

      {/* Carousels for default 'Todos' view when no search term is entered */}
      {isDefaultView ? (
        <div className="product__carousels" id="product-carousels">
          <div className="product__wrapper-1">
            <div className="product__images">
              {repeatedCarousel1.map((item, idx) => (
                <div
                  key={`c1-${idx}`}
                  className="carousel__item"
                  onClick={() => setSelectedProduct({ src: item.src, title: item.alt, categoryLabel: 'Kiruki Highlights' })}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="carousel__overlay">
                    <span><i className="ri-eye-line"></i> Ver 3D</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="product__wrapper-2">
            <div className="product__images">
              {repeatedCarousel2.map((item, idx) => (
                <div
                  key={`c2-${idx}`}
                  className="carousel__item"
                  onClick={() => setSelectedProduct({ src: item.src, title: item.alt, categoryLabel: 'Kiruki Highlights' })}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="carousel__overlay">
                    <span><i className="ri-eye-line"></i> Ver 3D</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Cards container for category or search results */
        <div className="product__cards-container" id="product-cards">
          {filteredProducts.length > 0 ? (
            <div className="product__cards-grid" data-category={activeCategory}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product__card"
                  data-category={product.category}
                  onClick={() => setSelectedProduct({
                    src: product.src,
                    title: product.title,
                    categoryLabel: getCategoryLabel(product.category)
                  })}
                >
                  <div className="product__card-badge">
                    {getCategoryLabel(product.category)}
                  </div>
                  <div className="product__card-img-wrapper">
                    <img src={product.src} alt={product.title} loading="lazy" />
                    <div className="product__card-overlay">
                      <span className="btn-view-3d">
                        <i className="ri-eye-line"></i> Vista 3D
                      </span>
                    </div>
                  </div>
                  <div className="product__card-content">
                    <h3>{product.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products-found">
              <i className="ri-search-eye-line no-products-icon"></i>
              <h3>No encontramos productos coincidentes</h3>
              <p>Intenta buscando con otro término o selecciona la categoría "Todos".</p>
              <button
                className="btn btn-reset-search"
                onClick={() => { setActiveCategory('todos'); setSearchQuery(''); }}
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3D Parallax Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
