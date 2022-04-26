import React from 'react'
import './emailForm.css'
import {MdOutlineCancel} from 'react-icons/md'

export default function EmailForm() {
  return (
    <div className='main-email-container'> 
      <h1 className='success-msg'>Thank you for contacting us. We will get back to you soon</h1>
      <div className='cancel-icon'> <MdOutlineCancel size={27} color={'#FFD601'}/> </div>

      <div className='email-form-container'>
          <select className='list-of-dept' name="departments" id="departments">
            <option value="none" selected disabled hidden>Send email by department</option>
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
          <input className='sender-email' type="text" placeholder='Enter your email here' required/>
          <h4 className='email-format'>email fomat is wrong Ex: myemail@gmail.com</h4>
          
          <textarea className='message-input' type="text" required/>
          <h4 className='email-format'>Message box can't be empty or under 5 words</h4>
          <button className='send-btn' type="submit">SEND</button>
      </div>
    </div> 
  )
}
