import React,{useState} from 'react'
import axios from 'axios'
import CheckInput from '../../functionalUtility/CheckInput'

import './editAddArticle.css'
import {GrNext, GrPrevious} from 'react-icons/gr'
import EditAddArticle from './EditAddArticle'
import PublishBtn from '../buttons/PublishBtn'
import Cancel from '../buttons/Cancel'


export default function CMSArticle() {

    // the confirmation page that will be displayed when the user
    // clicks publish
    const [confPageDisp, setConfPageDisp] = useState(false);
    const confirmationPageStyle = {
                        fontSize:'1.5rem',
                        display: confPageDisp ? 'flex':'none',
                        flexDirection:'column',
                        alignItems:'center',
                        gap:'1rem',
                        padding:'1rem',
                        border:'solid .5rem'               
    }



    const [isEmailIncorrect, setIsEmailIncorrect] = useState(false);

    const [isAmharicNameIncorrect, setIsAmharicNameIncorrect] = useState(false);
    const [isAmharicTitleIncorrect, setIsAmharicTitleIncorrect] = useState(false);
    const [isAmharicArticleIncorrect, setIsAmharicArticleIncorrect] = useState(false);
    
    const [isEnglishNameIncorrect, setIsEnglishNameIncorrect] = useState(false);
    const [isEnglishTitleIncorrect, setIsEnglishTitleIncorrect] = useState(false);
    const [isEnglishArticleIncorrect, setIsEnglishArticleIncorrect] = useState(false);

    // the following function will check if the given input values
    // if they are set correctly it will be used to send the data to the back
    const [fixErrorMessage, setFixErrorMessage] = useState(false);
    function CheckInputAccuracy()
    {
        if(isEmailIncorrect == true){
            setFixErrorMessage(true);
            setConfPageDisp(false);
            return false;
        }
        if(showAmharicInput && showEnglishInput)
        {
            if(isAmharicNameIncorrect == false || isAmharicArticleIncorrect == false || isAmharicTitleIncorrect == false){
                setFixErrorMessage(true);
                setConfPageDisp(false);
                return false;
            }
            if(isEnglishNameIncorrect == false || isEnglishArticleIncorrect == false || isEnglishTitleIncorrect == false){
                setFixErrorMessage(true);
                setConfPageDisp(false);
                return false;
            }
            else{
                setFixErrorMessage(false);
                setConfPageDisp(true);
                return true;
            }
        }
        else
        {
            if(showAmharicInput)
            {
                if(isAmharicNameIncorrect == false || isAmharicArticleIncorrect == false || isAmharicTitleIncorrect == false)
                {
                    setFixErrorMessage(true);
                    setConfPageDisp(false);
                    return false;
                }
                setFixErrorMessage(false);
                setConfPageDisp(true);
                return true; 
            }
            if(showEnglishInput)
            {
                if(isEnglishNameIncorrect == false || isEnglishArticleIncorrect == false || isEnglishTitleIncorrect == false)
                {
                    setFixErrorMessage(true);
                    setConfPageDisp(false);
                    return false;
                }
                setFixErrorMessage(false);
                setConfPageDisp(true);
                return true;
            }
        } 
    }

    // the following use state and function will decide
    // if the amharic article or english articl area is visible
    // it will also set if amharic or english is available to the
    // date-base so when user change article languge will be based on
    // if the article exists in the prefered languge
    const [showAmharicInput, setAmharicInput] = useState(false);
    const [showEnglishInput, setEnglishInput] = useState(false);
    function displayEngAmh(val){
        if(val == 'none'){
            setAmharicInput(false);
            setEnglishInput(false);
            setEnglishAvailable(0);
            setAmharicAvailable(0);
        }
        else{
            if(val == 'english'){
                setAmharicInput(false);
                setEnglishInput(true);
                setEnglishAvailable(1);
                setAmharicAvailable(0);
            }
            if(val == 'amharic'){
                setAmharicInput(true);
                setEnglishInput(false);
                setEnglishAvailable(0);
                setAmharicAvailable(1);
            }
            if(val == 'both'){
                setAmharicInput(true);
                setEnglishInput(true);
                setEnglishAvailable(1);
                setAmharicAvailable(1);
            }
        }
    }


    const [newsCounter, setCounter] = useState(1)
    const [contentTobePublished, setContentTobePublished] = useState('');

    //general status for the article or story
    const [articleImageDirectory, setArticleImageDirectory] = useState('');
    const [publisherEmail, setPublisherEmail] = useState('');
    const [deleteStatus, setDeleteStatus] = useState(0);
    const [hideStatus, setHideStatus] = useState(0);
    const [publishedDate, setPublishedDate]= useState(CheckInput.GenrateDate());

    //everything for the english version of the article
    const [englishAvailable, setEnglishAvailable] = useState(0);
    const [englishTitle, setEnglishTitle] = useState('');
    const [englishArticle, setEnglishArticle] = useState('');
    const [englishArticleDirectory, setEnglishArticleDirectory] = useState('');
    const [publisherEnglishName, setPublisherEnglishName] = useState('')

    //eveything for the amharic setion of the article
    const [amharicAvailable, setAmharicAvailable] = useState(0);
    const [amharicTitle, setAmharicTitle] = useState('');
    const [amharicArticle, setAmharicArticle] = useState('');
    const [amharicArticleDirectory, setAmharicArticleDirectory] = useState('');
    const [publsiherAmharicName, setPublsiherAmharicName] = useState('');

    // this data will be sent to the server so it can be stored in the data-base
    const articleInputData = {
                            articleImgDirectory: articleImageDirectory,
                            pubEmail: publisherEmail,
                            delStatus: deleteStatus,
                            hidStatus: hideStatus,
                            pubDate: publishedDate,

                            engAvailabe: englishAvailable,
                            engTitle: englishTitle,
                            engArticle: englishArticle,
                            engArticleDirectory: englishArticleDirectory,
                            pubEnglishName: publisherEnglishName,

                            amhAvailable: amharicAvailable,
                            amhTitle: amharicTitle,
                            amhArticle: amharicArticle,
                            amhArticleDirectory: amharicArticleDirectory,
                            pubAmharicName: publsiherAmharicName,

    }

    // sends the publishers article to the server so it can be saved in the data-base;
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
            <div style={{border:'.1rem solid', 
                        padding:'1rem',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center'}}>
                <input type="file" name="imageUpload"
                    onChange={(e)=>{setArticleImageDirectory(e.currentTarget.value);}}/>

                <div style={{display:'flex', 
                            alignItems:'center',
                            gap:'1rem',
                            fontSize:'1.5rem'}}>
                    <h3>Choose in what language you are publishing</h3>
                    <select name="articleStory"
                        onChange={(e)=>{console.log(e.currentTarget.value);
                                        let val = e.currentTarget.value;
                                        console.log(publishedDate);
                                        displayEngAmh(val);
                                        }}>
                        <option value="none">Choose Language</option>
                        <option value="english">English</option>
                        <option value="amharic">Amharic</option>
                        <option value="both">Both</option>
                    </select>           
                </div>
                
                <div style={{display:'flex', 
                            alignItems:'center',
                            gap:'1rem',
                            fontSize:'1.5rem'}}>
                    <h3 htmlFor="">Choose what you are publishing</h3>
                    <select name="articleStory" onChange={(e)=>{setContentTobePublished(e.currentTarget.value);
                                                                console.log(contentTobePublished);}}>
                        <option value="none">Choose type</option>                                           
                        <option value="article">Story</option> 
                        <option value="story">Article</option>
                    </select>
                </div>
                <input className='add-new-author-email' type="email"  placeholder='Please add your email | የእርስዎን ኢሜይል ያስገቡ ' 
                        onChange={(e)=>{ setPublisherEmail(e.currentTarget.value);
                                         CheckInput.VerifyEmailFormat(publisherEmail) ? setIsEmailIncorrect(false):setIsEmailIncorrect(true);
                                 }}/>
                            <h2 style={ {color:'red', display: isEmailIncorrect ? 'block':'none'}}>Invalid email   |  የማይሰራ ኢሜይል</h2>
            </div>
            
            
            {/* the folowing input will handel the amharic version of the article data if no input is given
            it will set amharicArticleAvailable to 0 which means False */}
            <div className='new-text-image-container' style={{display: showAmharicInput ? 'flex' : 'none'}}>

                <h1> የጽሑፉን አማርኛ ሥሪት ከዚህ በታች አስቀምጠው </h1>
                <input className='add-new-author-email' type="email" placeholder='ስምህን በአማርኛ አስገባ' 
                    onChange={(e)=>{ setPublsiherAmharicName(e.currentTarget.value);
                                    setIsAmharicNameIncorrect(CheckInput.CheckWordLength(publsiherAmharicName, 2));
                                    }}/>
                 <h2 style={ {color:'red', display: isAmharicNameIncorrect ? 'none':'block'}}> እባክህ ስምህን በአማርኛ አስገባ (ሙሉ ስምህን አስቀምጥ) </h2>

                <textarea style={{borderColor:'gold'}} className='add-new-title' cols="30" rows="10" placeholder='የአማርኛ ርእስህን እዚህ አስገባ'
                    onChange={(e)=>{ setAmharicTitle(e.currentTarget.value);
                                    setIsAmharicTitleIncorrect(CheckInput.CheckWordLength(amharicTitle, 4));
                                    }}>
                </textarea>
                <h2 style={ {color:'red', display: isAmharicTitleIncorrect ? 'none':'block'}}> ርዕሱ ከ 4 ቃላት በላይ መሆን አለበት!!</h2>

                <textarea className='add-new-article' cols="30" rows="10" placeholder='የአማርኛ ጽሑፍህን እዚህ አስገባ'
                    onChange={(e)=>{ setAmharicArticle(e.currentTarget.value);
                                    setIsAmharicArticleIncorrect(CheckInput.CheckWordLength(amharicArticle, 5));
                                    }}>
                </textarea>
                <h2 style={ {color:'red', display: isAmharicArticleIncorrect ? 'none':'block'}}> የጽሁፉ ቃል ብዛት ከ200 በላይ መሆን አለበት።</h2>
            </div>

            <br/><br />

            {/* the folowing input will handel the english version of the article data if no input is given
                it will set englishArticleAvailable to 0 which means False */}
        <div className='new-text-image-container' style={{display: showEnglishInput?'flex' : 'none'}}>

                <h1>PUT THE ENGLISH VERSION OF THE ARTICLE BELOW </h1>
                <input className='add-new-author-email' type="email"placeholder='Enter your name in English'
                    onChange={(e)=>{ setPublisherEnglishName(e.currentTarget.value);
                                    setIsEnglishNameIncorrect(CheckInput.CheckWordLength(publisherEnglishName, 2)); 
                                    }}/>
                            <h2 style={ {color:'red',display: isEnglishNameIncorrect ? 'none':'block'}}> Please insert your name in english (Put your full name)</h2>

                <textarea className='add-new-title' cols="30" rows="10" placeholder='Enter Your English Title Here'
                    onChange={(e)=>{ setEnglishTitle(e.currentTarget.value); 
                                    setIsEnglishTitleIncorrect(CheckInput.CheckWordLength(englishTitle, 4));
                                    }}>
                </textarea>
                            <h2 style={ {color:'red', display: isEnglishTitleIncorrect ? 'none':'block'}}> Your article-title word count must be over 4 words</h2>

                <textarea className='add-new-article' cols="30" rows="10" placeholder='Enter Your English Article Here'
                    onChange={(e)=>{ setEnglishArticle(e.currentTarget.value);
                                    setIsEnglishArticleIncorrect(CheckInput.CheckWordLength(englishArticle, 4));
                                    }}>
                </textarea>
                            <h2 style={ {color:'red', display: isEnglishArticleIncorrect ? 'none':'block'}}> Your article word count must be over 5</h2>
            </div>

            <div style={confirmationPageStyle}>
                <h2 style={{color:'red'}}>WARNING!!!</h2>
                <h1 style={{color:'gold'}}> Are you sure you want to publish the content{contentTobePublished}? </h1>
                    {/* <ul>
                        <li style={{listStyle:'square'}}>You dont have the Amharic version of the {contentTobePublished}</li>
                        <li style={{listStyle:'square'}}>Check if you are publishing the right image for the {contentTobePublished}</li>
                        <li style={{listStyle:'square'}}>You are publishing {contentTobePublished}</li>
                    </ul> */}
                    <div style={{display:'flex', gap:'1rem'}}>
                        <div onClick={()=>{
                            SendArticleDataToServer();
                            setConfPageDisp(false);
                            }}> <PublishBtn /> </div>
                        <div onClick={()=>{setConfPageDisp(false);}}> <Cancel /> </div>
                    </div>
                        
            </div>
        </div>

        <div style={{display:confPageDisp ? 'none':'flex'}} className='publish-cancel-btn-container'>
           <div onClick={()=>{CheckInputAccuracy();
                             }}> <PublishBtn /> </div>
            {/* <div> <Cancel /> </div>  */}
        </div>
        <h1 style={{color:'red',display: fixErrorMessage ? 'block':'none'}}> Article/Story can not be published. Fix the above erorr's!!!!!</h1>
        
    </div>
  )
}
