// Sliderのラッパーコンポーネントを利用する
import { ImageSlider } from '@/components/imageSlider';

export default function Page() {
  console.log('This is server gallery');
  return (
    <div className="main">
      <h1 className="p-4 bg-green-200 text-xl">Server Gallery</h1>
      <div className="mt-4 mb-10">
        <div className="image-slider-container">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
