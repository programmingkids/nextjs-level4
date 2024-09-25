// サーバー側で行う秘匿性の高い関数
export function serverTask() {
  console.log('this is secret task executing on server side');
  return 'this is secret data from server';
}
