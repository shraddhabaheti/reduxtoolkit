import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice";
import registrationSlice from "../features/registrationSlice";
//import todoReducer from '../features/todoslice'
import todoReducer from '../curd/todosslice'
//import todoReducer from '../slider/todosilder'
export default configureStore ({
       reducer :{
           login :loginSlice,
           register:registrationSlice,
           todo :todoReducer,
          
       }

})