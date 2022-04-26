import React from 'react'
import './options.css';

export default function OptionItem(props) {
  return (
    <li className='nav-options'><a href="none">{props.optionItem}</a></li>
  )
}
