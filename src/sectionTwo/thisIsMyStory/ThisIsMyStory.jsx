import React from 'react'
import './thisIsMyStory.css'
import MyStoryBtn from '../../components/myStoryBtn/MyStoryBtn'
import person from './person.jpg'


export default function ThisIsMyStory(props) {
  return (
    <div className='all-container'>
        <div className='this-my-story-container'>
                <div className='person-img-container'>
                    <img className='person-img' src={person} alt="the story teller picture" />
                </div>
            <div className='title-and-story'>
                <h1 className='story-title'>THIS IS MY STORY</h1>
                <p className='story'>{props.story}</p>
                <div className='btn-container'>
                    <h3 className='read-more'>READ MORE STORIES LIKE THIS</h3>
                    <MyStoryBtn name={'PREVIOUS'} />
                    <MyStoryBtn name={'NEXT'} />
                </div>
            </div>
        </div>
        
    </div>
  )
}
