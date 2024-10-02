import { cookies } from 'next/headers';

export default function Page() {
  console.log('This is orange page');
  // 以下の3行はダイナミックレンダリングにするための処理
  // 処理内容自体には大きな意味はない
  const cookieStore = cookies();
  const value = cookieStore.get('title');
  console.log(value); // undefined

  return (
    <div className="main">
      <h1 className="p-4 bg-orange-200 text-xl">Orange</h1>
      <div className="py-4 px-6">
        <div className="py-4 text-start">{'orange, '.repeat(20)}</div>
        <div>
          {new Date().toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' })}
        </div>
      </div>
    </div>
  );
}
