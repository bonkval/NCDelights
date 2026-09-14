'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

const isReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768;

export function ParallaxComponent() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    const layerGroup = root?.querySelector<HTMLElement>('[data-parallax-layers]');
    if (!root || !layerGroup) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      [
        ['back', 16],
        ['middle', 30],
        ['front', 46],
        ['copy', 18],
      ].forEach(([layer, amount], index) => {
        timeline.to(
          layerGroup.querySelectorAll(`[data-parallax-layer="${layer}"]`),
          { yPercent: amount as number, ease: 'none' },
          index === 0 ? undefined : '<',
        );
      });
    }, root);

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    const onTick = (time: number) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      context.revert();
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return (
    <section className="hero" id="top" ref={rootRef} aria-labelledby="hero-title">
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__orb hero__orb--gold" aria-hidden="true" />
      <div className="hero__orb hero__orb--chocolate" aria-hidden="true" />
      <div className="hero__stage" data-parallax-layers>
        <div className="hero__image hero__image--back" data-parallax-layer="back">
          <Image
            src="/assets/products/cookies-collection.jpeg"
            alt="A collection of NC Delights cookies fresh from the oven"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 62vw"
          />
        </div>
        <div className="hero__ring" data-parallax-layer="middle" aria-hidden="true" />
        <div className="hero__image hero__image--front" data-parallax-layer="front" aria-hidden="true">
          <Image src="/assets/products/cookies-oreo.jpeg" alt="" fill sizes="38vw" />
        </div>
        <div className="hero__copy" data-parallax-layer="copy">
          <p className="eyebrow">Handmade in small batches</p>
          <h1 id="hero-title"><span>Baked for the</span><span><em>soft</em> moments.</span></h1>
          <p className="hero__lede">Comforting cookies, tender loaves, and sweet celebrations, all made with care.</p>
          <div className="hero__actions">
            <a className="button button--dark" href="#menu">See what&apos;s baking <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="https://www.messenger.com/t/1055749294291740" target="_blank" rel="noreferrer">Order via Messenger <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
