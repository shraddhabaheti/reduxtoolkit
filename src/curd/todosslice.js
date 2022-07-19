import { createSlice } from "@reduxjs/toolkit"
//import state from "sweetalert/typings/modules/state";

const initialState = {
    count: 0,
    todos: [],
}
export const todosslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const todo = {
                id: Math.random(),
                text: action.payload
            };
            state.todos.push(todo);
            state.count += 1
        },
        removeTodo: (state, action) => {
           
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count -= 1;

        },
        editTodo: (state, action) => {
            // state.todos.map((todo) => {
            //     if (todo.id === action.payload.id) {
            //     todo.text = action.payload.text
            //     }
            //     return todo;

            // })
            for(let todo of state.todos){
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
            }
           
        },
        
       
    }
})
export const { addTodos, removeTodo, editTodo } = todosslice.actions;
export default todosslice.reducer;