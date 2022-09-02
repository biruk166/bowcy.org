import React from 'react'
import './image.css'
import kid from './kid.jpg'
import gift from './gift.jpg'



export default function (props) {
  return (
    <div className='image-container'>
        <img className='image-box' src={kid} alt="image not loaded" />
        <h4 className='image-discription'>no image discription</h4>
    </div>
  )
}
