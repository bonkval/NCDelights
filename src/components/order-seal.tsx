'use client';

import Image from 'next/image';

const messengerUrl = 'https://www.messenger.com/t/1055749294291740';
const sealText = 'ORDER A TREAT • ORDER A TREAT • ';

export function OrderSeal() {
  return (
    <a className="order-seal" href={messengerUrl} target="_blank" rel="noreferrer" aria-label="Order a treat through Messenger">
      <span className="order-seal__type" aria-hidden="true">
        {Array.from(sealText).map((letter, index) => (
          <span key={`${letter}-${index}`} style={{ transform: `rotate(${index * (360 / sealText.length)}deg)` }}>{letter}</span>
        ))}
      </span>
      <span className="order-seal__cookie" aria-hidden="true">
        <Image src="/assets/products/cookie-cutout-final.png" alt="" fill sizes="92px" />
      </span>
    </a>
  );
}
