import { ClientOne } from '@/components/client-one';
import { ServerOne } from '@/components/server-one';
import { ServerTwo } from '@/components/server-two';

export default function Page() {
  console.log('This is orange page');
  return (
    <div className="main">
      <h1 className="p-4 bg-orange-200 text-xl">Orange</h1>
      <div className="py-4 px-6">
        <div className="py-4 text-start">{'orange, '.repeat(20)}</div>
      </div>
      <ClientOne>
        <ServerTwo />
      </ClientOne>
    </div>
  );
}
