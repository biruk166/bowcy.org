import React,{useState} from 'react';
import {AiOutlineDownCircle} from "react-icons/ai";
import './options.css';
import OptionItem from './OptionItem';

export default function DigitalLibrary() {

  //switches btn false and true when the function ChangeDisplayProp() is called
  const [display, setDisplayProp] = useState(false)

/* togles the class if it is true it will set the class nav-items-container
   else it will set the class to nav-itemsdisp-none which will make its diaplay property none */
  const ChangeDisplayProp =() => {
      display ? setDisplayProp(false): setDisplayProp(true);  
  }
  return (
    <div>
        <div className='who-arewe-container'>
                <button className='nav-items' onClick={ChangeDisplayProp}> DIGITAL LIBRARY<AiOutlineDownCircle/></button>
                <ul className={display ? 'option-items another': 'option-items-dis-none'}>
                    <OptionItem optionItem={"REPORTS"} />
                    <OptionItem optionItem={"RESEARCH"} />
                    <OptionItem optionItem={"STORIES"} />
                    <OptionItem optionItem={"SPEECHES"} />
                    <OptionItem optionItem={"PHOTOS"}/>
                    <OptionItem optionItem={"VIDEOS"} />
                </ul> 
        </div>
    </div>
  )
}
