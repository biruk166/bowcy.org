import React, {useState} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import {AiOutlineDownCircle} from "react-icons/ai"; 
import './options.css';
import CheckInput from '../../functionalUtility/CheckInput';


export default function WhoAreWe(){

    const [display, setDisplayProp] = useState(false)

  /* toggles the display useState, if it is true it will set the class nav-items-container
     else it will set the class to nav-items-disp-none which will make its diaplay property none */
    const ChangeDisplayProp =() => {
        display ? setDisplayProp(false): setDisplayProp(true);
    }

    //it will be used to change the languge for the user based of the languge prefernce selected;
    const [languge, setLanguge] = useState('english')
  return (
    <div className='who-arewe-container'>
            <button className='nav-items' onClick={ChangeDisplayProp}> { CheckInput.IsLangugeEnglish(languge) ? `WHO ARE WE?` : `እኛ ማን ነን?`}<AiOutlineDownCircle/> </button>
            <ul className={ display?'option-items':"option-items-dis-none"}>
              
                <div className='nav-options'>
                  <Link to={"vision"} smooth> {CheckInput.IsLangugeEnglish(languge) ? `VISION` : `የእኛ ራዕይ`} </Link>
                </div>

                <div className='nav-options'>
                  <Link to={"#see-our-partners"} smooth> { CheckInput.IsLangugeEnglish(languge) ? `PARTNERS` : `አጋሮቻቸን `} </Link>
                </div>
                
                
                <div className='nav-options'>
                  <Link to={"#see-our-partners"} smooth> {CheckInput.IsLangugeEnglish(languge) ? `VALUES`:`እሴቶች`} </Link>
                </div>

                <div className='nav-options'>
                  <Link to={"#directorates"} smooth> {CheckInput.IsLangugeEnglish(languge) ? `DIRECTORATES`:`ቢሮዎቻቸን`} </Link>
                </div>
                
                <div className='nav-options'>
                    <Link to={'/'}> {CheckInput.IsLangugeEnglish(languge) ? "ADDRESS" : `አድራሻ`} </Link> 
                </div>
                

                <div className='nav-options'>
                  <Link to={'/email-page'}> {CheckInput.IsLangugeEnglish(languge) ? "CONTACT US" : `እንነጋገር`} </Link>
                </div>
                
            </ul> 
    </div>
  )
}
