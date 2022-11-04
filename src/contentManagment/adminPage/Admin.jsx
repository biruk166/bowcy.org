import React from 'react'
import './admin.css'
import { Route, BrowserRouter as Router, Routes, matchRoutes} from 'react-router-dom';

import EditDeleteCards from '../editDeleteCards/EditDeleteCards'
import EditAddArticle from '../editAddArticle/EditAddArticle'
import DeleteBtn from '../buttons/DeleteBtn'
import AddBtn from '../buttons/AddBtn'
import PublishBtn from '../buttons/PublishBtn'
import Cancel from '../buttons/Cancel'
import CMSArticle from '../editAddArticle/CMSArticle'
import PhotoContainer from '../editAddPhotos/PhotoContainer'
import EditAddPhotos from '../editAddPhotos/EditAddPhotos'
export default function Admin() {
  return (
      <div className='main-adim-page-container'>
        <h1 className='welcome-message'>WELCOME, THIS IS AN ADMIN PAGE. ALL OF YOUR CHANGES WILL BE REFELECTED ON THE WEBSITE!</h1>
         <EditDeleteCards />
         <div className='admin-rout-content'>
            
            {/* <PhotoContainer />
            <CMSArticle /> */}
         </div>
         
    </div>
    
  )
}
