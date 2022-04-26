import React, { useState } from 'react';
import './nav.css';
import {FiMenu} from 'react-icons/fi';
import {ImCancelCircle} from 'react-icons/im'
import OptionItem from './whoAreWeDL/OptionItem';
import WhoAreWe from './whoAreWeDL/WhoAreWe';
import DigitalLibrary from './whoAreWeDL/DigitalLibrary';


export default function Nav() {

  //state that will toggle between true and false to determine class name
  const [display, setDisplayProp] = useState(false);
/* togles the class if it is true it will set the class nav-items-container
   else it will set the class to nav-itemsdisp-none which will make its diaplay property none */
  const ChangeDiplayProp =() => {
     display ? setDisplayProp(false): setDisplayProp(true);
  } 
  
  return (
    <div className='nav-links'>
      <button className={display?'option-btn option-btn-color-black': 'option-btn option-btn-color-white'} onClick={ChangeDiplayProp}>{display? <ImCancelCircle/> : <FiMenu/>}</button>

      <div className={display ?"nav-items-container" : 'nav-items-disp-none'}>

        <OptionItem optionItem={'HOME'}/>
        <div className="who-are-we-index">
          <WhoAreWe />
        </div>
        <div className='digital-library-index'>
          <DigitalLibrary />
        </div>
        <OptionItem optionItem={'WHAT WE DO'}/>
        <OptionItem optionItem={'NEWS/EVENTS'}/>
        <OptionItem optionItem={'PROGRAMS'}/>

          <div>
            <hr />
          </div>
      </div>
        
    </div>
  )
}
