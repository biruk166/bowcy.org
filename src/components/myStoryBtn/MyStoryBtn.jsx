import React from 'react'
import './myStoryBtn.css'


export default function MyStoryBtn(props) {
  return (
    <button className='my-story-btn'>{props.name}</button>
  )
}
