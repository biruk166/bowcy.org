import React from 'react'
import './image.css'
import kid from './kid.jpg'
import gift from './gift.jpg'



export default function (props) {
  return (
    <div className='small-image-container'>
        <img className='image-box' src={props.image} alt="image not loaded" />
    </div>
  )
}
