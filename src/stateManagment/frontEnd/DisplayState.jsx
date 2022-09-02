import { createSlice } from '@reduxjs/toolkit'
import { act } from '@testing-library/react'

const initialStateVal = {
  emailForm: false,
  donateForm: true,
}

export const displaySlice = createSlice({
  name: 'display',
  initialState: initialStateVal,

  reducers: {
    // sets email form status true or false 
    setEmailFormStatus: (state, action) => 
    {
      state.emailForm = action.payload;
    },

    //toggles between true and false. it will be called on click event
    // if true it diplayes the form else it doesnt
    changeEmailDispState: (state) => 
    {
      state.emailForm ? displaySlice.caseReducers.setEmailFormStatus(state, false) : displaySlice.caseReducers.setEmailFormStatus(state, true);
      console.log(state.emailForm);
    },

   

    //use to set donate form visiblity true or false
    setDonateFormStatus: (state, action) => 
    {
      state.donateForm = action.payload;
    },

    //toggles between true and false. it will be called on click event
    //if true it diplayes the form else it doesnt
    changeDonateFormDispState: (state) => 
    {
      state.donateForm ? displaySlice.caseReducers.setDonateFormStatus(state, false) : displaySlice.caseReducers.setDonateFormStatus(state, true);
      console.log(state.donateForm );
      console.log(initialStateVal.donateForm);
    }
  },
})

// Action creators are generated for each case reducer function
export const {changeDonateFormDispState , changeEmailDispState } = displaySlice.actions

export default displaySlice.reducer