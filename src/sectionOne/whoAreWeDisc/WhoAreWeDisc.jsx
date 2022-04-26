import React from 'react';
import './whoAreWeDisc.css';

const moreInfo = 'For more info click each card'
const whoAreWe = "ANRS BoWCY was established in 2006, and has the mandate to promote gender equality, justice and safeguard the rights and welfare of women, children and youths. \
It has eleven directorates, each with its own specialized function. ANRS BoWCY is located at kebele 16, Tana Sub-city, Bahir Dar. Bahir Dar is the capital city of \
Amhara National Regional State of Ethiopia, situated on the southern shore of Lake Tana, the source of Blue Nile River. It is 560 km far from Addis Ababa, the capital city of Ethiopia,\
in the northwest direction at an altitude of 1801 m above sea level, latitude of 11038” N and a longitude of 37010” E.\
We provide the following services: "


export default function WhoAreWeDisc() {
  return (
    <div className='who-are-we-text-container'>

        <div className='main-title-container'>
            <h2> WHO ARE WE?</h2>
        </div>
        <div className='org-disc-container'>
            <p>{whoAreWe}</p>
        </div>
        <div className='more-infro-container'>
            <p>{moreInfo}</p>
        </div>

    </div>
  )
}
