import React,{useState} from 'react'
import CheckInput from '../../functionalUtility/CheckInput'
import { HashLink } from 'react-router-hash-link'

import './articleContainer.css'
import NewsSection from '../../sectionTwo/newsSection/NewsSection'

const story = `In the past 3 years we have thought over 
               300 women personal finance this resulted
                morethan 50% of them starting their own 
                business and over 70% of them reported
                less dependenci on their husban or relatives
                we help women undertand money and 
                lend them a very lowe interst long term
                loan so they can start a small business
                we have spent over 5 million dollar in this
                programIn the past 3 years we have thought over 
                300 women personal finance this resulted
                morethan 50% of them starting their own 
                business and over 70% of them reported
                less dependenci on their husban or relatives
                we help women undertand money and 
                lend them a very lowe interst long term
                loan so they can start a small business
                we have spent over 5 million dollar in this
                program`

const storyAmh = `ባለፉት 3 ዓመታት ውስጥ አስበን ነበር
                300 የሴቶች የግል ፋይናንስ አስገኝቷል
                ከ 50% በላይ የሚሆኑት የራሳቸውን ይጀምራሉ
                ንግድ እና ከ 70% በላይ የሚሆኑት ሪፖርት አድርገዋል
                በባል ወይም በዘመዶቻቸው ላይ ያነሰ ጥገኛ
                ሴቶች ገንዘብ እንዲረዱ እናግዛለን።
                በጣም ዝቅተኛ የረዥም ጊዜ ብድር መስጠት
                አነስተኛ ንግድ እንዲጀምሩ ብድር መስጠት
                ለዚህም ከ5 ሚሊዮን ዶላር በላይ አውጥተናል
                ፕሮግራም ባለፉት 3 ዓመታት ውስጥ አስበን ነበር
                300 የሴቶች የግል ፋይናንስ አስገኝቷል
                ከ 50% በላይ የሚሆኑት የራሳቸውን ይጀምራሉ
                ንግድ እና ከ 70% በላይ የሚሆኑት ሪፖርት አድርገዋል
                በባል ወይም በዘመዶቻቸው ላይ ያነሰ ጥገኛ
                ሴቶች ገንዘብ እንዲረዱ እናግዛለን።
                በጣም ዝቅተኛ የረዥም ጊዜ ብድር መስጠት
                አነስተኛ ንግድ እንዲጀምሩ ብድር መስጠት
                ለዚህም ከ5 ሚሊዮን ዶላር በላይ አውጥተናል
                ፕሮግራም`;

const title = 'Women and Their Role';
const titleAmh = 'የአማራ ክልል ሴቶች እና ሚናቸው'

export default function ArticleContainer(props){
  const [languge, setLanguge] = useState('english')

  return (
    <div id='article-container'>
      <div className='detail-article-container'>
        <h1 className='detail-title'>{CheckInput.IsLangugeEnglish(languge) ? title : titleAmh} </h1>
        <div className='detail-articles'>
            <p>{CheckInput.IsLangugeEnglish(languge) ? story + story + story + story : storyAmh + storyAmh} </p>
        </div>
        <a className='contact-author' href="#">{CheckInput.IsLangugeEnglish(languge) ? `CONTACT AUTHOR` : `ደራሲን ያግኙ`} </a>
      </div>
      <div className='contact-author' style={{display:'flex',  gap:'1rem', alignItems:'center', justifyContent:'center'}}>
        <h3>PUBLISHED DATE: 11/27/2022</h3>
        <h3>AUTHOR NAME: Biruk Cherie</h3> 
      </div>
    </div>
    
  )
}
