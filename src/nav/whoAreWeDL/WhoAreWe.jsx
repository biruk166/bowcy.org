import React, {useState} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
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
              
                <div className='nav-options'>
                  <Link to={"vision"} smooth> VISION </Link>
                </div>

                <div className='nav-options'>
                  <Link to={"#see-our-partners"} smooth> PARTNERS </Link>
                </div>
                
                
                <div className='nav-options'>
                  <Link to={"#see-our-partners"} smooth> VALUES </Link>
                </div>

                <div className='nav-options'>
                  <Link to={"#directorates"} smooth> DIRECTORATES </Link>
                </div>
                
                
                <OptionItem optionItem={"ADDRESS"}/>
                <OptionItem optionItem={"CONTACT US"} />
            </ul> 
    </div>
  )
}
