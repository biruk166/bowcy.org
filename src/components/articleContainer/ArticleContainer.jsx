import React from 'react'
import './articleContainer.css'
export default function ArticleContainer(props) {
  return (
    <div className='detail-article-container'>
        <h1 className='detail-title'>{props.title}</h1>
        <div className='detail-articles'>
            <p>{props.articleOne}</p>
            <p>{props.articleTwo}</p>
        </div>
        <a className='contact-author' href="#">CONTACT AUTHOR</a>
    </div>
  )
}
