import React from 'react';
import './introCard.css';
import globe from './image/globe.gif' 

export default function IntroCardYellow(props) {
  return (
    <div className='intro-card-container intro-card-cont-yellow'>
        <div className='intro-card-img-container'>
            <img className='intro-card-image' src={props.image} alt="Globe" />
        </div>

        <h3 className='title title-yellow' >{props.title}</h3>
        
        <div className='intro-article-container'>
            <p className='intro-article intro-art-yellow'> {props.article} </p>
        </div>
    </div>
  )
}