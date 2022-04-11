import React from 'react'
import './options.css';
import OptionItem from './OptionItem';


export default function WhoAreWe(){
  return (
    <div className='who-arewe-container'>
            <button className='nav-items'> WHO ARE WE? </button>
            <ul className='option-items'>
                <OptionItem optionItem={"VISION"} />
                <OptionItem optionItem={"MISSION"} />
                <OptionItem optionItem={"VALUES"} />
                <OptionItem optionItem={"DIRECTORATES"} />
                <OptionItem optionItem={"ADDRESS"}/>
                <OptionItem optionItem={"WHAT WE DO?"} />
            </ul> 
    </div>
  )
}
