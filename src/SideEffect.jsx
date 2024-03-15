import React, { useEffect, useState } from "react";

const SideEffect = () => {
  const [count, setCount] = useState(1);
  const [light, setLight] = useState(false);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    console.log(count);

    return () => {
      console.log("Cleanup for side effect ran");
    };
  }, [count]);
  return (
    <div>
      {count !== 0 && <h1>{count}</h1>}
      <button onClick={increaseCount}>increment</button>
      <button onClick={decreaseCount}>decrement</button>
      <button
        onClick={() => {
          setLight(!light);
        }}
      >
        change Light
      </button>
    </div>
  );
};

export default SideEffect;
