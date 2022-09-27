import React,{useState} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import CheckInput from '../../functionalUtility/CheckInput';
import './orgNameAndBtns.css'

import homepage from './homepage.jpg';
import GenericBtn from '../../components/genericBtn/GenericBtn'

export default function OrgNameAndBtns() {

  const [languge, setLanguge] = useState('english')

  return (
    
    <div className='org-name-btns-container'>
        <img className='home-page-img' src={homepage} alt="refuges seating" />
        
        <div className='btn-txt-container'>
            <div className='org-name-container'>
              <h1 className='org-name'>{ CheckInput.IsLangugeEnglish(languge) ? `AMHARA NATIONAL STATE BUREAU OF WOMEN` : `የአማራ ብሄራዊ ክልል ሴቶች`} <br />
                    {CheckInput.IsLangugeEnglish(languge) ? `CHILDREN AND SOCIAL AFFAIR` : `ህፃናትና ማህበራዊ ጉዳይ ቢሮ`} <br />
                      {CheckInput.IsLangugeEnglish(languge) ?`(AMHARA BcWCSA)`: ""}
                </h1>
            </div>

            <div className='btns-container'>
               <Link to={'donation-page'}> <div className='donate'> <GenericBtn name={CheckInput.IsLangugeEnglish(languge) ? "DONATE" : `አሁን ይለግሱ`} /></div></Link>
               <div className='learn-more'> <GenericBtn name={CheckInput.IsLangugeEnglish(languge) ?"CONTACT US":`አግኙን`}/></div>
            </div>
        </div>
        
    </div>
  )
}
