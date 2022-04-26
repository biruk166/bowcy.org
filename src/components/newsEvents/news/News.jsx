import React from 'react'
import './news.css'
import kids from './kids.jpg'

export default function News(props) {
    return (
        <div className='news-card-container'>
            <div className='img-vid-container'>
                <img className='news-card-image' src={kids} alt="" />
            </div>
            
            <div className='title-art-container'>
                <h3 className='news-title' >{props.NewsTittle}</h3>
            
                <p className='news-article'> {props.newsArticle} </p>
                
                <a className='learn-more' href="none">READ MORE</a>
            </div>
            
        </div>
      )
}
