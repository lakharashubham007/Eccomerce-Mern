/* eslint-disable no-unused-vars */
 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const intitialState = {
    inAuthenticated : false,
    isLoading : false,
    user : null,
}

export const registerUser = createAsyncThunk(
    "/auth/register",

    async (formData) => {
        const response = await axios.post(
            "http://localhost:5173/api/auth/register",
            formData,
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
);




const authSlice = createSlice({
    name : 'auth',
    intitialState,
    reducers : {
        setUser:(state,action)=> {}
   }
})

export const {setUser} = authSlice.action;
export default authSlice.reducer