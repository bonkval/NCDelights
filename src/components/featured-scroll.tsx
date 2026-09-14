'use client';

import Image from 'next/image';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Product } from '@/data/products';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';

export function FeaturedScroll({ products }: { products: Product[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || window.innerWidth <= 960 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.9,
          invalidateOnRefresh: true,
        },
      });
      ScrollTrigger.refresh();
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section className="featured-story" id="featured" ref={sectionRef} aria-labelledby="featured-title">
      <div className="featured-story__track" ref={trackRef}>
        <header className="featured-story__intro">
          <h2 id="featured-title">Meet the bakes people ask for again.</h2>
          <p>Four favourites, each given room to be noticed.</p>
        </header>
        {products.map((product, index) => (
          <article className={`feature-scene feature-scene--${index + 1}`} key={product.id}>
            <div className="feature-scene__image">
              <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 899px) 92vw, 58vw" />
            </div>
            <div className="feature-scene__copy">
              <span className="feature-scene__name">{product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="feature-scene__bottom">
                <div>{product.prices.map((price) => <span key={price.label}>{price.label} <strong>{price.value}</strong></span>)}</div>
                <a href={messengerUrl} target="_blank" rel="noreferrer" aria-label={`Order ${product.name} via Messenger`}><MessageCircle size={17} aria-hidden="true" /> Order <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
