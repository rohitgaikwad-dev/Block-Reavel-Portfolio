import React from 'react'
import hero from '../../asset/hero.jpg'
import './image.css'

const Image = () => {
  return (
    <div className="image">
      <img src={hero} alt="Nothing" />
    </div>
  )
}

export default Image