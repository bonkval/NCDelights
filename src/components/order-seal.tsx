'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';

export function OrderSeal() {
  return (
    <a className="order-seal" href={messengerUrl} target="_blank" rel="noreferrer" aria-label="Order a treat through Messenger">
      <span className="order-seal__cookie-shell" aria-hidden="true">
        <span className="order-seal__cookie">
          <Image src="/assets/products/cookie-cutout-final.png" alt="" fill sizes="88px" />
        </span>
      </span>
      <span className="order-seal__label"><span>Fresh from our oven</span><strong>Order a treat</strong><ArrowUpRight aria-hidden="true" /></span>
    </a>
  );
}
