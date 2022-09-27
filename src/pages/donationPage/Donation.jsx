import React from 'react'
import DonationForm from '../../components/donationForm/DonationForm'
import NewsSection from '../../sectionTwo/newsSection/NewsSection'

export default function Donation() {
  return (
    <div style={{display:"flex", flexDirection: 'column', alignItems: 'center'}}>
        <DonationForm /> 
        <NewsSection />
    </div>
  )
}
