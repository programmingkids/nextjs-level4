import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/spinner';
import { Product } from '@/components/product';
import { Review } from '@/components/review';

export default function Page() {
  console.log('This is produc page');

  return (
    <div className="main">
      <h1 className="p-4 bg-gray-200 text-xl">Product</h1>
      <div className="py-2">
        <Suspense
          fallback={
            <LoadingSpinner textColor="text-fuchsia-500" className="py-2" />
          }
        >
          <Product />
        </Suspense>
        <Suspense
          fallback={
            <LoadingSpinner textColor="text-orange-500" className="py-2" />
          }
        >
          <Review />
        </Suspense>
      </div>
    </div>
  );
}
