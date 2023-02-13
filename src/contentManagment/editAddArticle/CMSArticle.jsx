import React,{useState} from 'react'
import axios from 'axios'
import CheckInput from '../../functionalUtility/CheckInput'
import './editAddArticle.css'

import {GrNext, GrPrevious} from 'react-icons/gr'
import EditAddArticle from './EditAddArticle'
import UniversalButton from '../buttons/UniversalButton'

// text editor
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


export default function CMSArticle() {

    var modules = {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', {'color':[]}, {'font': []}],
          ['clean']
        ],
      }
    
      var formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'color'
      ]




    // the following function will check if the given input values
    // if they are set correctly it will be used to send the data to the back
    const [fixErrorMessage, setFixErrorMessage] = useState(false);

    const [article, setArticle] = useState('');
    const [articleTitle, setArticleTitle] = useState('')
    const [publisherName, setPublisherName] = useState('Amhara BcWCSA Office');
    const [publisherEmail, setPublisherEmail] = useState('');
    const [publishedDate]= useState(CheckInput.GenrateDate());
    const [articleImageDirectory, setArticleImageDirectory] = useState('');

    const [newsCounter, setCounter] = useState(1);
    

    function consolLog(){
        console.log('article = ' + article);
        console.log('article title = ' + articleTitle);
        console.log('publisher name = '+ publisherName);
        console.log('publsiher email = ' + publisherEmail);
        console.log('published date = ' + publishedDate);
        console.log('article image directory = ' + articleImageDirectory);
    }
    
    const articleInputData = {
        publisherEmail: 'biruk@ksu.edu',
        publisherName: publisherName,
        publishedDate: publishedDate,

        articleImageDirectory: 'biruk/file/name/this.img',
        articleTitle: articleTitle,
        article: article,
    }


    //sends the publishers article to the server so it can be saved in the data-base;
    function SendArticleDataToServer(){
        axios.post('http://localhost:3001/publishArticle', {
            data: articleInputData,
        }).then((response)=>{
            console.log('data sent');
            console.log(response.data);
        })
    }
    
    
    const incrment =()=>{
        setCounter(newsCounter + 1);
    }
    const decrment=()=>{
        setCounter(newsCounter - 1);
    }

    // gets all articles from the database
    function GetAllArticle(){
        axios.post('http://localhost:3001/getAllArticle', {
            data: 'allArticle',
        }).then((response) =>{
            console.log('articles received');
            console.log(response.data);
        })
    }


  return (
    <div className='main-cms-edit-add-article-container'>
        <h1>EDIT/ADD ARTICLE</h1>
        <div className='current-article-container'>
            <EditAddArticle />
            <EditAddArticle />
        </div>
        

        <div className='navigation'>
            <div onClick={decrment}><GrPrevious className='icon-prv' size={30} /></div>
            <h1 className='numb-box'>{newsCounter}</h1>
            <div onClick={incrment}><GrNext className='icon-nxt' size={30} /></div>
        </div>
        <hr />


        <div className='author-info'>
            <label> Email Addess <br /> <input className='add-new-author-email' type="email" onChange={(e)=>{setPublisherEmail(e.target.value)}}/></label> <br /><br />
            <label> Author Name <br /><input className='add-new-author-email' type="text" onChange={(e)=>{setPublisherName(e.target.value)}}/></label> <br /><br />
            <label> Article Tittle</label><br />
            <textarea className='add-new-author-email' cols="30" rows="10" onChange={(e)=>{setArticleTitle(e.target.value)}}></textarea>
        </div>


        <div className='react-quill'>
            <ReactQuill size={12} modules={modules} formats={formats} theme="snow" value={article} onChange={setArticle} />
        </div>
        <div className='article-style' dangerouslySetInnerHTML={{__html: article}}/>


        <div onClick={()=>{SendArticleDataToServer()}}>
           <UniversalButton color={'white'} bgColor={'blue'} name={'Publish'}></UniversalButton> 
        </div>
        
        <div onClick={()=>{GetAllArticle()}}>
            <UniversalButton color={'white'} bgColor={'black'} name={'Get All Article'}></UniversalButton>
        </div>
        
        <div style={{backgroundColor:'lightgray', padding:'4rem', width:'700px'}}>
            <h2 style={{color:'red'}}>are you sure?</h2>
            <UniversalButton color={'white'} bgColor={'green'} name={'Yes'} />
            <UniversalButton color={'white'} bgColor={'red'} name={'No'} />
        </div>
    </div>
  )
}
