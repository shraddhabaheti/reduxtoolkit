import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
const initialState = {
    count :0,
    todos :[]
}
const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:(state,action)=>{
 
            const todo = {
                id: Math.random() ,
                text: action.payload,
              };
              state.todos.push(todo);
              state.count += 1;
            },
            removeTodo: (state, action) => {
              state.todos = state.todos.filter((todo) => todo.id !== action.payload);
              state.count -= 1;
          
        },
         editTodo :(state,action)=>{
             state.todos.map((todo)=>{
                 if(todo.id===action.payload){
                     todo.data=action.payload.setData
                 }

             })
         }

        // editTodo: (state, action) => {
           
        //     state.todos = state.todos.map((todo) => 
        //       todo.id === action.payload.id ? action.payload : todo);
        //   }
    },
})
export const {addTodo,removeTodo,editTodo}=todoslice.actions
export default todoslice.reducer