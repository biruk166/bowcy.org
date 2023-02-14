import React from 'react'
import EmailForm from '../components/emailForm/EmailForm'
import NewsSection from '../sectionTwo/newsSection/NewsSection'


export default function EmailPage() {
  return (
    <div style={{display:"flex", flexDirection: 'column', alignItems: 'center', marginTop:'10rem', gap:"5rem"}}>
        <EmailForm />
        <NewsSection />
    </div>
  )
}
