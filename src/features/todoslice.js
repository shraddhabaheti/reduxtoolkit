import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
//import state from "sweetalert/typings/modules/state";
const initialState = {
    count: 0,
    todos: []
}
const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {

            const todo = {
                id: Math.random(),
                text: action.payload,
            };
            state.todos.push(todo);
            state.count += 1;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count -= 1;

        },
        editTodo: (state, action) => {
            
            // console.log(action.payload)
             
           state.todos.map((todo) => {
                  
                if (todo.id === action.payload.id) {
                  todo.data = action.payload.setData
                }
            
                return todo;
               
            })
           
        }
        
       
    },
})

export const { addTodo, removeTodo, editTodo } = todoslice.actions
export default todoslice.reducer