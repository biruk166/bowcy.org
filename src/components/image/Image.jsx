import React,{useState} from 'react'
import {GrNext, GrPrevious} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import NewsSection from '../../sectionTwo/newsSection/NewsSection'

import kid from './kid.jpg'
import ImageBox from './ImageBox'
import gift from './gift.jpg'
import './image.css'


export default function Image() {
    const [currentImage, setCurrentImage] = useState(gift);

    const incrment =()=>{
        setCurrentImage(kid);
    }

    const decrment=()=>{
        setCurrentImage(gift);  
    }

  return (
    <div>
    <div className='main-image-container'>
        <h1 className='image-gallary'>IMAGE GALLARY</h1>

          <ul className='image-nav'>
            <li><Link to={'#'} >TODAY TOP</Link></li>
            <li><Link to={'#'}>IMAGE BY EVENT</Link></li>
            <li><Link to={'#'}>PROGRAMS</Link></li>
          </ul>

        <img className='big-image' src={currentImage} alt="none" />
        <h2 className='big-image-discription'>After adding props to your component, 
                            you will use PropTypes to 
                            define the type of data you expect a component 
                            to receive. PropTypes are a simple type system 
                            to check that data matches the expected types during 
                            runtime. They serve as both documentation and an error 
                            checker that will help keep your application predictable 
                            as it scales.
        </h2>
        <div className='navigation'>
            <div onClick={decrment}><GrPrevious className='icon-prv' size={50} /></div>
            
            <div onClick={incrment}><GrNext className='icon-nxt' size={50} /></div>
        </div>

        <div className='main-imaage-selection-container'>
            <div className='image-selection'>
              <ImageBox image={kid}/>
              <ImageBox image={gift}/>
              <ImageBox image={kid}/>
              <ImageBox image={gift}/>
              <ImageBox image={kid}/>
              <ImageBox image={kid}/>
              <ImageBox image={gift}/>
              <ImageBox image={kid}/>
          </div>
        </div>
        <hr />
    </div>
    <NewsSection />
    </div>
  )
}
