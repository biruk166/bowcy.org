import React from 'react'
import './sectionTwo.css'
import OurOrganizations from './ourOrganizations/OurOrganizations'
import NewsSection from './newsSection/NewsSection';
import EmailForm from '../components/emailForm/EmailForm';
import DonationForm from '../components/donationForm/DonationForm';

export default function SectionTwo() {
  return (
    <div>
        <EmailForm />
        <OurOrganizations />
        <NewsSection />
    </div>
  )
}
