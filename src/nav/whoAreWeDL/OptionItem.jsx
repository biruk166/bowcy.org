import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import './options.css';

export default function OptionItem(props) {
  return (
    <li className='nav-options'><a href="none">{props.optionItem}</a></li>
  )
}
