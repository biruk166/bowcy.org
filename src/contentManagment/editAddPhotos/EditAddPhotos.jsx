import React,{useState} from 'react'
import GiCancel from 'react-dom'
import './editAddPhotos.css'
import PhotoContainer from './PhotoContainer'
import GenericBtn from '../../components/genericBtn/GenericBtn';
import PublishBtn from '../buttons/PublishBtn';


export default function EditAddPhotos() {
  const [addImage, setImageNumber] = useState(3);
  return (
    <div className='edit-add-photos-main-container'>
      <div>
        <h1>EDIT/ADD PHOTOS</h1>
      </div>


      <div className='delete-photo-container'>
        <PhotoContainer/>
        <PhotoContainer/>
        <PhotoContainer/>
        <PhotoContainer/>
        <PhotoContainer/>
        <PhotoContainer/>
      </div>

      <input className='album-name' type="text" placeholder='Enter album name'/>
      <input className='album-name' type={'text'} placeholder='Enter Discription'/>

      <div className='img-input-holder'>
        {[...Array(addImage)].map((e, i)=> <input type="file" key={i++} onChange={(e)=>{console.log(e.target.value)}}/>)}
        <div onClick={()=>{setImageNumber(addImage + 1)}}> <GenericBtn name={'ADD'}/> </div>
        <div onClick={()=>{setImageNumber(addImage - 1)}}> <GenericBtn name={'REMOVE'}/> </div>
      </div><br />

      <div>< PublishBtn/></div>

      <br /><br />

        
    </div>
    
  )
}
