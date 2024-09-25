import 'client-only';

// クライアント側で行う処理を行う関数
export function clientTask() {
  console.log('this is client task');
  return 'this is browser api';
}
