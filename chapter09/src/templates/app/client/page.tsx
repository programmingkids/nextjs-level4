'use client';

import { clientTask } from '@/lib/clientFnctions';

// クライアントコンポーネント
export default function Page() {
  console.log('This is client page');

  // クライアントコンポーネントでクライアント処理を呼ぶ（正当な処理）
  const result = clientTask();
  return (
    <div className="main">
      <h1 className="p-4 bg-violet-200 text-xl">Client</h1>
      <div className="py-4 px-6">
        <div className="py-4 text-start">{'client, '.repeat(20)}</div>
        <div className="text-violet-700 font-bold">{result}</div>
      </div>
    </div>
  );
}
