import React from 'react'
import useCounter from './useCounter'

export default function Counter() {
    const [count,increment,decrement ] = useCounter(0); 
    
  return (
    <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <p>Curren count is : {count} </p>
    </div>
  )
}
