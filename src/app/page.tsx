import Image from 'next/image';
import { ArrowUpRight, CakeSlice, Heart, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { ParallaxComponent } from '@/components/ui/parallax-scrolling';
import { FeaturedScroll } from '@/components/featured-scroll';
import { CookieHandoff } from '@/components/cookie-handoff';
import { ImageStreamSection } from '@/components/image-stream-section';
import { MenuGallery } from '@/components/menu-gallery';
import { OrderSeal } from '@/components/order-seal';
import { SectionReveal } from '@/components/section-reveal';
import { SiteHeader } from '@/components/site-header';
import { SocialSection } from '@/components/social-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { categories, products } from '@/data/products';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';
const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <OrderSeal />
      <ParallaxComponent />

      <FeaturedScroll products={featuredProducts} />
      <TestimonialsSection />
      <ImageStreamSection />

      <section className="manifesto" id="story" aria-labelledby="story-title">
        <div className="manifesto__image"><Image src="/assets/products/banana-bread.jpeg" alt="Fresh banana bread loaves being prepared" fill sizes="(max-width: 850px) 100vw, 50vw" /></div>
        <SectionReveal className="manifesto__content">
          <h2 id="story-title">The good stuff is made <em>slowly.</em></h2>
          <p>NC Delights began with the belief that a homemade treat can change the shape of a day. We fold, scoop, bake, and pack every batch with the kind of care you can taste.</p>
          <div className="manifesto__details">
            <div><CakeSlice aria-hidden="true" /><span>Small-batch<br />baking</span></div>
            <div><Heart aria-hidden="true" /><span>Made for<br />sharing</span></div>
            <div><Sparkles aria-hidden="true" /><span>Comfort in<br />every crumb</span></div>
          </div>
        </SectionReveal>
      </section>

      <CookieHandoff />
      <MenuGallery products={products} categories={categories} />
      <SocialSection />

      <section className="order-cta" aria-labelledby="order-title">
        <div className="order-cta__blossom order-cta__blossom--one" aria-hidden="true" />
        <div className="order-cta__blossom order-cta__blossom--two" aria-hidden="true" />
        <SectionReveal className="order-cta__inner">
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
