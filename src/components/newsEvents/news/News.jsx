import React , {useState} from 'react'
import { Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import CheckInput from '../../../functionalUtility/CheckInput'

import './news.css'
import kids from './kids.jpg'

export default function News(props) {

    const [languge, setLanguge] = useState('english')

    return (
        <div className='news-card-container'>
            <div className='img-vid-container'>
                <img className='news-card-image' src={kids} alt="" />
            </div>
            
            <div className='title-art-container'>
                <h3 className='news-title' >{props.NewsTittle}</h3>
            
                <p className='news-article'> {props.newsArticle} </p>
                <h4 className='news-pubished-date'> PUBLISHED DATE:{props.newsPublishedDate}</h4>
                <Link className='learn-more' to={"/news-card-article"} smooth>
                    <HashLink className='learn-more' to={'/news-card-article#article-container'}>
                        <h3> { CheckInput.IsLangugeEnglish(languge) ? `READ MORE` : `ተጨማሪ ያንብቡ`} </h3>
                    </HashLink>
                    
                </Link>
            </div>
            
        </div>
      )
}
