import React from 'react'
import './options.css'
import OptionItem from './OptionItem';

export default function DigitalLibrary() {
  return (
    <div className='who-arewe-container'>
            <button className='nav-items'> DIGITAL LIBRARY </button>
            <ul className='option-items'>
                <OptionItem optionItem={"REPORTS"} />
                <OptionItem optionItem={"RESEARCH"} />
                <OptionItem optionItem={"STORIES"} />
                <OptionItem optionItem={"SPEECHES"} />
                <OptionItem optionItem={"PHOTOS"}/>
                <OptionItem optionItem={"VIDEOS"} />
            </ul> 
    </div>
  )
}
