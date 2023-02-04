import { createSlice } from "@reduxjs/toolkit";

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
        SetCurrentArticleAndImage: (state, action)=>{
            state.currentArticle = action.payload[0];
            state.currentImage = action.payload[1];
            state.articleAuthor = action.payload[2];
            state.articlePublishedDate = action.payload[3];
        }
    }
})

export const {SetCurrentArticleAndImage} = SetCurrent.actions;
export default SetCurrent.reducer;