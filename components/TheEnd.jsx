import React from 'react'
import './TheEnd.scss';
import Button from './Button';

const TheEnd = ({ children }) => {
  
  const again = () => {
    window.location.reload();
  }

  return (
    <div id='theEnd'>
      <span>{children}</span>
      
      <Button onclick={again}>Play Again!</Button>
    </div>
  )
}

export default TheEnd