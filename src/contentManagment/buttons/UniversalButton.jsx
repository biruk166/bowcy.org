import React from 'react'
import './button.css'

export default function UniversalButton({name, color, click, bgColor}) {
  return (
    <button 
            onClick={click}
            style={{color:color, backgroundColor: bgColor}}
            className='universal-btn-style'>{name}</button>
  )
}