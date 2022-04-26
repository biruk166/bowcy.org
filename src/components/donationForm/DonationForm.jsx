import React, { useState } from 'react';
import './donationForm.css' ;
import GenericBtn from '../genericBtn/GenericBtn';
import {MdOutlineCancel} from 'react-icons/md'


export default function DonationForm() {
    const [isDonationHidden, setDonationFormDis] = useState(true)
    const showDonationForm=()=>{
        isDonationHidden ? setDonationFormDis(false) : setDonationFormDis(true)
    }
  return (
    <div className={isDonationHidden? 'donation-form-container':'hide-donation-form'}>
        <div className='cancel-donation-form-icon' onClick={showDonationForm}> <MdOutlineCancel size={27} color={'#FFD601'}/> </div>
        <h1 className='direct-depo-title'>DIRECT DEPOSIT INFORMATION</h1>
        <div className='direct-depo-info-container'>
            <div className='info'>
                <h2>BANK NAME</h2>
                <h2>S.W.I.F.T CODE</h2>
                <h2>ACCOUNT NO</h2>
                <h2>NAME OF ACCOUNT</h2>
            </div>
            <div className='info'>
                <h2>COMMERCIAL BANK OF ETHIOPIA, BAHIR DAR BRANCH</h2>
                <h2>CBETETAA</h2>
                <h2>GOV 3492 (1000012877475)</h2>
                <h2>BUREAU OF WOMEN AFFAIRS</h2>
            </div>   
        </div>
        <h3>Due to technical and other reasons currently
            we only accept direct deposit. If you are having 
            problem. please contact us
            You can donate money through Western union, Remitly or
            other money transfering services</h3>
        

        <GenericBtn name={'Contact us'}/>
    </div>
  )
}
