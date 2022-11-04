import React from 'react'
import './editDeleteCards.css'
import { Outlet, Link} from 'react-router-dom'

export default function EditDeleteCards() {
  return (
        <div>
            <div className='edit-delete-card-container'>
                <div className='edit-del-card'>
                    <Link to={'edit-add-article'}> EDIT/ADD ARTICLE</Link>
                </div>
                <div className='edit-del-card'>
                    <Link to={'edit-add-photos'}> EDIT/ADD PHOTOS</Link>
                </div>
                <div className='edit-del-card'>
                    <Link to={'/none'}> EDIT/ADD VIDEOS</Link>
                </div>
                <div className='edit-del-card'>
                    <Link to={'/none'}> EDIT/ADD RESEARCH</Link>
                </div>
                <div className='edit-del-card'>
                    <Link to={'/none'}> EDIT/ADD STORIES</Link>
                </div>
                <div className='edit-del-card'>
                    <Link to={'/none'}> EDIT/ADD REPORT</Link>
                </div>
                <div className='edit-del-card'>
                    <Link to={'/none'}> EDIT/ADD ADDRESS</Link>
                </div>
                <div className='edit-del-card'>
                    <Link to={'/none'}> EDIT/ADD PROGRAMS</Link>
                </div>
            </div>
            <Outlet />
        </div>
    
    
  )
}
