/* eslint-disable no-unused-vars */
 import { createSlice } from "@reduxjs/toolkit"


const intitialState = {
    inAuthenticated : false,
    isLoading : false,
    user : null,
}




const authSlice = createSlice({
    name : 'auth',
    intitialState,
    reducers : {
        setUser:(state,action)=> {}
   }
})

export const {setUser} = authSlice.action;
export default authSlice.reducer