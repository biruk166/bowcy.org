import React, { useState } from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import CheckInput from '../../functionalUtility/CheckInput';
import './introCardsSection.css';

import ethiopian from './ethiopian.jpg'
import IntroCardBlue from '../../components/introCard/IntroCardBlue';
import IntroCardYellow from '../../components/introCard/IntroCardYellow';
import LottiFiles from '../../assets/LottiFiles';

const article = 'We protect children from domestic abuse and harmfull traditional practices ';
const articleAmh = `ህጻናትን ከቤት ውስጥ ጥቃት እና ጎጂ ልማዳዊ ድርጊቶች እንጠብቃለን`;
const numbOfCards = [1,2,3,4];
export default function IntroCardsSection() {
    function print(){console.log("i am clikced")}
      const [display, setdisplay] = useState(false);
      const [seeMore, setSeeMore] = useState('SEE MORE')
      const [languge, setLanguge] = useState('english')

    return (
      <div className='intro-cards-sec-container' id='what-we-do'>
          <div className='flag-container'>
              <img className={display? 'ethio-flag':'ethio-flag ethio-flag-smaller'} src={ethiopian} alt="ethiopian flag" />
          </div> 
          <div className='intro-cards'>
              <div className='intro-cards-sec-one' >
                {/* {numbOfCards.map(x=> <Link to={'/intro-cards-article-page'}><IntroCardBlue title={ CheckInput.IsLangugeEnglish(languge) ? 'CHILDREN RIGHT' : ` የሀጻናት ሙብት`} image={LottiFiles.heart} article={article} /></Link>)} */}

                <Link to={'/intro-cards-article-page'}> <IntroCardBlue title={ CheckInput.IsLangugeEnglish(languge) ? 'CHILDREN RIGHT' : ` የሀጻናት ሙብት`} image={LottiFiles.heart} article={article} /> </Link>
                <Link to={'/intro-cards-article-page'}> <IntroCardBlue title={ CheckInput.IsLangugeEnglish(languge) ? 'YOUTH EMPOWERMENT' : `ዎጣጦችን ማብርታታት `} image={LottiFiles.youth_impowerment} article={article} /></Link>
                <Link to={'/intro-cards-article-page'}> <IntroCardBlue title={ CheckInput.IsLangugeEnglish(languge) ? 'PARTICIPATION OF YOUTH' : `ዎጣጦችን ማሳተፍ`} image={LottiFiles.partcipation} article={article}/> </Link>
                <Link to={'/intro-cards-article-page'}> <IntroCardBlue title={ CheckInput.IsLangugeEnglish(languge) ? 'CHILD PROTECTION' : `ለጆቸን መጠበቅ`} image={LottiFiles.voting} article={article} /></Link>
              </div>
                  
              
              <div className={display?'intro-cards-sec-no-display':'intro-cards-sec-two'}>
                <Link to={'/intro-cards-article-page'}> <IntroCardYellow title={ CheckInput.IsLangugeEnglish(languge) ? 'WOMENS RIGHT' : `የሴቶች መብት`} image={LottiFiles.women_protection} article={article}/></Link>
                <Link to={'/intro-cards-article-page'}> <IntroCardYellow title={ CheckInput.IsLangugeEnglish(languge) ? 'WOMEN EMPOWERMENT' : `ሴቶችን ማብርታታት`} image={LottiFiles.women_impowerment} article={article}/></Link>
                <Link to={'/intro-cards-article-page'}> <IntroCardYellow title={ CheckInput.IsLangugeEnglish(languge) ? 'PARTICIPATION OF WOMEN' : `ሴቶችን ማሳተፍ`} image={LottiFiles.partcipation} article={article}/></Link>
                <Link to={'/intro-cards-article-page'}> <IntroCardYellow title={ CheckInput.IsLangugeEnglish(languge) ? 'FINANCIAL EDUCATION' : `የፋይናንስ ትምህርት`} image={LottiFiles.finance} article={article}/></Link>
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
