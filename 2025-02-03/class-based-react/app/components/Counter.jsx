"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    /*
     * In func components, useState updates are async and React batches multiple state updates
     * when they happen inside the same event handler.
     */
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1); // always use prevState when updating based on current state
    setCount(count + 1); // this is bad, cause it might use old state and may overwrite other updates
    // this overwrites the other updates, so the counter won't increase by 3 but 1.
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Functional Counter:{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default Counter;
