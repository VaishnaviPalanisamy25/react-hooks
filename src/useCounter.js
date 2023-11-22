import React from "react";

export default function useCounter(initialVal) {
  const [count, setCount] = React.useState(initialVal);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return [count, increment, decrement];
}
