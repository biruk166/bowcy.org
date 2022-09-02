import React from 'react'
import './articleContainer.css'
import NewsSection from '../../sectionTwo/newsSection/NewsSection'

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

const title = 'የአማራ ክልል ሴቶች እና ሚናቸው'

export default function ArticleContainer(props) {
  return (
    <dive>
      <div className='detail-article-container'>
        <h1 className='detail-title'>{title}</h1>
        <div className='detail-articles'>
            <p>{story + story}</p>
            <p>{story + story}</p>
        </div>
        <a className='contact-author' href="#">CONTACT AUTHOR</a>
      </div>
    </dive>
    
  )
}
