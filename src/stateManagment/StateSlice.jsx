import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    // provides information to the article component
    article: {title:'', articleFilePath:'', imgFilePath:'', publishedDate:'', authorEmail:'', authorName:''},

    // selected languge by the user(english, amharic)
    languge: '',

    
}