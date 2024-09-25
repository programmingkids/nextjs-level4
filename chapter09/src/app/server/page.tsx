import { clientTask } from '@/lib/clientFnctions';

// サーバーコンポーネント
export default function Page() {
  console.log('This is server page');

  // サーバーコンポーネントでクライアント処理を呼ぶ（不正な処理）
  // 不正な処理だが、実現可能
  const result = clientTask();
  return (
    <div className="main">
      <h1 className="p-4 bg-green-200 text-xl">Server</h1>
      <div className="py-4 px-6">
        <div className="py-4 text-start">{'server, '.repeat(20)}</div>
        <div className="text-green-700 font-bold">{result}</div>
      </div>
    </div>
  );
}
