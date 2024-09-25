'use client';

import React from 'react';
import Image from 'next/image';

// 「react-slick」はThirdPartyPackages
// 「react-slick」はクライアントコンポーネント
// 「react-slick」は「use client」が指定されていない
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '@/images/image1.jpg';
import image2 from '@/images/image2.jpg';
import image3 from '@/images/image3.jpg';
import image4 from '@/images/image4.jpg';

// Sliderを包み込むコンポーネント
// これはクライアントコンポーネント
export const ImageSlider = () => {
  const settings = {
    dots: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image
          src={image1}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          alt="image1"
        />
      </div>
      <div>
        <Image
          src={image2}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          alt="image2"
        />
      </div>
      <div>
        <Image
          src={image3}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          alt="image3"
        />
      </div>
      <div>
        <Image
          src={image4}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          alt="image4"
        />
      </div>
    </Slider>
  );
};
