import React,{useState} from 'react'
import './editAddArticle.css'
import {GrNext, GrPrevious} from 'react-icons/gr'
import EditAddArticle from './EditAddArticle'
import PublishBtn from '../buttons/PublishBtn'
import Cancel from '../buttons/Cancel'

export default function CMSArticle() {
    const [newsCounter, setCounter] = useState(1)

    const incrment =()=>{
        setCounter(newsCounter + 1);
    }
    const decrment=()=>{
        setCounter(newsCounter - 1);
    }
  return (
    <div className='main-cms-edit-add-article-container'>
        <h1>EDIT/ADD ARTICLE</h1>
        <div className='current-article-container'>
            <EditAddArticle />
            <EditAddArticle />
            <EditAddArticle />
            <EditAddArticle />
            <EditAddArticle />
            <EditAddArticle />
            <EditAddArticle />
            <EditAddArticle />
        </div>
        <div className='navigation'>
        <div onClick={decrment}><GrPrevious className='icon-prv' size={30} /></div>
        <h1 className='numb-box'>{newsCounter}</h1>
        <div onClick={incrment}><GrNext className='icon-nxt' size={30} /></div>
        </div>
        <hr />
        <div className='new-text-image-container'>
            <input type="file" name="" id=""/>
            <input className='add-new-author-email' type="email" name="" id="" placeholder='Enter your email'/>
            <textarea className='add-new-title' name="" id="" cols="30" rows="10" placeholder='Enter Your Tittle Here'></textarea>
            <textarea className='add-new-article' name="" id="" cols="30" rows="10" placeholder='Enter Your Article Here'></textarea>
        </div>

        <div className='publish-cancel-btn-container'>
           <div> <PublishBtn /> </div>
            <div> <Cancel /> </div> 
        </div>
        
    </div>
  )
}
