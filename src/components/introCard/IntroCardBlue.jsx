import React from 'react';
import './introCard.css'; 

export default function IntroCardBlue(props) {
  
  return (
    <div className='intro-card-container intro-card-cont-blue' onAbort={props.click}>
        <div className='intro-card-img-container'>
            <img className='intro-card-image' src={props.image} alt="Globe" />
        </div>

        <h3 className='title title-blue' >{props.title}</h3>
        
        <div className='intro-article-container'>
            <p className='intro-article intro-art-blue'> {props.article} </p>
        </div>
    </div>
  )
}
