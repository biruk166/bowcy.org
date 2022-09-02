import React from 'react'
import ImageBox from './ImageBox'
import gift from './gift.jpg'
import './image.css'


export default function Image() {
  return (
    <div className='main-image-container'>
        <h1>2021 Amharan women association program</h1>
        <img className='big-image' src={gift} alt="none" />
        <div className='image-selection'>
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
        <ImageBox/>
        </div>
    </div>
  )
}
