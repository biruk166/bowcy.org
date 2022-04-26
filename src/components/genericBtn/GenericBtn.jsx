import React from 'react';
import './genericBtn.css';

export default function GenericBtn(props) {
  return (
    <button className='donate-btn'>{props.name} </button>
  )
}
