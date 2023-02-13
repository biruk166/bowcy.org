import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";



const initialState = {
    // provides information to the article component
    article: {articleId:'', englishAvailable:'', englishTitle:'', englishArticle:'', 
              amharicAvailable :'', amharicTitle:'',amharicArticle:'', publisherEmail:'',
              articleImage:'', deleteStatus:'', hideStatus:'', likeCount:'', readerCount:'',
              publishedData:'', publisherNameEnglish:'', publisherNameAmharic:''},

    // selected languge by the user(english, amharic)
    languge: 1,

    setEmail: '',
}

export const StateSlice = createSlice({
    name:'appState',
    initialState,

    reducers: {

        // sets the languge selected by the user
        SetUserLangPref:(state)=>{
            if(state.languge === 1){state.languge = 0;}
            else{ state.languge = 0}
        },

        // get the article from the database and assign it to the article object
        // so the universal article container will take the object and display it.
        SetArticle:(state, action)=>{
            state.article = action.payload;
        },

        // sets the email for the email box so it will be auto selected when
        // user clickes emailAuthor etc button
        setEmail:(state, action)=>{
            state.setEmail = action.payload;
        }
      },
})


export const {SetUserLangPref} = StateSlice.actions;
export default StateSlice.reducer;