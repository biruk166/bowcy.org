import React from 'react';
import './deleteBtn.css';

export default function DeleteBtn(props) {
  return (
    <button className='delete-btn'>{props.name}</button>
  )
}
