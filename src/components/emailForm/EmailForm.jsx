import React,{useState} from 'react'
import './emailForm.css'
import {MdOutlineCancel} from 'react-icons/md'
import CheckInput from '../../functionalUtility/CheckInput';

export default function EmailForm() {

  const [isNameCorrect, setIsNameIncorrect] = useState(false);
  const [isEmailCorrect, setIsEmailIncorrect] = useState(false);
  const [isMessageCorrect, setIsMessageIncorrect] = useState(false);
  const [sucess, setSucess] = useState(false);

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  
  function isInputCorrect(){
    CheckInput.CheckWordLength(Message, 3) ? setIsMessageIncorrect(false) : setIsMessageIncorrect(true);
    CheckInput.CheckWordLength(Name, 2) ? setIsNameIncorrect(false) : setIsNameIncorrect(true);
    CheckInput.VerifyEmailFormat(Email) ? setIsEmailIncorrect(false) : setIsEmailIncorrect(true);
    if(isNameCorrect  && isEmailCorrect && isMessageCorrect){
      console.log('not sent')
    }
    else console.log('sent');
    console.log('email: ' + Email);
    console.log("name: " + Name);
    console.log( "message: " + Message);
  }
  
  

  return (
    <div className={'main-email-container'}>
      <h1 className='success-msg'>Thank you for contacting us. We will get back to you soon</h1>
      {/* <div className='cancel-icon' onClick={() => dispatch(changeEmailDispState())}> <MdOutlineCancel size={27} color={'#FFD601'}/> </div> */}

      <div className='email-form-container'>
          <select className= 'list-of-dept' name="departments" id="departments">
            <option value="none" selected disabled hidden>SEND EMAIL BY DEPARTMENT</option>
            <option value="dpt">CHILD RIGHT PROTECTION DEP.</option>
            <option value="dpt">YOUTH EMPOWERMENT AND BENFIT DEP.</option>
            <option value="dpt">WOMEN MOBILIZATION AND PARTICIPATION DEP.</option>
            <option value="dpt">GENDER MAINSTREAMING DEP.</option>
            <option value="dpt">YOUTH MAINSTREAMING DEP.</option>
            <option value="dpt">PROJECT EVALUATION DEP.</option>
            <option value="dpt">HUMAN RESOURCE DEVLOPMENT DEP</option>
            <option value="dpt">PURCHASE, FINANCE, AND PROPERTY ADMINTRATION DEP.</option>
            <option value="dpt">PUBLIC RELATION DEP.</option>
            <option value="dpt">INTERNAL AUDITING DEP.</option>
          </select>

          <input className='sender-email' type="text" placeholder='Enter your full name here' required onChange={(e)=> {setName(e.target.value)}}/>

          <input className='sender-email' type="email" placeholder='Enter your email here' required onChange={(e)=>{ setEmail(e.target.value)} }/>
          <textarea className='message-input' type="text" required onChange={(e)=>{setMessage(e.target.value)}}/>


          <div>
              <h4 style={{color:'red', display: isNameCorrect ? 'block' : 'none'}}>name can't be empty</h4>
              <h4 style={{color:'red', display: isEmailCorrect ? 'block' : 'none'}}>email format is wrong Ex: myemail@gmail.com</h4>
              <h4 style={{color:'red', display: isMessageCorrect ? 'block' : 'none'}}>Message box can't be empty or under 3 words</h4>
              <h4 style={{color:'green', display: sucess ? 'none' : 'none'}}>THANK YOU FOR YOUR EMAIL. WE WILL CONTACT YOU AS SOON AS POSSIBLE</h4>
          </div>
          
          <button className='send-btn' onClick={()=>{ isInputCorrect();}}> SEND </button>
      </div>
    </div> 
  )
}
