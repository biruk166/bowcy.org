import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CheckInput from '../functionalUtility/CheckInput';

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
  
  const [languge, setLanguge] = useState('english')

  return (
    
    <div className='nav-links'>
      <button className={display?'option-btn option-btn-color-black': 'option-btn option-btn-color-white'} onClick={ChangeDiplayProp}>{display? <ImCancelCircle color='black'/> : <FiMenu/>}</button>

      <div className={display ?"nav-items-container" : 'nav-items-disp-none'}>
        <Link to= "/">
          <OptionItem optionItem={ CheckInput.IsLangugeEnglish(languge) ? 'HOME' : `መነሻ ገጽ`}/>
        </Link>
        
        <div className="who-are-we-index">
          <WhoAreWe />
        </div>

        <div className='digital-library-index'>
          <DigitalLibrary />
        </div>

        <HashLink to="#what-we-do" smooth>
          <OptionItem optionItem={ CheckInput.IsLangugeEnglish(languge) ?'WHAT WE DO' : `እኛ እምንሰራው`}/>
        </HashLink>

        <HashLink to="#news-events-card" smooth>
          <OptionItem optionItem={ CheckInput.IsLangugeEnglish(languge) ? 'NEWS/EVENTS' : `ዜና / ፕሮግራሞች`}/>
        </HashLink>
        
          <Link to={'/donation-page'}>
              <OptionItem optionItem={CheckInput.IsLangugeEnglish(languge) ? 'DONATE NOW' : `ይለግሱ`}/>
          </Link>
        
      </div>
    </div>
  )
}
