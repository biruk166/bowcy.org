import React from 'react';
import './donateBtn.css';

export default function DonateBtn(props) {
  return (
    <button className='donate-btn'>{props.name}</button>
  )
}
