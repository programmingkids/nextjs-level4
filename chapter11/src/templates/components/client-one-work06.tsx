'use client';

import { useState } from 'react';
import { ClientTwo } from './client-two';
import { ServerTwo } from './server-two';

type Props = {
  children: React.ReactNode;
};

// クライアント処理用のコンポーネント
export const ClientOne = ({ children }: Props) => {
  console.log('This is client one');

  // useStateはクライアントコンポーネントのみで可能
  const [name, setName] = useState('Bob');

  return (
    <>
      <div className="py-4">This is client one</div>
      {children}
    </>
  );
};
