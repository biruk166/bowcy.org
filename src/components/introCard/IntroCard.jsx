import React from 'react';
import './introCard.css';
import globe from './image/globe.gif' 

export default function IntroCard(props) {
  return (
    <div className='intro-card-container'>
        <div className='intro-card-img-container'>
            <img className='intro-card-image' src={globe} alt="Globe" />
        </div>

        <h3 className='title' >{props.title}</h3>
        
        <div className='intro-article-container'>
            <p className='intro-article'> {props.article} </p>
        </div>
    </div>
  )
}
