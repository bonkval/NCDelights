import Image from 'next/image';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import type { Product } from '@/data/products';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <article className={compact ? 'product-card product-card--compact' : 'product-card'}>
      <div className="product-card__image-wrap">
        <Image className="product-card__image" src={product.image} alt={product.imageAlt} fill sizes="(max-width: 720px) 94vw, (max-width: 1100px) 47vw, 31vw" />
        {product.badge ? <span className={product.badge === 'New' ? 'product-badge product-badge--new' : 'product-badge'}>{product.badge}</span> : null}
        <span className="product-card__category">{product.category}</span>
      </div>
      <div className="product-card__body">
        <div className="product-card__title-row">
          <h3>{product.name}</h3>
          <a href={messengerUrl} target="_blank" rel="noreferrer" aria-label={`Order ${product.name} via Messenger`}><ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
        <p>{product.description}</p>
        <div className="price-list">
          {product.prices.map((price) => <div key={price.label}><span>{price.label}</span><strong>{price.value}</strong></div>)}
        </div>
        {product.note ? <p className="product-card__note">{product.note}</p> : null}
        {!compact ? <a className="product-card__order" href={messengerUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} aria-hidden="true" /> Order this treat</a> : null}
      </div>
    </article>
  );
}
