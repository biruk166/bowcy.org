import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import './logIn.css'
import GenericBtn from '../components/genericBtn/GenericBtn'

export default function LogIn() {
  return (
    <div className='log-in-page-main-container'>
        <div className='login-items-container'>
            <h1 className='login'>LOGIN</h1>
            <input className='user-email-password' type="email" name="" id="" placeholder='Enter Your Email'/>
            <input className='user-email-password' type="password" name="" id="" placeholder='Enter Your PassWord'/>
            <Link to={'/admin-page'} smooth> <GenericBtn name={'LOGIN'}/> </Link>
            <h4 className='wrong-password'>Wrong PassWord or user name!!</h4>
        </div>
    </div>
  )
}
