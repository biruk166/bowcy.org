import React, { useState } from 'react'
import './introCardsSection.css';
import ethiopian from './ethiopian.jpg'
import IntroCardBlue from '../../components/introCard/IntroCardBlue';
import IntroCardYellow from '../../components/introCard/IntroCardYellow';
import LottiFiles from '../../assets/LottiFiles';

const article = 'We protect children from domestic abuse and harmfull traditional practices ';
export default function IntroCardsSection() {
  function print(){console.log("i am clikced")}

    const [display, setdisplay] = useState(false);
    const [seeMore, setSeeMore] = useState('SEE MORE')
  return (
    
    <div className='intro-cards-sec-container'>
        <div className='flag-container'>
            <img className={display? 'ethio-flag':'ethio-flag ethio-flag-smaller'} src={ethiopian} alt="ethiopian flag" />
        </div> 
        <div className='intro-cards'>
            <div className='intro-cards-sec-one' >
              <IntroCardBlue title={'CHILDREN RIGHT'} image={LottiFiles.heart} article={article} />
              <IntroCardBlue title={'YOUTH EMPOWERMENT'} image={LottiFiles.youth_impowerment} article={article} />
              <IntroCardBlue title={'PARTICIPATION OF YOUTH'} image={LottiFiles.partcipation} article={article}/>
              <IntroCardBlue title={'CHILD PROTECTION'} image={LottiFiles.voting} article={article} />
            </div>
                
            
            <div className={display?'intro-cards-sec-no-display':'intro-cards-sec-two'}>
              <IntroCardYellow title={'WOMENS RIGHT'} image={LottiFiles.women_protection} article={article}/>
              <IntroCardYellow title={'WOMEN EMPOWERMENT'} image={LottiFiles.women_impowerment} article={article}/>
              <IntroCardYellow title={'PARTICIPATION OF WOMEN'} image={LottiFiles.partcipation} article={article}/>
              <IntroCardYellow title={'FINANCIAL EDUCATION'} image={LottiFiles.finance} article={article}/>
            </div>

            <div className='see-more-container'>
                <div>
                    <h2 className='see-more'> {seeMore} </h2>
                </div>
            </div>
          
        
    </div>
    </div>
  )
}
