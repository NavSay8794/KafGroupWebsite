'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Bananas',
    image: '/images/bananas.jpeg',
  },
  {
    id: 2,
    name: 'Drumsticks',
    image: '/images/drumsticks.jpeg',
  },
  {
    id: 3,
    name: 'Green Chillies',
    image: '/images/greenchillies.webp',
  },
  {
    id: 4,
    name: 'Husk Coconut',
    image: '/images/huskCoconut.jpg',
  },
  {
    id: 5,
    name: 'Fresh Onions',
    image: '/images/onions.jpg',
  },
  {
    id: 6,
    name: 'Pomegranate',
    image: '/images/pomegranate.jpeg',
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <h2>Our Premium Product Range</h2>
        <p className="carousel-subtitle">High-quality fresh produce sourced daily</p>

        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious} aria-label="Previous product">
            ‹
          </button>

          <div className="carousel-slide">
            <div className="carousel-image-wrapper">
              <Image
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                fill
                sizes="(max-width: 720px) 100vw, 380px"
                priority
                quality={90}
                className="carousel-image"
              />
            </div>
            <h3 className="carousel-title">{products[currentIndex].name}</h3>
          </div>

          <button className="carousel-btn carousel-btn-next" onClick={goToNext} aria-label="Next product">
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>

        <button className="carousel-autoplay-toggle" onClick={() => setIsAutoPlay(!isAutoPlay)}>
          {isAutoPlay ? '⏸' : '▶'}
        </button>
      </div>
    </section>
  );
}
