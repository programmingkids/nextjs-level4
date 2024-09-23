import { timeout } from '@/lib/functions';

export const Review = async () => {
  // 4秒待機する
  await timeout(4000);
  return (
    <div className="py-2 px-6">
      <div className="py-4 text-start text-orange-500">
        {'review, '.repeat(20)}
      </div>
    </div>
  );
};
