'use client';

import Image from 'next/image';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';

export function OrderSeal() {
  return (
    <a className="order-seal" href={messengerUrl} target="_blank" rel="noreferrer" aria-label="Order a treat through Messenger">
      <span className="order-seal__cookie" aria-hidden="true">
        <Image src="/assets/products/cookie-floating-cutout.png" alt="" fill sizes="112px" />
      </span>
    </a>
  );
}
