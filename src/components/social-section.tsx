import Image from 'next/image';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';

const facebookUrl = 'https://www.facebook.com/1055749294291740';
const messengerUrl = 'https://www.messenger.com/t/1055749294291740';

const socialImages = [
  '/assets/products/cookies-oreo.jpeg',
  '/assets/products/crinkles-branded.jpeg',
  '/assets/products/muffins.png',
  '/assets/products/banana-bread.jpeg',
];

export function SocialSection() {
  return (
    <section className="social-section" aria-labelledby="social-title">
      <div className="social-section__headline">
        <h2 id="social-title">Catch the next batch before it disappears.</h2>
        <a href={facebookUrl} target="_blank" rel="noreferrer">Follow NC Delights <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="social-ribbon" aria-label="A glimpse from recent bake days">
        {socialImages.map((src, index) => <div className={`social-ribbon__image social-ribbon__image--${index + 1}`} key={src}><Image src={src} alt="Recent NC Delights bake" fill sizes="25vw" /></div>)}
      </div>
      <div className="contact-board">
        <p>Orders, questions, and sweet ideas</p>
        <a href={messengerUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Messenger <ArrowUpRight aria-hidden="true" /></a>
        <a href="mailto:ncdelights26@gmail.com"><Mail aria-hidden="true" /> ncdelights26@gmail.com <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}
