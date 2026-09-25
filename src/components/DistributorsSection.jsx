import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { DISTRIBUTORS } from '../data/productsData';

import 'swiper/css';
import 'swiper/css/pagination';

export default function DistributorsSection() {
  return (
    <section className="section__container feedback__container" id="distribuidores">
      <h3 className="section__subheader">Nuestros Distribuidores</h3>
      <h2 className="section__header">Distribuidores</h2>
      <p className="section__description">
        Nos enorgullece trabajar junto a distribuidores y librerías de todo el país.
        Descubre lo que opinan sobre su experiencia con Kiruki.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
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
        }}
        className="swiper"
      >
        {DISTRIBUTORS.map((d) => (
          <SwiperSlide key={d.id}>
            <div className="feedback__card">
              <p className="section__description">{d.comment}</p>
              <div className="feedback__details">
                <div className="feedback__user">
                  <img src={d.image} alt={d.user} />
                  <div>
                    <h4>{d.user}</h4>
                    <h5>{d.role}</h5>
                  </div>
                </div>
                <div className="feedback__rating">
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
