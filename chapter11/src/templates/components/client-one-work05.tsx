'use client';

import { useState } from 'react';
import { ClientTwo } from './client-two';
import { ServerTwo } from './server-two';

// クライアント処理用のコンポーネント
export const ClientOne = () => {
  console.log('This is client one');

  // useStateはクライアントコンポーネントのみで可能
  const [name, setName] = useState('Bob');

  return (
    <>
      <div className="py-4">This is client one</div>
      <ServerTwo />
    </>
  );
};
