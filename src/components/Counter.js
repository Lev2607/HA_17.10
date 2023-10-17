import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <br />
      <button onClick={incrementCounter} className='bg-blue-500 p-4 rounded-lg'>Erhöhen</button>
      <br />
      <button onClick={decrementCounter} className='bg-purple-500 p-4 rounded-lg'>Reduzieren</button>
    </div>
  );
}