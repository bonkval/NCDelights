'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function CookieHandoff() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const firstLineRef = useRef<HTMLParagraphElement>(null);
  const secondLineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.85,
        },
      });

      timeline
        .fromTo(frameRef.current, { clipPath: 'inset(18% 32% 18% 32% round 48%)' }, { clipPath: 'inset(0% 0% 0% 0% round 0%)', ease: 'power2.inOut', duration: 1.3 })
        .fromTo(imageRef.current, { scale: 1.42 }, { scale: 1, ease: 'power2.inOut', duration: 1.3 }, '<')
        .fromTo(firstLineRef.current, { xPercent: -18, opacity: 0 }, { xPercent: 0, opacity: 1, duration: .5 }, .25)
        .to(firstLineRef.current, { yPercent: -30, opacity: 0, duration: .35 }, 1.05)
        .fromTo(secondLineRef.current, { yPercent: 35, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .55 }, 1.15);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section className="cookie-handoff" id="handoff" ref={sectionRef} aria-labelledby="handoff-title">
      <div className="cookie-handoff__frame" ref={frameRef}>
        <Image ref={imageRef} src="/assets/products/cookie-handoff-campaign.png" alt="A flour-dusted baker hands fresh NC Delights cookies to a customer" fill sizes="100vw" />
        <div className="cookie-handoff__shade" aria-hidden="true" />
      </div>
      <h2 className="sr-only" id="handoff-title">Passed from our hands to yours</h2>
      <p className="cookie-handoff__line cookie-handoff__line--first" ref={firstLineRef}>Made by hand.</p>
      <p className="cookie-handoff__line cookie-handoff__line--second" ref={secondLineRef}>Yours in a moment.</p>
    </section>
  );
}
