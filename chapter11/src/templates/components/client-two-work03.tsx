'use client';

import { useState } from 'react';

// クライアント処理用のコンポーネント
export const ClientTwo = () => {
  console.log('This is client two');

  // useStateはクライアントコンポーネントのみで可能
  const [name, setName] = useState('Bob');

  return <div className="py-4">This is client two</div>;
};
