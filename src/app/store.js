import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice";
import registrationSlice from "../features/registrationSlice";
import todoReducer from '../features/todoslice'

export default configureStore ({
       reducer :{
           login :loginSlice,
           register:registrationSlice,
           todo :todoReducer
           
       }

})