import React from 'react'
import MainNav from '../nav/MainNav'
import OrgNameAndBtns from './orgNameAndBtns/OrgNameAndBtns'

const style = {
              position:'relative',
              zIndex:'6'
}

export default function Header() {
  return (
    <div>
        <div className='header-main-nav' style={style}>
          <MainNav />  
        </div>
        <OrgNameAndBtns />
    </div>
  )
}
