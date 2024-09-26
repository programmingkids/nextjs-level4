import fs from 'fs';
import { ServerTwo } from './server-two';

// サーバー処理用のコンポーネント
export const ServerOne = () => {
  console.log('This is server one');

  // ファイル処理はサーバー側のみで実行可能
  const data = fs.readFileSync('src/data/nations.txt', 'utf-8');
  console.log(data);

  return (
    <>
      <div className="py-4">This is server one</div>
      <ServerTwo />
    </>
  );
};
