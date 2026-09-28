import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { DISTRIBUTORS } from '../data/productsData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

export default function DistributorsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        '.distributors-header > *',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.distributors-header',
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.1,
          delay: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      // Swiper container reveal
      gsap.fromTo(
        '.distributors-swiper-wrapper',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.distributors-swiper-wrapper',
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
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

  return (
    <section className="section__container feedback__container" id="distribuidores" ref={sectionRef}>
      <div className="distributors-header">
        <h3 className="section__subheader">Nuestros Distribuidores</h3>
        <h2 className="section__header">Distribuidores</h2>
        <p className="section__description">
          Nos enorgullece trabajar junto a distribuidores y librerías de todo el país.
          Descubre lo que opinan sobre su experiencia con Kiruki.
        </p>
      </div>

      <div className="distributors-swiper-wrapper">
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
      </div>
    </section>
  );
}
