import React from 'react'
import './newsLetter.css'
import{BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle, AiOutlineMail,AiOutlineSmile,AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai'
import {SiMessenger} from 'react-icons/si'

import unicef from './unicef.svg'
import unwomen from './unwomen.svg'
import unfpa from './unfpa.png'

const iconSize = 22;
export default function NewsLetter() {
  return (
      <div className='main-footer-container'>
          
        {/* <div className='social-container'>
            <h2 className='follow-us'> FOLLOW US NOW </h2>
            <a className='fb' href="#" target={'blank'}>FACEBOOK <BsFacebook/> </a>
            <a className='twitter' href="#" target={'blank'}>TWITTER <AiFillTwitterCircle/> </a> 
        </div>  */}

        <div className='news-letter-container'>
            <h1 className='how-to-help'>HOW CAN YOU HELP?</h1>
            <p className='small-disc'>
                We are a group of volunteers and fulltime employes
                we help women and children that has been affected by different
                social, poltical and, economical issues. You can help by volntering or
                financially
            </p>
            <input className='email-input' type="text" placeholder='Enter your email here' required/>
            <button className='subscribe-button'>SUBSCRIBE</button>
            <button className='news-letter-donate-btn' >DONATE NOW </button>
        </div>
        <div className='footer-nav-container'>
            <ul className='footer-nav'>
                <a href='#'>VOLUNTEER <AiOutlineSmile size={iconSize}/></a>
                <a href='#'>EMAIL US <AiOutlineMail size={iconSize}/></a>
                <li>MESSENGER</li>
            </ul>
            <ul className='footer-nav'>
                <a href="#">FACEBOOK <AiOutlineFacebook size={iconSize}/></a>
                <a href='#'>TWITTER <AiOutlineTwitter size={iconSize}/></a>
                <a href='#'>MESSENGER <SiMessenger size={iconSize}/></a>
            </ul>
        </div>
        
        
        <div className='partners'>
            <h1>SEE OUR PARTNERS</h1>
        </div>

        <div className='partner-container'>
            <img src={unicef} alt="unicef logo" />
            <img src={unwomen} alt="un women logo" />
            <img src={unfpa} alt="united nations food program logo" />
        </div>
    </div>
  )
}
