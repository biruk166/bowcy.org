import React from 'react'
import './orgNameAndBtns.css'
import homepage from './homepage.jpg';
import GenericBtn from '../../components/genericBtn/GenericBtn'

export default function OrgNameAndBtns() {
  function test(){
      console.log("button clicked")
    }
  return (
    
    <div className='org-name-btns-container'>
        <img className='home-page-img' src={homepage} alt="Home page picture kids playing" />
        
        <div className='btn-txt-container'>
            <div className='org-name-container'>
                <h1 className='org-name'>AMHARA NATIONAL STATE BUREAU OF WOMEN <br />
                    CHILDREN AND SOCIAL AFFAIR <br />
                        (AMHARA BcWCSA)
                </h1>
            </div>

            <div className='btns-container'>
               <div className='donate'> <GenericBtn name={"DONATE"} /></div>
               <div className='learn-more'> <GenericBtn name={"LEARN MORE"}/></div>
            </div>
        </div>
        
    </div>
  )
}
