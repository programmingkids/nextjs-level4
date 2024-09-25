'use client';

import { useState, useContext } from 'react';
import { UserContext } from '../layout';

export default function Page() {
  console.log('This is red page');
  const [count, setCount] = useState(0);

  // Contextを利用する
  const { name, age, hobby } = useContext(UserContext);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="main">
      <h1 className="p-4 bg-red-200 text-xl">Red</h1>
      <div className="py-4 px-6">{count}</div>
      <div className="py-4 px-6">
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        >
          UP
        </button>
      </div>
      <div className="py-4 text-red-700 font-bold">
        <div>{name}</div>
        <div>{age}</div>
        <div>{hobby}</div>
      </div>
    </div>
  );
}
