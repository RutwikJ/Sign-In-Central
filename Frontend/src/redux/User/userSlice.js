import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: false,
  loading: false,
};
export const userSlice= createSlice({
  name:'User',
  initialState,
  reducers:{
            signInStart:(state)=>{
                    state.loading=true
            },
            signInSuccess:(state,action)=>{
                state.currentUser=action.payload,
                state.loading=false,
                state.error=false
            },
            signInFailure:(state,action)=>{
                state.loading=false,
                state.error=action.payload
               
            }
  }  

    
})
export const {signInStart,signInSuccess,signInFailure}=userSlice.actions;
export default userSlice.reducer;