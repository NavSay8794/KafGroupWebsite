'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CoverImage {
  id: number;
  src: string;
  alt: string;
}

const coverImages: CoverImage[] = [
  {
    id: 1,
    src: '/images/Cover.jpeg',
    alt: 'KAF Groups Premium Produce - Cover 1',
  },
  {
    id: 2,
    src: '/images/Cover4.jpeg',
    alt: 'KAF Groups Premium Produce - Cover 4',
  },
  {
    id: 3,
    src: '/images/Cover5.jpeg',
    alt: 'KAF Groups Premium Produce - Cover 5',
  },
];

export default function CoverCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % coverImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-cover-section">
      <div className="hero-cover-wrapper">
        <Image
          src={coverImages[currentIndex].src}
          alt={coverImages[currentIndex].alt}
          width={1200}
          height={400}
          priority
          quality={90}
          className="cover-image"
        />
      </div>
      <div className="carousel-indicators">
        {coverImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
