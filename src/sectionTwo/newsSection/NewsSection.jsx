import React, { useState } from 'react'
import {GrNext, GrPrevious} from 'react-icons/gr'
import './newsSection.css'
import News from '../../components/newsEvents/news/News'

const title = "WOMEN CONFERENCE IN THE AMHARAN REGION";
const article = "In the past 3 years we have thought over\
                300 women personal finance this resulted\
                morethan 50% of them starting their own\
                business and over 70% of them reported\
                less dependenci on their husban or relatives\
                we help women undertand money and\
                lend them a very lowe interst long term\
                loan so they can start a small business\
                we have spent over 5 million dollar in this\
                program"

export default function NewsSection() {
    const [newsCounter, setCounter] = useState(1)

    const incrment =()=>{
        setCounter(newsCounter + 1);
    }
    const decrment=()=>{
        if(newsCounter != 1){
          setCounter(newsCounter - 1);  
        }
    }

  return (
    
    <div id='news-events-card'>
    <div className='news-section-container'>
        <div className='news-section'>
            <News NewsTittle={title} newsArticle={article} newsPublishedDate={' 2022/12/22'}/>
            <News NewsTittle={title} newsArticle={article} newsPublishedDate={' 2022/12/22'}/>
            <News NewsTittle={title} newsArticle={article} newsPublishedDate={' 2022/12/22'}/>  
        </div>

        <div className='navigation'>
            <div onClick={decrment}><GrPrevious className='icon-prv' size={30} /></div>
            <h1 className='numb-box'>{newsCounter}</h1>
            <div onClick={incrment}><GrNext className='icon-nxt' size={30} /></div>
        </div>
        
    </div>
    </div>
  )
}
