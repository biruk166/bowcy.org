import React from 'react';
import './mainNav.css';
import Nav from './Nav';
import GenericBtn from '../components/genericBtn/GenericBtn';

export default function MainNav() {
  return (
    <div className='nav-bar-background'>
        <div className='main-nav-container'>
            <div className='logo'>
                <h1>BOWCY</h1>
            </div>
            <div className='nav-bar-container'>
                <div className='nav-bar'>
                    <Nav />
                </div>
            </div>

            <div className='donate-btn-container'>
                <GenericBtn name={'DONATE'}/>
            </div>
        </div>
        <div className='test-stuff'>
            {/* <h1>this is a test subject</h1> */}
        </div>
    </div>
  )
}
