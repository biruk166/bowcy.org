import { createSlice } from "@reduxjs/toolkit";
import homepage from './homepage.jpg';

const intialState = {
    currentImage: 'belloooo',
    currentArticle: "",
    articleAuthor: "",
    articlePublishedDate:"",
}

export const SetCurrent = createSlice({
    name: 'current',
    intialState,

    reducers:{
        SetCurrentArticleAndImage: (state)=>{
            // state.currentArticle = action.payload[0];
            // state.currentImage = action.payload[1];
            // state.articleAuthor = action.payload[2];
            // state.articlePublishedDate = action.payload[3];
            state.currentArticle = "helooo";
        }
    }
})

export {homepage}
export const {SetCurrentArticleAndImage} = SetCurrent.actions;
export default SetCurrent.reducer;