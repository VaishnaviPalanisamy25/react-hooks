import React from 'react'
import useScreen  from './useScreen'
export default function ScreenComponent() {
  const size = useScreen();
  return (
    <div>
        <p>
            screen size is : {size}
        </p>
    </div>
  )
}
