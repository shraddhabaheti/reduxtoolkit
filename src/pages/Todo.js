import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


import TodoItem from "../pages/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,editTodo,removeTodo } from "../features/todoslice";

function Todo() {
    const [data, setData] = useState();
    const count = useSelector((state) => state.todo.count);
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const [ isEditing, setEditing ] = useState(false);
    const handleAddTodo = (e) => {
        e.preventDefault();
        
        dispatch(addTodo(data))
        setData('')
         
           
    };
    
    const handleTodoDone = (id) => {
        dispatch(removeTodo(id));
        
       
    };
    // const handleTodo=(todo)=>{
    //     dispatch(editTodo(todo));
    // }

    return (
        <div className="App">
            <h1 className="h1">TODO List is define</h1>
            <form className="App-form" onSubmit={handleAddTodo}>
                <div className="textfield">

                </div>

                <input type="text" onInput={(e) => setData(e.target.value)} />
                <Fab size="small" color="secondary" aria-label="add" className="icon" type="submit" >
                    <AddIcon />
                </Fab>

            </form>
            <div className="Todos">
                {count > 0 &&
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            id={todo.id}
                            onCheck={handleTodoDone}
                           
                        />
                    ))}
                {count === 0 && <p></p>}
                
             </div>
        </div>
    );
}

export default Todo;