import React, {useState} from 'react'
import {AiOutlineDownCircle} from "react-icons/ai"; 
import './options.css';
import OptionItem from './OptionItem';


export default function WhoAreWe(){
    const [display, setDisplayProp] = useState(false)
   
  /* toggles the display useState, if it is true it will set the class nav-items-container
     else it will set the class to nav-items-disp-none which will make its diaplay property none */
    const ChangeDisplayProp =() => {
        display ? setDisplayProp(false): setDisplayProp(true);
    }
  return (
    <div className='who-arewe-container'>
            <button className='nav-items' onClick={ChangeDisplayProp}> WHO ARE WE?<AiOutlineDownCircle/> </button>
            <ul className={ display?'option-items':"option-items-dis-none"}>
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
