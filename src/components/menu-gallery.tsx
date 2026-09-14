'use client';

import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Product, ProductCategory } from '@/data/products';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';

export function MenuGallery({ products, categories }: { products: Product[]; categories: ProductCategory[] }) {
  const [selected, setSelected] = useState('');
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (highlightTimer.current) clearTimeout(highlightTimer.current);
  }, []);

  const showTreat = (id: string) => {
    setSelected(id);
    const target = document.getElementById(`treat-${id}`);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
    window.history.replaceState(null, '', `#treat-${id}`);
    if (highlightTimer.current) clearTimeout(highlightTimer.current);
    highlightTimer.current = setTimeout(() => setSelected(''), 3200);
  };

  return (
    <section className="catalog" id="menu" aria-labelledby="menu-title">
      <div className="catalog__cutout catalog__cutout--one" aria-hidden="true"><Image src="/assets/products/cookie-cutout-final.png" alt="" fill sizes="360px" /></div>
      <div className="catalog__cutout catalog__cutout--two" aria-hidden="true"><Image src="/assets/products/cookie-cutout-final.png" alt="" fill sizes="280px" /></div>
      <header className="catalog__header section-shell">
        <h2 id="menu-title">Price list.</h2>
      </header>

      <div className="price-board section-shell" aria-label="NC Delights price list">
        {categories.map((category) => (
          <div className="price-board__group" key={category}>
            <h3>{category}</h3>
            <div>
              {products.filter((product) => product.category === category).map((product) => (
                <button type="button" className={selected === product.id ? 'price-row price-row--active' : 'price-row'} key={product.id} onClick={() => showTreat(product.id)}>
                  <span className="price-row__topline"><strong>{product.name}</strong><ArrowDownRight aria-hidden="true" /></span>
                  <span className="price-row__values">
                    {product.prices.map((price) => <span key={price.label}><span>{price.label}</span><i aria-hidden="true" /><strong>{price.value}</strong></span>)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="treat-gallery section-shell" aria-label="Baked goods gallery">
        {products.map((product, index) => (
          <article id={`treat-${product.id}`} className={selected === product.id ? `treat-shot treat-shot--${(index % 4) + 1} treat-shot--selected` : `treat-shot treat-shot--${(index % 4) + 1}`} key={product.id} tabIndex={-1}>
            <div className="treat-shot__image"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 720px) 92vw, (max-width: 960px) 47vw, 31vw" /></div>
            <div className="treat-shot__caption">
              <div><h3>{product.name}</h3><p>{product.description}</p></div>
              <a href={messengerUrl} target="_blank" rel="noreferrer" aria-label={`Order ${product.name} through Messenger`}><MessageCircle aria-hidden="true" /> <span>Order</span> <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <span className="treat-shot__marker" aria-hidden="true">This one</span>
          </article>
        ))}
      </div>
    </section>
  );
}
