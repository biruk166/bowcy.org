import React from 'react'
import './editAddPhotos.css'
import women from './women.jpg'
import DeleteBtn from '../buttons/DeleteBtn'
export default function PhotoContainer() {
  return (
    
    <div className='main-published-photo-container'>
        <div className='published-photo-container'>
        <img src={women} alt="" />
        <img src={women} alt="" />
        <img src={women} alt="" />
        <img src={women} alt="" />
        <img src={women} alt="" />
        <img src={women} alt="" />
        </div>
        <div>
            <DeleteBtn />
        </div>
        <h3>DATE PUBLISHED: JAN/30/2022</h3>
    </div>
  )
}
