import { ImageStreamHero } from '@/components/ui/image-stream-hero';

const images = [
  '/assets/products/cookies-collection.jpeg',
  '/assets/products/cookies-biscoff.jpeg',
  '/assets/products/banana-bread.jpeg',
  '/assets/products/cookies-cream-cheese.jpeg',
  '/assets/products/crinkles-branded.jpeg',
  '/assets/products/muffins.png',
].map((src) => ({ src }));

export function ImageStreamSection() {
  return (
    <section className="stream-section" aria-labelledby="stream-title">
      <ImageStreamHero images={images} cards={10} speed={22} axis={54}>
        <div className="stream-section__veil" aria-hidden="true" />
        <div className="stream-section__copy">
          <h2 id="stream-title">A whole table of good decisions.</h2>
          <p>Pick the one that keeps passing by in your head.</p>
        </div>
      </ImageStreamHero>
    </section>
  );
}
