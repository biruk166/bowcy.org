import React from 'react'
import WhoAreWeDisc from './whoAreWeDisc/WhoAreWeDisc'
import IntroCardsSection from './introCardsSection/IntroCardsSection'
import ThisIsMyStory from '../sectionTwo/thisIsMyStory/ThisIsMyStory'

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

export default function SectionOne() {
  return (
    <div>
        <WhoAreWeDisc /> 
        <IntroCardsSection />
        <ThisIsMyStory story={story} />
        
    </div>
  )
}
