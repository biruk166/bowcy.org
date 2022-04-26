import React from 'react'
import './sectionTwo.css'
import OurOrganizations from './ourOrganizations/OurOrganizations'
import NewsSection from './newsSection/NewsSection';
import ArticleContainer from '../components/articleContainer/ArticleContainer';
import NewsLetter from '../components/newsLetter/NewsLetter';
import EmailForm from '../components/emailForm/EmailForm';
import DonationForm from '../components/donationForm/DonationForm';

const story = "In the past 3 years we have thought over \
               300 women personal finance this resulted\
                morethan 50% of them starting their own \
                business and over 70% of them reported\
                less dependenci on their husban or relatives\
                we help women undertand money and \
                lend them a very lowe interst long term\
                loan so they can start a small business\
                we have spent over 5 million dollar in this\
                programIn the past 3 years we have thought over \
                300 women personal finance this resulted\
                morethan 50% of them starting their own \
                business and over 70% of them reported\
                less dependenci on their husban or relatives\
                we help women undertand money and \
                lend them a very lowe interst long term\
                loan so they can start a small business\
                we have spent over 5 million dollar in this\
                program"
const title = 'WOMEN IN THE AMHRAN REGION AND THEIR PROGRESS IN SOCIAL WORKS'
export default function SectionTwo() {
  return (
    <div>
        <OurOrganizations />
        <NewsSection />
        <DonationForm />
        <EmailForm />
        <NewsLetter />
        {/* <ArticleContainer title={title} articleOne={story + story} articleTwo={story + story} /> */}
    </div>
  )
}
