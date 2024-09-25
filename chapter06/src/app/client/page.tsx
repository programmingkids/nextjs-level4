'use client';

import { serverTask } from '@/lib/serverFunctions';

// クライアントコンポーネント
export default function Page() {
  console.log('This is client page');

  // クライアントコンポーネントでサーバー処理を呼ぶ（不正な処理）
  // 不正な処理だが、実現可能
  const result = serverTask();
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
