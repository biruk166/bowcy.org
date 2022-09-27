import React, {useState} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import CheckInput from '../../functionalUtility/CheckInput'

import axios from 'axios'
import './newsLetter.css'
import {AiOutlineMail,AiOutlineSmile,AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai'
import {SiMessenger} from 'react-icons/si'
import unicef from './unicef.svg'
import unwomen from './unwomen.svg'
import unfpa from './unfpa.png'
const iconSize = 22;

export default function NewsLetter() {
    const [newsLetterEmail, setNewsLetterEmail] = useState({
        email:"",
        invalid: false,
        subscribed: false,
        alreadySubscribed: false,
    });
    
    const [languge, setLanguge] = useState('english')

    const [donationFormDiplay, setDonationFormDisplay] = useState(false);
    
    const emailValidation=()=>{
        const regEx = /^\S+@\S+\.\S+$/;
        if(!regEx.test(newsLetterEmail.email)){
            setNewsLetterEmail({invalid: true, subscribed:false});
            return false;
        }
        else{
            setNewsLetterEmail({invalid: false, subscribed:true});
            return true;
        }
    }

    //send the email address of the person that subscribed to the database
    const sendSubscriberData =()=>{
        console.log(newsLetterEmail.email);
        if(emailValidation()){
            axios.post('http://localhost:3001/createNewsLetter',{
                email: newsLetterEmail.email
            }).then((response)=>{
                console.log("email sent");
                console.log(response);
            })
        }
    }
    // set the donation form div to block when the user clickes the donate button
    const changeDonationFormDisplay =()=>
    {
        donationFormDiplay ? setDonationFormDisplay(false) : setDonationFormDisplay(true);
    }

  //the UI for the footer of the webpage
  return (
      <div className='main-footer-container' id='see-our-partners'>
        <div className='news-letter-container'>
            <h1 className='how-to-help'>{ CheckInput.IsLangugeEnglish(languge) ? "HOW CAN YOU HELP" : 'እንዴት መርዳት ትችላላችሁ?'}</h1>
            <p className='small-disc'>
                { CheckInput.IsLangugeEnglish(languge) ?
                `We are a group of volunteers and fulltime employes
                we help women and children that has been affected by different
                social, poltical and, economical issues. You can help by volntering or
                financially`:

                `እኛ የበጎ ፈቃደኞች እና የሙሉ ጊዜ ሰራተኞች ቡድን ነን
                በተለያዩ ችግሮች የተጎዱ ሴቶችን እና ህፃናትን እንረዳለን።
                ማህበራዊ ፣ ፖለቲካዊ እና ኢኮኖሚያዊ ጉዳዮች ። በፈቃደኝነት ሊረዱዎት ይችላሉ ወይም
                በገንዘብ`
                }
            </p>
            <input className='email-input' type="email" placeholder={ CheckInput.IsLangugeEnglish(languge) ?'Enter your email here' : 'ኢሜልዎን እዚህ ያስገቡ'} required
            onChange={(e)=>{
                const email = e.currentTarget.value;
                setNewsLetterEmail({email:email});
            }}/> <br />
            <h2 style={{color:"red", padding:0, display: newsLetterEmail.invalid ? "block":"none"}}>{CheckInput.IsLangugeEnglish(languge) ? `Inavlid Email` : `የማይሰራ ኢሜይል`}</h2>
            <h2 style={{color:"green", padding:0, display:newsLetterEmail.subscribed ? "block":"none" }}> {CheckInput.IsLangugeEnglish(languge) ? `Subscribed!` : `ተመዝግቧል!`}</h2>
            <h2 style={{color:"yellow", padding:0, display:newsLetterEmail.alreadySubscribed ? "block":"none"}}>{CheckInput.IsLangugeEnglish(languge) ?`You are already subscribed` : `አስቀድመው ተመዝግበዋል።`}</h2>
            <button className='subscribe-button' onClick={sendSubscriberData}>{CheckInput.IsLangugeEnglish(languge) ?`SUBSCRIBE` : `ሰብስክራይብ ያድርጉ`}</button>
            <Link to={'donation-page'}> <button className='news-letter-donate-btn' onClick={changeDonationFormDisplay}> {CheckInput.IsLangugeEnglish(languge) ? `DONATE NOW` : `አሁኑኑ ይለግሱ`} </button> </Link>
            {/* <div style={{display: donationFormDiplay ? 'block': 'none'}}> <DonationForm/> </div> */}
        </div>

        <div className='footer-nav-container'>
            <ul className='footer-nav'>
                <a href='#'> {CheckInput.IsLangugeEnglish(languge) ? `VOLUNTEER`: `በፍካድኘት የሳታፉ`}<AiOutlineSmile size={iconSize}/></a>
                <Link to={'/email-page'}> {CheckInput.IsLangugeEnglish(languge) ? `EMAIL US` : `ኢሜል ይላኩልን`} <AiOutlineMail size={iconSize}/></Link>
                <li>{CheckInput.IsLangugeEnglish(languge) ? `TELEGRAM` : `መልእክተኛ`}</li>
            </ul>
            <ul className='footer-nav'>
                <a href="https://www.facebook.com/profile.php?id=100064156864610"> { CheckInput.IsLangugeEnglish(languge) ? `FACEBOOK` : `ፌስቡክ`} <AiOutlineFacebook size={iconSize}/></a>
                <a href='#'> { CheckInput.IsLangugeEnglish(languge) ? `TWITTER` : `ትዊተር`}  <AiOutlineTwitter size={iconSize}/></a>
                <a href='#'>{CheckInput.IsLangugeEnglish(languge) ? `MESSENGER` : `መልእክተኛ`} <SiMessenger size={iconSize}/></a>
            </ul> 
        </div>
        
        
        <div className='partners'>
            <h1>{ CheckInput.IsLangugeEnglish(languge) ? `SEE OUR PARTNERS` : `አጋሮቻችንን ይመልከቱ`}</h1>
        </div>

        <div className='partner-container'>
            <img src={unicef} alt="unicef logo" />
            <img src={unwomen} alt="un women logo" />
            <img src={unfpa} alt="united nations food program logo" />
        </div>
    </div>
  )
}
