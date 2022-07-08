import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";
export const loginApi=createAsyncThunk(
    'login',
    async({username,password})=>{
        try {
            let res=await axios.post('http://e47b-122-168-178-44.ngrok.io/api/apilogin/',{
                username,password
            });
            console.log(res)
              localStorage.setItem('token',JSON.stringify(res.data.token)) 
              swal(res.data.message);
              
        } catch (error) {
            console.log(error)
        }
    }
)
const loginSlice=createSlice({
    name:'login',
    initialState:{
        data:{},
        status:'idle',
        loading:false
 },
 reducers:{},
 extraReducers:(builder)=>{
     builder.addCase(loginApi.fulfilled,(state,action)=>{
         state.data=action.payload;
         state.status="idle"

     })
     .addCase(loginApi.pending,(state)=>{
          state.status="loading"
     })
    .addCase(loginApi.rejected,(state)=>{
        state.status="error"
    })
 }
})
export const {rootReducer}=loginSlice.actions
export default loginSlice.reducer