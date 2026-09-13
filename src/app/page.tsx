import Image from 'next/image';
import { ArrowDown, ArrowUpRight, CakeSlice, Heart, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { ParallaxComponent } from '@/components/ui/parallax-scrolling';
import { ProductCard } from '@/components/product-card';
import { SectionReveal } from '@/components/section-reveal';
import { SiteHeader } from '@/components/site-header';
import { categories, products } from '@/data/products';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';
const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <ParallaxComponent />

      <section className="intro-band" aria-label="NC Delights values">
        <p><span>01</span> Made in small, thoughtful batches</p>
        <span className="intro-band__dot" aria-hidden="true">✦</span>
        <p><span>02</span> Baked for sharing, gifting, & keeping</p>
        <span className="intro-band__dot" aria-hidden="true">✦</span>
        <p><span>03</span> A little joy in every bite</p>
      </section>

      <section className="featured section-shell" id="featured" aria-labelledby="featured-title">
        <SectionReveal className="section-heading section-heading--wide">
          <p className="eyebrow">The crowd favourites</p>
          <div><h2 id="featured-title">The treats everyone <em>comes back for.</em></h2><p>Sweet, soft, and always made to feel like a small occasion.</p></div>
          <a className="text-link" href="#menu">View full menu <ArrowDown size={16} aria-hidden="true" /></a>
        </SectionReveal>
        <div className="featured-grid">
          {featuredProducts.map((product, index) => <SectionReveal key={product.id} className={index === 0 ? 'featured-grid__lead' : ''}><ProductCard product={product} /></SectionReveal>)}
        </div>
      </section>

      <section className="manifesto" id="story" aria-labelledby="story-title">
        <div className="manifesto__image"><Image src="/assets/products/banana-bread.jpeg" alt="Fresh banana bread loaves being prepared" fill sizes="(max-width: 850px) 100vw, 50vw" /></div>
        <SectionReveal className="manifesto__content">
          <p className="eyebrow">A little bit of home</p>
          <h2 id="story-title">The good stuff is made <em>slowly.</em></h2>
          <p>NC Delights began with the belief that a homemade treat can change the shape of a day. We fold, scoop, bake, and pack every batch with the kind of care you can taste.</p>
          <div className="manifesto__details">
            <div><CakeSlice aria-hidden="true" /><span>Small-batch<br />baking</span></div>
            <div><Heart aria-hidden="true" /><span>Made for<br />sharing</span></div>
            <div><Sparkles aria-hidden="true" /><span>Comfort in<br />every crumb</span></div>
          </div>
        </SectionReveal>
      </section>

      <section className="menu section-shell" id="menu" aria-labelledby="menu-title">
        <SectionReveal className="menu__header">
          <div><p className="eyebrow">From our little kitchen</p><h2 id="menu-title">The full <em>sweet</em> menu.</h2></div>
          <p>Pick a favourite, send us a message, and we&apos;ll take it from there. Availability may vary by bake day.</p>
        </SectionReveal>
        {categories.map((category) => {
          const categoryProducts = products.filter((product) => product.category === category);
          return <div className="menu-category" key={category}>
            <div className="menu-category__label"><span>{category === 'Cookies' ? '01' : category === 'Crinkles' ? '02' : '03'}</span><h3>{category}</h3><span>{categoryProducts.length} treats</span></div>
            <div className="menu-category__grid">{categoryProducts.map((product) => <ProductCard key={product.id} product={product} compact />)}</div>
          </div>;
        })}
      </section>

      <section className="order-cta" aria-labelledby="order-title">
        <div className="order-cta__blossom order-cta__blossom--one" aria-hidden="true" />
        <div className="order-cta__blossom order-cta__blossom--two" aria-hidden="true" />
        <SectionReveal className="order-cta__inner">
          <p className="eyebrow">Your next sweet moment starts here</p>
          <h2 id="order-title">Ready when you <em>are.</em></h2>
          <p>Tell us what you&apos;re craving, when you need it, and who it&apos;s for. We&apos;ll make it feel special.</p>
          <a className="button button--cream" href={messengerUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Order via Messenger <ArrowUpRight size={17} aria-hidden="true" /></a>
        </SectionReveal>
      </section>

      <footer className="site-footer">
        <div className="site-footer__main">
          <div><a className="brand brand--footer" href="#top"><span className="brand__name">NC DELIGHTS</span><span className="brand__sub">sweet treats · est. 2026</span></a><p>Soft moments, thoughtfully baked.</p></div>
          <div className="footer-links"><a href="#featured">Featured</a><a href="#menu">Menu</a><a href="#story">Our kitchen</a></div>
          <div className="footer-contact"><a href={messengerUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> Messenger</a><a href="mailto:ncdelights26@gmail.com"><Mail size={17} aria-hidden="true" /> ncdelights26@gmail.com</a></div>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} NC Delights</span><span>Made with care, for your sweet moments.</span></div>
      </footer>
    </main>
  );
}
