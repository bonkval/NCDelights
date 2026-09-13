'use client';

import { Menu, MessageCircle, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand brand--header" href="#top" onClick={close} aria-label="NC Delights home">
        <span className="brand__seal" aria-hidden="true">
          <Image className="brand__logo" src="/assets/brand/nc-cookie-seal.png" alt="" width={1280} height={1280} priority />
        </span>
        <span className="brand__wordmark">
          <span className="brand__name">NC Delights</span>
          <span className="brand__sub">Sweet treats</span>
        </span>
      </a>
      <nav id="site-nav" className={isOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Main navigation">
        <a href="#featured" onClick={close}>Featured</a>
        <a href="#menu" onClick={close}>Menu</a>
        <a href="#story" onClick={close}>Our kitchen</a>
        <a className="site-nav__mobile-cta" href={messengerUrl} target="_blank" rel="noreferrer" onClick={close}>Order via Messenger</a>
      </nav>
      <a className="header-cta" href={messengerUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" /> Order now</a>
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="site-nav" onClick={() => setIsOpen((open) => !open)}>
        <span className="sr-only">{isOpen ? 'Close navigation' : 'Open navigation'}</span>
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}
