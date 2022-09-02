import React from 'react'
import './editDeleteCards.css'
import {HashLink as Link} from 'react-router-hash-link'

export default function EditDeleteCards() {
  return (
    <div className='edit-delete-card-container'>
            <div className='edit-del-card'>
                <Link to={'/none'}> EDIT/ADD ARTICLE</Link>
            </div>
            <div className='edit-del-card'>
                <Link to={'/none'}> EDIT/ADD PHOTOS</Link>
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
  )
}
