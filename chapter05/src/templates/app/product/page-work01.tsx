import { Product } from '@/components/product';
import { Review } from '@/components/review';

export default function Page() {
  console.log('This is produc page');

  return (
    <div className="main">
      <h1 className="p-4 bg-gray-200 text-xl">Product</h1>
      <div className="py-2">
        <Product />
        <Review />
      </div>
    </div>
  );
}
