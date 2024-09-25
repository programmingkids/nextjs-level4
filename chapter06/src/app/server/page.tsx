import { serverTask } from '@/lib/serverFunctions';

// サーバーコンポーネント
export default function Page() {
  console.log('This is server page');

  // サーバーコンポーネントでサーバー処理を呼ぶ（正当な処理）
  const result = serverTask();
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
