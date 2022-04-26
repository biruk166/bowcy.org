import React from 'react'
import './header.css'
import MainNav from '../nav/MainNav'
import OrgNameAndBtns from './orgNameAndBtns/OrgNameAndBtns'



export default function Header() {
  return (
    <div>
        <div className='header-main-nav'>
          <MainNav />  
        </div>
        <OrgNameAndBtns />
    </div>
  )
}
