import React from 'react'
import './emailForm.css'
import {MdOutlineCancel} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { changeEmailDispState } from '../../stateManagment/frontEnd/DisplayState'

export default function EmailForm() {

  const dispatch = useDispatch();
  let formDispStatus = useSelector((state) => state.display.emailForm);


  return (
    <div className={'main-email-container'}>
      <h1 className='success-msg'>Thank you for contacting us. We will get back to you soon</h1>
      {/* <div className='cancel-icon' onClick={() => dispatch(changeEmailDispState())}> <MdOutlineCancel size={27} color={'#FFD601'}/> </div> */}

      <div className='email-form-container'>
          <select className= 'list-of-dept' name="departments" id="departments">
            <option value="none" selected disabled hidden>SEND EMAIL BY DEPARTMENT</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
            <option value="dpt">CHILD PROTECTION DEP</option>
          </select>

          <input className='sender-email' type="text" placeholder='Enter your full name here' required/>
          <input className='sender-email' type="email" placeholder='Enter your email here' required/>
          <h4 className='email-format'>email format is wrong Ex: myemail@gmail.com</h4>
          
          <textarea className='message-input' type="text" required/>
          <h4 className='email-format'>Message box can't be empty or under 3 words</h4>
          <button className='send-btn' type="submit">SEND</button>
      </div>
    </div> 
  )
}
