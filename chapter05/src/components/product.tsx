import { timeout } from '@/lib/functions';

export const Product = async () => {
  // 2秒待機する
  await timeout(2000);
  return (
    <div className="py-2 px-6">
      <div className="py-4 text-start text-fuchsia-500">
        {'product, '.repeat(20)}
      </div>
    </div>
  );
};
